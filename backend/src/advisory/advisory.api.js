import express from "express"
import { HttpParamsValidators } from "../../lib/http"
import { NewAuthAdminMiddleware } from "../auth/auth.api.middleware"

export function NewAdvisoryAPI(AdvisoryService, AuthService){
    const app = express()
    app.use(express.json())
    
    app.get("/advisory/list" , NewAuthAdminMiddleware(AuthService), async (req,res)=>{
        const docs = await AdvisoryService.getList()
        res.json(docs)
    })

    app.get("/advisory/get", NewAuthAdminMiddleware(AuthService), async (req,res)=>{
        const id = HttpParamsValidators.MustBeString(req.query,"id", 8)
        const doc = await AdvisoryService.getAdvisory(id)
        res.json(doc)
    })

    app.post("/advisory/create", async (req,res)=>{
        const infor = {
            Name : req.body.Name,
            NumberPhone : req.body.NumberPhone,
            Email : req.body.Email,
            Address : req.body.Address,
            Age : req.body.Age
        };
        const doc = await AdvisoryService.createAdvisory(infor);
        res.json(doc)
    })

    app.post("/advisory/update", NewAuthAdminMiddleware(AuthService), async (req,res) => {
        const id = HttpParamsValidators.MustBeString(req.query, "id", 8);
        const params = {};
        if (req.body.Name) {
            params.Name = req.body.Name;
        }
        if (req.body.Address) {
            params.Address = req.body.Address;
        }
        if (req.body.Email) {
            params.Email = req.body.Email;
        }
        if (req.body.NumberPhone) {
            params.NumberPhone = req.body.NumberPhone;
        }
        if (req.body.Age) {
            params.Age = req.body.Age;
        }
        const doc = await AdvisoryService.updateAdvisory(id , params);
        res.json(doc);
    })
    

    app.post("/advisory/delete", NewAuthAdminMiddleware(AuthService), async (req,res)=>{
        const id = HttpParamsValidators.MustBeString(req.query,"id",8)
        const doc = await AdvisoryService.deleteAdvisory(id)
        res.json(doc);
    })

    return app
}
import express from "express"
import { HttpParamsValidators } from "../../lib/http"
import { NewAuthAdminMiddleware, NewAuthMiddleware } from "../auth/auth.api.middleware"

export function NewOverviewAPI(OverviewService, AuthService){
    const app = express()
    app.use(express.json())
    
    app.get("/overview/list", NewAuthAdminMiddleware(AuthService), async (req,res)=>{
        const docs = await OverviewService.getOverviewList()
        res.json(docs)
    })

    app.get("/overview/get", NewAuthAdminMiddleware(AuthService), async (req,res)=>{
        const id = HttpParamsValidators.MustBeString(req.query,"id", 9)
        const doc = await OverviewService.getOverview(id)
        res.json(doc)
    })

    app.post("/overview/:id/create", NewAuthMiddleware(AuthService), async (req,res)=>{
        if(req.session.user.status!==true){
            return res.json("You're not allowed here!")
        }
        const params = {
            Title : req.body.Title,
            Content : req.body.Content,
            Img : req.body.Img,
            Id_InforPharmacy : req.params.id
        };
        const doc = await OverviewService.createOverview(params);
        res.json(doc)
    })

    app.post("/overview/update", NewAuthMiddleware(AuthService), async (req,res) => {
        if(req.session.user.status!==true){
            return res.json("You're not allowed here!")
        }
        const id = HttpParamsValidators.MustBeString(req.query, "id", 9);
        const params = {};
        if (req.body.Title) {
            params.Title = req.body.Title;
        }
        if (req.body.Content) {
            params.Content = req.body.Content;
        }
        if (req.body.Img) {
            params.Img = req.body.Img;
        }
        const doc = await OverviewService.updateOverview(id, params);
        res.json(doc);
    })
    
    app.post("/overview/delete", NewAuthAdminMiddleware(AuthService), async (req,res)=>{
        const id = HttpParamsValidators.MustBeString(req.query,"id",9)
        const doc = await OverviewService.deleteOverview(id)
        res.json(doc);
    })

    return app
}
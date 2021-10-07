import express from "express"
import { HttpParamsValidators } from "../../lib/http"
import { NewAuthMiddleware, NewAuthAdminMiddleware } from "../auth/auth.api.middleware";

export function NewRateAPI(RateService,AuthService){
    const app = express()
    app.use(express.json())
    
    app.get("/rate/list", NewAuthAdminMiddleware(AuthService), async (req,res)=>{
        const docs = await RateService.getRateList()
        res.json(docs)
    })

    app.get("/rate/get",NewAuthAdminMiddleware(AuthService), async (req,res)=>{
        const id = HttpParamsValidators.MustBeString(req.query,"id", 9)
        const doc = await RateService.getRate(id)
        res.json(doc)
    })

    app.post("/rate/:id/create",NewAuthMiddleware(AuthService), async (req,res)=>{
        if(!req.session.user){
            return `Login first before voting!`
        }
        const rate = {
            Point : req.body.Point,
            CriteriaPoint1 : req.body.CriteriaPoint1,
            CriteriaPoint2 : req.body.CriteriaPoint2,
            CriteriaPoint3 : req.body.CriteriaPoint3,
            CriteriaPoint4 : req.body.CriteriaPoint4,
            CriteriaPoint5 : req.body.CriteriaPoint5,
            Comment : req.body.Comment,
            id_InforPharmacy : req.params.id,
            id_User : data.user_id
        };
        const doc = await RateService.createRate(rate);
        res.json(doc)
    })

    app.post("/rate/update",NewAuthMiddleware(AuthService), async (req,res) => {
        let data = req.session.user
        if(!data){
            return `Login first before voting!`
        }
        const id = HttpParamsValidators.MustBeString(req.query, "id", 9);
        const rate = {};
        if (req.body.Point) {
            rate.Point = req.body.Point;
        }
        if (req.body.CriteriaPoint1) {
            rate.CriteriaPoint1 = req.body.CriteriaPoint1;
        }
        if (req.body.CriteriaPoint2) {
            rate.CriteriaPoint2 = req.body.CriteriaPoint2;
        }
        if (req.body.CriteriaPoint3) {
            rate.CriteriaPoint3 = req.body.CriteriaPoint3;
        }
        if (req.body.CriteriaPoint4) {
            rate.CriteriaPoint4 = req.body.CriteriaPoint4;
        }
        if (req.body.CriteriaPoint5) {
            rate.CriteriaPoint5 = req.body.CriteriaPoint5;
        }
        if (req.body.Comment) {
            rate.Comment = req.body.Comment;
        }
        const doc = await RateService.updateRate(id , rate);
        res.json(doc);
    })
    
    app.post("/rate/delete", NewAuthMiddleware(AuthService), async (req,res)=>{
        const id = HttpParamsValidators.MustBeString(req.query,"id",9)
        const doc = await RateService.deleteRate(id)
        res.json(doc);
    })

    return app
}
import express from "express"
import { HttpParamsValidators } from "../../lib/http"
import { NewAuthAdminMiddleware, NewAuthMiddleware } from "../auth/auth.api.middleware"

export function NewInforPharAPI(InforPharService, PharOwnerService, OfferService,RateService, OverviewService, AuthService){
    const app = express()
    app.use(express.json())
    
    app.get("/infor-phar/list", NewAuthAdminMiddleware(AuthService), async (req,res)=>{
        const docs = await InforPharService.getList()
        res.json(docs)
    })

    app.get("/infor-phar/get", NewAuthAdminMiddleware(AuthService),async (req,res)=>{
        const id = HttpParamsValidators.MustBeString(req.query,"id", 8)
        const doc = await InforPharService.getInforPhar(id)
        res.json(doc)
    })

    app.post("/infor-phar/create", NewAuthAdminMiddleware(AuthService),async (req,res)=>{
        const infor = {
            NamePharOwner : req.body.NamePharOwner,
            NamePhar : req.body.NamePhar,
            Adress : req.body.Adress,
            Slogan : req.body.Slogan,
            Type : req.body.Type,
            NumberPhone : req.body.NumberPhone,
            Fanpage : req.body.Fanpage,
            Comment : req.body.Comment,
            Viewer : req.body.Viewer,
            Longitude : req.body.Longitude,
            Latitude : req.body.Latitude,
            PointTotal : req.body.Point,
            CriteriaPoint1 : req.body.CriteriaPoint1,
            CriteriaPoint2 : req.body.CriteriaPoint2,
            CriteriaPoint3 : req.body.CriteriaPoint3,
            CriteriaPoint4 : req.body.CriteriaPoint4,
            CriteriaPoint5 : req.body.CriteriaPoint5
        };
        const doc = await InforPharService.createInforPhar(infor);
        res.json(doc)
    })

    app.post("/infor-phar/update", NewAuthMiddleware(AuthService), async (req,res) => {
        if(req.session.user.status!==true){
            return res.json("You're not allowed here!")
        }
        const id = HttpParamsValidators.MustBeString(req.query, "id", 8);
        const params = {};
        if (req.body.NamePharOwner) {
            params.NamePharOwner = req.body.NamePharOwner;
        }
        if (req.body.NamePhar) {
            params.NamePhar = req.body.NamePhar;
        }
        if (req.body.Adress) {
            params.Adress = req.body.Adress;
        }
        if (req.body.Slogan) {
            params.Slogan = req.body.Slogan;
        }
        if (req.body.Type) {
            params.Type = req.body.Type;
        }
        if (req.body.NumberPhone) {
            params.NumberPhone = req.body.NumberPhone;
        }
        if (req.body.Fanpage) {
            params.Fanpage = req.body.Fanpage;
        }
        if (req.body.Comment) {
            params.Comment = req.body.Comment;
        }
        if (req.body.Viewer) {
            params.Viewer = req.body.Viewer;
        }
        if (req.body.Longitude) {
            params.Longitude = req.body.Longitude;
        }
        if (req.body.Latitude) {
            params.Latitude = req.body.Latitude;
        }
        if (req.body.PointTotal) {
            rate.PointTotal = req.body.PointTotal;
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
        const doc = await InforPharService.updateInforPhar(id , params);
        res.json(doc);
    })
    

    app.post("/infor-phar/delete", NewAuthAdminMiddleware(AuthService), async (req,res)=>{
        const id = HttpParamsValidators.MustBeString(req.query,"id",8)
        const doc = await InforPharService.deleteInforPhar(id)
        await OverviewService.deleteOverviewByPharmacy(id)
        await OfferService.deleteOfferByPharmacy(id),
        await PharOwnerService.deletePharOwnerByPharmacy(id),
        await RateService.deleteRateByPharmacy(id)
        res.json(doc);
    })

    return app
}
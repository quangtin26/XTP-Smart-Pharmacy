import express from "express";
import { HttpParamsValidators } from "../../lib/http";
import { NewAuthAdminMiddleware } from "../auth/auth.api.middleware";

export function NewUserAPI(UserService, AuthService) {
    const app = express();

    app.get("/user/list", NewAuthAdminMiddleware(AuthService), async (req,res) => {
        const docs = await UserService.listUser();
        res.json(docs);
    })

    app.get("/user/get", NewAuthAdminMiddleware(AuthService), async (req,res) => {
        if (req.query.id) {
            const id = HttpParamsValidators.MustBeString(req.query,"id", 7)
            const doc = await UserService.getUser(id);
            return res.json(doc);
        }
        if (req.query.username) {
            const username = req.query.username;
            const doc = await UserService.getUserByUsername(username);
            return res.json(doc);
        }
    })

    app.post("/user/create", async (req,res) => {
        const params = {
            username : req.body.username,
            password : req.body.password,
            status : false
        }
        const docs = await UserService.createUser(params);
        res.json(docs);
    })

    app.post("/user/update", NewAuthAdminMiddleware(AuthService), async (req,res)=>{
        const id = HttpParamsValidators.MustBeString(req.query,"id", 7)
        const doc = await UserService.updateToPharmacy(id)
        res.json(doc)
    })
    return app;
}
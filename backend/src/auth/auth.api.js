import express from "express";
import { NewAuthMiddleware } from "./auth.api.middleware";
export function NewAuthAPI(AuthService, UserService) {
    const app = express();

    app.post("/login", async (req,res) => {
        const params = {
            username : req.body.username,
            password : req.body.password
        }
        const user = await UserService.getUserByUsername(params.username)
        console.log(user);
        const doc = await AuthService.Login(params, user);
        if(!doc){
            return 'Login false!'
        }
        req.session.user = doc;
        res.json(doc);
    })

    app.post("/logout", async (req,res)=>{
        req.session.destroy(function(err) {
            return res.status(200).json({status: 'success', session: 'cannot access session here'})
        })
    })

    app.get("/me",NewAuthMiddleware(AuthService), async (req,res) => {
        let data = req.session.user
        if(!data){
            return `Login first!`
        }
        const doc = await UserService.getUser(data.user_id);
        res.json(doc);
    })

    return app;
}
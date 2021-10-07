import express from "express"
import { HttpParamsValidators } from "../../lib/http"

export function NewNewsAPI(NewsService){
    const app = express()
    app.use(express.json())
    
    app.get("/news/list", async (req,res)=>{
        const docs = await NewsService.getNewsList()
        res.json(docs)
    })

    app.get("/news/get", async (req,res)=>{
        const id = HttpParamsValidators.MustBeString(req.query,"id", 10)
        const doc = await NewsService.getNews(id)
        res.json(doc)
    })

    app.post("/news/:id/create", async (req,res)=>{
        const news = {
            catagory : req.body.catagory,
            description : req.body.description,
            title : req.body.title,
            content : req.body.content,
            img : req.body.img,
            imgThumb : req.body.imgThumb,
            Id_InforPharmacy : req.params.id
        };
        const doc = await NewsService.createNews(news);
        res.json(doc)
    })

    app.post("/news/update", async (req,res) => {
        const id = HttpParamsValidators.MustBeString(req.query, "id", 10);
        const news = {};
        if (req.body.catagory) {
            params.catagory = req.body.catagory;
        }
        if (req.body.description) {
            params.description = req.body.description;
        }
        if (req.body.title) {
            params.title = req.body.title;
        }
        if (req.body.content) {
            params.content = req.body.content;
        }
        if (req.body.img) {
            params.img = req.body.img;
        }
        if (req.body.imgThumb) {
            params.imgThumb = req.body.imgThumb;
        }
        const doc = await NewsService.updateNews(id , news);
        res.json(doc);
    })
    
    app.post("/news/delete", async (req,res)=>{
        const id = HttpParamsValidators.MustBeString(req.query,"id",10)
        const doc = await NewsService.deleteNews(id)
        res.json(doc);
    })

    return app
}
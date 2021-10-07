import express from "express"
import { HttpParamsValidators } from "../../lib/http"

export function NewOfferAPI(OfferService){
    const app = express()
    app.use(express.json())
    
    app.get("/offer/list", async (req,res)=>{
        const docs = await OfferService.getOfferList()
        res.json(docs)
    })

    app.get("/offer/get", async (req,res)=>{
        const id = HttpParamsValidators.MustBeString(req.query,"id", 10)
        const doc = await OfferService.getOffer(id)
        res.json(doc)
    })

    app.post("/offer/:id/create", async (req,res)=>{
        const offer = {
            NameOffer : req.body.NameOffer,
            InforOffer : req.body.InforOffer,
            Category : req.body.Category,
            Type : req.body.Type,
            Id_Pharmacy_Owner : req.params.id
        };
        const doc = await OfferService.createOffer(offer);
        res.json(doc)
    })

    app.post("/offer/update", async (req,res) => {
        const id = HttpParamsValidators.MustBeString(req.query, "id", 10);
        const params = {};
        if (req.body.NameOffer) {
            params.NameOffer = req.body.NameOffer;
        }
        if (req.body.InforOffer) {
            params.InforOffer = req.body.InforOffer;
        }
        if (req.body.Category) {
            params.Category = req.body.Category;
        }
        if (req.body.Type) {
            params.Type = req.body.Type;
        }
        const doc = await OfferService.updateOffer(id , params);
        res.json(doc);
    })
    
    app.post("/offer/delete", async (req,res)=>{
        const id = HttpParamsValidators.MustBeString(req.query,"id",10)
        const doc = await OfferService.deleteOffer(id)
        res.json(doc);
    })

    return app
}
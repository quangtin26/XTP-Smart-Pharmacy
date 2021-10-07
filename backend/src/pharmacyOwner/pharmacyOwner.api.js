import express from "express"
import { HttpParamsValidators } from "../../lib/http"

export function NewPharOwnerAPI(PharOwnerService){
    const app = express()
    app.use(express.json())
    
    app.get("/phar-owner/list", async (req,res)=>{
        const docs = await PharOwnerService.getPharOwnerList()
        res.json(docs)
    })

    app.get("/phar-owner/get", async (req,res)=>{
        const id = HttpParamsValidators.MustBeString(req.query,"id", 12)
        const doc = await PharOwnerService.getPharOwner(id)
        res.json(doc)
    })

    app.post("/phar-owner/:id/create", async (req,res)=>{
        const pharOwner = {
            Type : req.body.Type,
            Id_InforPharmacy : req.params.id
        };
        const doc = await PharOwnerService.createPharOwner(pharOwner);
        res.json(doc)
    })

    // app.post("/phar-owner/update", async (req,res) => {
    //     const id = HttpParamsValidators.MustBeString(req.query, "id", 12);
    //     const PharOwner = {};
    //     if (req.body.Type) {
    //         params.Type = req.body.Type;
    //     }
    //     const doc = await PharOwnerService.updatePharOwner(id , PharOwner);
    //     res.json(doc);
    // })
    
    app.post("/phar-owner/delete", async (req,res)=>{
        const _id = HttpParamsValidators.MustBeString(req.query,"id",12)
        const doc = await PharOwnerService.deletePharOwner(_id)
        res.json(doc);
    })

    return app
}
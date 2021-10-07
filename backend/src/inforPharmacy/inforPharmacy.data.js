import { MongoCommon } from "../../lib/mongodb";
const MongoData = new MongoCommon();
export class InforPharMongoBase{
    constructor(db){
        this.db=db
        this.col_inforphar = this.db.collection("InforPharmacy")
    }

    async getList() {
        const docs = await this.col_inforphar.find().toArray()
        return MongoData.Many(docs)
    }

    async getInforPhar(id){
        console.log(id);
        const doc = await this.col_inforphar.findOne({_id:id})
        console.log(doc);
        return MongoData.One(doc)
    }

    async createInforPhar(param) {
        const doc = await MongoData.ToMongo(param);
        await this.col_inforphar.insertOne(doc);
        return param;
    }

    async updateInforPhar(param) {
        await this.col_inforphar.updateOne({_id : param.id} , {$set : param});
        const doc = await MongoData.One(param);
        return doc;
    }

    async deleteInforPhar(id){
        const doc = await this.getInforPhar(id)
        await this.col_inforphar.deleteOne({_id:id})
        return doc
    }
}
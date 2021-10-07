import { MongoCommon } from "../../lib/mongodb";
const MongoData = new MongoCommon();
export class AdvisoryMongoBase{
    constructor(db){
        this.db=db
        this.col_advisory = this.db.collection("Advisory")
    }

    async getList() {
        const docs = await this.col_advisory.find().toArray()
        return MongoData.Many(docs)
    }

    async getAdvisory(id){
        const doc = await this.col_advisory.findOne({_id:id})
        return MongoData.One(doc)
    }

    async createAdvisory(param) {
        const doc = await MongoData.ToMongo(param);
        await this.col_advisory.insertOne(doc);
        return param;
    }

    async updateAdvisory(param) {
        await this.col_advisory.updateOne({_id : param.id} , {$set : param});
        const doc = await MongoData.One(param);
        return doc;
    }

    async deleteAdvisory(id){
        const doc = await this.getAdvisory(id)
        await this.col_advisory.deleteOne({_id:id})
        return doc
    }
}
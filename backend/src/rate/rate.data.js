import { MongoCommon } from "../../lib/mongodb";
const MongoData = new MongoCommon();
export class RateMongoBase{
    constructor(db){
        this.db=db
        this.col_rate = this.db.collection("Rate")
    }

    async getRateList() {
        const docs = await this.col_rate.find().toArray()
        return MongoData.Many(docs)
    }

    async getRate(id){
        const doc = await this.col_rate.findOne({_id:id})
        return MongoData.One(doc)
    }

    async createRate(rate) {
        const doc = await MongoData.ToMongo(rate);
        await this.col_rate.insertOne(doc);
        return rate;
    }

    async updateRate(rate) {
        await this.col_rate.updateOne({_id : rate.id} , {$set : rate});
        const doc = await MongoData.One(rate);
        return doc;
    }

    async deleteRate(id){
        const doc = await this.getRate(id)
        await this.col_rate.deleteOne({Id_InforPharmacy:id})
        return doc
    }

    async deleteRateByPharmacy(id){
        const doc = await this.getRateList()
        const docs = doc.filter(doc => doc.id_InforPharmacy == id)
        await this.col_rate.deleteMany({id_InforPharmacy:id})
        return docs
    }
}
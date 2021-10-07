import { MongoCommon } from "../../lib/mongodb";
const MongoData = new MongoCommon();
export class OverviewMongoBase{
    constructor(db){
        this.db=db
        this.col_overview = this.db.collection("Overview")
    }

    async getOverviewList() {
        const docs = await this.col_overview.find().toArray()
        return MongoData.Many(docs)
    }

    async getOverview(id){
        const doc = await this.col_overview.findOne({_id:id})
        return MongoData.One(doc)
    }

    async createOverview(overview) {
        const doc = await MongoData.ToMongo(overview);
        await this.col_overview.insertOne(doc);
        return overview;
    }

    async updateOverview(overview) {
        await this.col_overview.updateOne({_id : overview.id} , {$set : overview});
        const doc = await MongoData.One(overview);
        return doc;
    }

    async deleteOverview(id){
        const doc = await this.getOverview(id)
        await this.col_overview.deleteOne({_id:id})
        return doc
    }

    async deleteOverviewByPharmacy(id){
        const doc = await this.getOverviewList()
        const docs = doc.filter(doc => doc.Id_InforPharmacy == id)
        await this.col_overview.deleteMany({Id_InforPharmacy:id})
        return docs
    }
}
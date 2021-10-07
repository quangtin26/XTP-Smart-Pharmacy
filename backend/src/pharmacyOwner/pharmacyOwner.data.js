import { MongoCommon } from "../../lib/mongodb";
const MongoData = new MongoCommon();
export class PharOwnerMongoBase{
    constructor(db){
        this.db=db
        this.col_pharOwner = this.db.collection("PharmacyOwner")
    }

    async getPharOwnerList() {
        const docs = await this.col_pharOwner.find().toArray()
        return MongoData.Many(docs)
    }

    async getPharOwner(id){
        const doc = await this.col_pharOwner.findOne({_id:id})
        return MongoData.One(doc)
    }

    async createPharOwner(pharOwner) {
        const doc = await MongoData.ToMongo(pharOwner);
        await this.col_pharOwner.insertOne(doc);
        return PharOwner;
    }

    async updatePharOwner(pharOwner) {
        await this.col_pharOwner.updateOne({_id : pharOwner.id} , {$set : pharOwner});
        const doc = await MongoData.One(pharOwner);
        return doc;
    }

    async deletePharOwner(id){
        const doc = await this.getPharOwner(id)
        await this.col_offer.deleteOne({_id:id})
        return doc
    }

    async deletePharOwnerByPharmacy(id){
        const doc = await this.getPharOwnerList()
        const docs = doc.filter(doc => doc.Id_InforPharmacy == id)
        await this.col_pharOwner.deleteMany({Id_InforPharmacy:id})
        return docs
    }
}
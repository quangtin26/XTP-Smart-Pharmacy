import { MongoCommon } from "../../lib/mongodb";
const MongoData = new MongoCommon();
export class OfferMongoBase{
    constructor(db){
        this.db=db
        this.col_offer = this.db.collection("Offer")
    }

    async getOfferList() {
        const docs = await this.col_offer.find().toArray()
        return MongoData.Many(docs)
    }

    async getOffer(id){
        const doc = await this.col_offer.findOne({_id:id})
        return MongoData.One(doc)
    }

    async createOffer(offer) {
        const doc = await MongoData.ToMongo(offer);
        await this.col_offer.insertOne(doc);
        return offer;
    }

    async updateOffer(offer) {
        await this.col_offer.updateOne({_id : offer.id} , {$set : offer});
        const doc = await MongoData.One(offer);
        return doc;
    }

    async deleteOffer(id){
        const doc = await this.getOffer(id)
        await this.col_offer.deleteOne({_id:id})
        return doc
    }

    async deleteOfferByPharmacy(id){
        const doc = await this.getOfferList()
        const docs = doc.filter(doc => doc.Id_Pharmacy_Owner == id)
        await this.col_offer.deleteMany({Id_Pharmacy_Owner:id})
        return docs
    }
}
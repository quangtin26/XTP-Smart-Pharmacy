import { Random } from "../../lib/random";
const rand = new Random()

export class OfferServiceBase{
    constructor(OfferMongo){
        this.OfferMongo = OfferMongo;
    }

    async getOfferList(){
        const docs = await this.OfferMongo.getOfferList();
        return docs;
    }

    async getOffer(id){
        const doc = await this.OfferMongo.getOffer(id);
        if(!doc){
            return `Không tìm thấy offer với id = ${id}`;
        }
        return doc
    }

    async createOffer(params) {
        let user = {
            id : rand.uppercase(8),
            NameOffer : params.NameOffer,
            InforOffer : params.InforOffer,
            Category : params.Category,
            Type : params.Type,
            cTime : Date.now(),
            Id_Pharmacy_Owner : params.Id_Pharmacy_Owner
        }
        const doc = await this.OfferMongo.createOffer(user);
        return doc;
    }

    async updateOffer(id, params) {
        let offer = await this.getOffer(id);
        if (params.NameOffer) {
            offer.NameOffer = params.NameOffer;
        }if (params.InforOffer) {
            offer.InforOffer = params.InforOffer;
        }
        if (params.Category) {
            offer.Category = params.Category;
        }
        if (params.Type) {
            offer.Type = params.Type;
        }
        offer.uTime = Date.now()
        const doc = await this.OfferMongo.updateOffer(offer);
        return doc;
    }

    async deleteOffer(id){
        const doc = await this.OfferMongo.deleteOffer(id)
        return doc
    }

    async deleteOfferByPharmacy(id){
        const doc = await this.OfferMongo.deleteOfferByPharmacy(id)
        return doc
    }
}
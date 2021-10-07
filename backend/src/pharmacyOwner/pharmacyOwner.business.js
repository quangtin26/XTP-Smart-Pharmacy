import {Random} from "../../lib/random";
export class PharOwnerServiceBase{
    constructor(PharOwnerMongo){
        this.PharOwnerMongo = PharOwnerMongo;
    }

    async getPharOwnerList(){
        const docs = await this.PharOwnerMongo.getPharOwnerList();
        return docs;
    }

    async getPharOwner(id){
        const doc = await this.PharOwnerMongo.getPharOwner(id);
        if(!doc){
            return `Không tìm thấy bài báo với id = ${id}`;
        }
        return doc
    }

    async createPharOwner(params) {
        const rand = new Random()
        let pharOwner = {
            id : rand.uppercase(8),
            Type : params.Type,
            Id_InforPharmacy : params.Id_InforPharmacy,
            cTime : Date.now()
        }
        const doc = await this.PharOwnerMongo.createPharOwner(pharOwner);
        return doc;
    }

    // async updatePharOwner(id, params) {
    //     let pharOwner = await this.getPharOwner(id);
    //     if (params.Type) {
    //         PharOwner.Type = params.Type;
    //     }
    //     PharOwner.utime = Date.now()
    //     const doc = await this.PharOwnerMongo.updatePharOwner(pharOwner);
    //     return doc;
    // }

    async deletePharOwner(id){
        const doc = await this.PharOwnerMongo.deletePharOwner(id)
        return doc
    }

    async deletePharOwnerByPharmacy(id){
        const doc = await this.PharOwnerMongo.deletePharOwnerByPharmacy(id)
        return doc
    }
}
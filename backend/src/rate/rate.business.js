import { Random } from "../../lib/random";
const rand = new Random()
export class RateServiceBase{
    constructor(RateMongo,InforPharMongo){
        this.InforPharMongo = InforPharMongo
        this.RateMongo = RateMongo;
    }

    async getRateList(){
        const docs = await this.RateMongo.getRateList();
        return docs;
    }

    async getRate(id){
        const doc = await this.RateMongo.getRate(id);
        if(!doc){
            return `Không tìm thấy đánh giá với id = ${id}`;
        }
        return doc
    }

    async createRate(params) {
        let rate = {
            id : rand.uppercase(8),
            Point : params.Point,
            CriteriaPoint1 : params.CriteriaPoint1,
            CriteriaPoint2 : params.CriteriaPoint2,
            CriteriaPoint3 : params.CriteriaPoint3,
            CriteriaPoint4 : params.CriteriaPoint4,
            CriteriaPoint5 : params.CriteriaPoint5,
            Comment : params.Comment,
            cTime : Date.now(),
            id_InforPharmacy : params.id_InforPharmacy,
            id_User : params.id_User
        }
        const doc = await this.RateMongo.createRate(rate);
        return doc;
    }

    async updateRate(id, params) {
        let rate = await this.getRate(id);
        if (params.Point) {
            rate.Point = params.Point;
        }if (params.CriteriaPoint1) {
            rate.CriteriaPoint1 = params.CriteriaPoint1;
        }
        if (params.CriteriaPoint2) {
            rate.CriteriaPoint2 = params.CriteriaPoint2;
        }
        if (params.CriteriaPoint3) {
            rate.CriteriaPoint3 = params.CriteriaPoint3;
        }
        if (params.CriteriaPoint4) {
            rate.CriteriaPoint4 = params.CriteriaPoint4;
        }
        if (params.CriteriaPoint5) {
            rate.CriteriaPoint5 = params.CriteriaPoint5;
        }
        if (params.Comment) {
            rate.Comment = params.Comment;
        }
        rate.uTime = Date.now()
        const doc = await this.RateMongo.updateRate(rate);
        return doc;
    }

    async deleteRate(id){
        const doc = await this.RateMongo.deleteRate(id)
        return doc
    }

    async deleteRateByPharmacy(id){
        const doc = await this.RateMongo.deleteRateByPharmacy(id)
        return doc
    }
}
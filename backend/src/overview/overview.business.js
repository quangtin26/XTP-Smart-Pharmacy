import { Random } from "../../lib/random";

export class OverviewServiceBase{
    constructor(OverviewMongo){
        this.OverviewMongo = OverviewMongo;
    }

    async getOverviewList(){
        const docs = await this.OverviewMongo.getOverviewList();
        return docs;
    }

    async getOverview(id){
        const doc = await this.OverviewMongo.getOverview(id);
        if(!doc){
            return `Không tìm thấy thông tin nhà thuốc với id = ${id}`;
        }
        return doc
    }

    async createOverview(params) {
        const rand = new Random()
        const overview = {
            id : rand.uppercase(8),
            Title : params.Title,
            Content : params.Content,
            Img : params.Img,
            ctime : Date.now(),
            Id_InforPharmacy : params.Id_InforPharmacy
        }
        const doc = await this.OverviewMongo.createOverview(overview);
        return doc;
    }

    async updateOverview(id, params) {
        let overview = await this.getOverview(id);
        if (params.Title) {
            overview.Title = params.Title;
        }if (params.Content) {
            overview.Content = params.Content;
        }
        if (params.Img) {
            overview.Img = params.Img;
        }
        overview.utime = Date.now()
        const doc = await this.OverviewMongo.updateOverview(overview);
        return doc;
    }

    async deleteOverview(id){
        const doc = await this.OverviewMongo.deleteOverview(id)
        return doc
    }

    async deleteOverviewByPharmacy(id){
        const doc = await this.OverviewMongo.deleteOverviewByPharmacy(id)
        return doc
    }
}
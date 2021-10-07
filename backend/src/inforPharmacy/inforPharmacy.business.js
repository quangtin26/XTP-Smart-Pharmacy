import { Random } from "../../lib/random"
const rand = new Random()

export class InforPharServiceBase{
    constructor(InforPharMongo){
        this.InforPharMongo = InforPharMongo;
    }

    async getList(){
        const docs = await this.InforPharMongo.getList();
        return docs;
    }

    async getInforPhar(id){
        const doc = await this.InforPharMongo.getInforPhar(id);
        if(!doc){
            return `Không tìm thấy nhà thuốc với id = ${id}`;
        }
        return doc
    }

    async createInforPhar(params) {
        const infor = {
            id : rand.uppercase(8),
            NamePharOwner : params.NamePharOwner,
            NamePhar : params.NamePhar,
            Adress : params.Adress,
            Slogan : params.Slogan,
            Type : params.Type,
            NumberPhone : params.NumberPhone,
            Fanpage : params.Fanpage,
            Comment : params.Comment,
            Viewer : params.Viewer,
            Longitude : params.Longitude,
            Latitude : params.Latitude,
            PointTotal : params.PointTotal,
            CriteriaPoint1 : params.CriteriaPoint1,
            CriteriaPoint2 : params.CriteriaPoint2,
            CriteriaPoint3 : params.CriteriaPoint3,
            CriteriaPoint4 : params.CriteriaPoint4,
            CriteriaPoint5 : params.CriteriaPoint5,
            cTime : Date.now(),
            id_InforPharmacy : params.id_InforPharmacy
        }
        const doc = await this.InforPharMongo.createInforPhar(infor);
        return doc;
    }

    async updateInforPhar(id, params) {
    const infor = await this.InforPharMongor.getInforPhar(id);
        if (params.NamePharOwner) {
            infor.NamePharOwner = params.NamePharOwner;
        }
        if (params.NamePhar) {
            infor.NamePhar = params.NamePhar;
        }
        if (params.Adress) {
            infor.Adress = params.Adress;
        }
        if (params.Slogan) {
            infor.Slogan = params.Slogan;
        }
        if (params.Type) {
            infor.Type = params.Type;
        }
        if (params.NumberPhone) {
            infor.NumberPhone = params.NumberPhone;
        }
        if (params.Fanpage) {
            infor.Fanpage = params.Fanpage;
        }
        if (params.Comment) {
            infor.Comment = params.Comment;
        }
        if (params.Viewer) {
            infor.Viewer = params.Viewer;
        }
        if (params.Longitude) {
            infor.Longitude = params.Longitude;
        }
        if (params.Latitude) {
            infor.Latitude = params.Latitude;
        }
        if (params.PointTotal) {
            infor.PointTotal = params.PointTotal;
        }if (params.CriteriaPoint1) {
            infor.CriteriaPoint1 = params.CriteriaPoint1;
        }
        if (params.CriteriaPoint2) {
            infor.CriteriaPoint2 = params.CriteriaPoint2;
        }
        if (params.CriteriaPoint3) {
            infor.CriteriaPoint3 = params.CriteriaPoint3;
        }
        if (params.CriteriaPoint4) {
            infor.CriteriaPoint4 = params.CriteriaPoint4;
        }
        if (params.CriteriaPoint5) {
            infor.CriteriaPoint5 = params.CriteriaPoint5;
        }
        infor.uTime = Date.now()
        const doc = await this.InforPharMongo.updateInforPhar(infor);
        return doc;
    }

    async deleteInforPhar(id){
        const doc = await this.InforPharMongo.deleteInforPhar(id)
        return doc
    }
}
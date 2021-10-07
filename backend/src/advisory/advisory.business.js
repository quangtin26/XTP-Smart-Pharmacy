import { Random } from "../../lib/random"
const rand = new Random()

export class AdvisoryServiceBase{
    constructor(AdvisoryMongo){
        this.AdvisoryMongo = AdvisoryMongo;
    }

    async getList(){
        const docs = await this.AdvisoryMongo.getList();
        return docs;
    }

    async getAdvisory(id){
        const doc = await this.AdvisoryMongo.getAdvisory(id);
        if(!doc){
            return `Không tìm thấy phiếU với id = ${id}`;
        }
        return doc
    }

    async createAdvisory(params) {
        const advisory = {
            id : rand.uppercase(8),
            Name : params.Name,
            Address : params.Address,
            Age : params.Age,
            NumberPhone : params.NumberPhone,
            Email : params.Email,
            cTime : Date.now()
        }
        const doc = await this.AdvisoryMongo.createAdvisory(advisory);
        return doc;
    }

    async updateAdvisory(id, params) {
        const advisory = await this.AdvisoryMongo.getAdvisory(id);
        if (params.Name) {
            advisory.Name = params.Name;
        }
        if (params.Age) {
            advisory.Age = params.Age;
        }
        if (params.Address) {
            advisory.Address = params.Address;
        }
        if (params.Email) {
            advisory.Email = params.Email;
        }
        if (params.NumberPhone) {
            advisory.NumberPhone = params.NumberPhone;
        }
        advisory.uTime = Date.now()
        const doc = await this.AdvisoryMongo.updateAdvisory(advisory);
        return doc;
    }

    async deleteAdvisory(id){
        const doc = await this.AdvisoryMongo.deleteAdvisory(id)
        return doc
    }
}
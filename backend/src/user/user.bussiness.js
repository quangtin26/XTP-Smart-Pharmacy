import { Random } from "../../lib/random";
const rand = new Random()

export class UserServiceBase {
    constructor(UserMongo) {
        this.UserMongo = UserMongo;
    }

    async listUser() {
        const docs = await this.UserMongo.listUser();
        return docs;
    }

    async getUser(id) {
        const doc = await this.UserMongo.getUser(id);
        if (doc) {
            return doc;
        }
        return `User with id ${id} not found`;
    }

    async getUserByUsername(username) {
        const doc = await this.UserMongo.getUserByUsername(username);
        if (doc) {
            return doc;
        }
        return `User with id ${username} not found`;
    }

    async createUser(params) {
        const user = {
            id : rand.uppercase(8),
            full_name : params.full_name,
            username : params.username,
            password : params.password,
            cTime : Date.now(),
            status : params.status
        }
        const doc = await this.UserMongo.createUser(user);
        return doc;
    }

    async updateToPharmacy(id) {
        const param = {
            "id" : id,
            "status" : true
        }
        const doc = await this.UserMongo.updateToPharmacy(param)
        return doc
    }
}
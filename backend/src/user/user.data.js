import { MongoCommon, MongoErrorsCode } from "../../lib/mongodb";
const MongoDB = new MongoCommon();
export class UserMongoBase {
    constructor(db) {
        this.db = db;
        this.col_user = this.db.collection("User");
        this.col_user.createIndex("Username" , {unique : true});
    }

    async listUser() {
        const docs = await this.col_user.find().toArray();
        return MongoDB.Many(docs);
    }

    async getUser(id) {
        const doc = await this.col_user.findOne({_id : id});
        return MongoDB.One(doc);
    }

    async getUserByUsername(username) {
        const doc = await this.col_user.findOne({Username : username});
        return MongoDB.One(doc);
    }

    async createUser(user) {
        try {
            const doc = MongoDB.ToMongo(user);
            await this.col_user.insertOne(doc);
            return doc;
        }
        catch(err) {
            if (err.code === MongoErrorsCode.Dupicate) {
                return `Username ${user.username} exist`
            }
            else {
                return err;
            }
        } 
    }

    async updateToPharmacy(param) {
        await this.col_user.updateOne({_id : param.id} , {$set : param});
        const doc = await MongoData.One(param);
        return doc;
    }
}
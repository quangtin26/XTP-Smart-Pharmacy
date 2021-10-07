import { MongoCommon, MongoErrorsCode } from "../../lib/mongodb";
const MongoDB = new MongoCommon();
export class AuthMongoBase  {
    constructor(database) {
        this.database = database;
        this.col_session = this.database.collection("Session");
    }

    async createSession(data) {
        try {
            const session = MongoDB.ToMongo(data);
            await this.col_session.insertOne(session);
        }
        catch(err) {
            throw err
        }
    }

    async getSession(id) {
        const doc = await this.col_session.findOne({_id : id});
        return MongoDB.One(doc);
    }
}    
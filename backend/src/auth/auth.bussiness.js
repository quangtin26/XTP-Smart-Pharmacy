import { Random } from "../../lib/random";

const rand = new Random();
export class AuthServiceBase {
    constructor(AuthMongo) {
        this.AuthMongo = AuthMongo;
    }

    async Login(params, user) {
        if (typeof(user) == "object") {
            if (user.Password === params.password) {
                const data = {
                    id : rand.alphabet(12),
                    status : user.Status,
                    user_id : user.id
                }
                await this.AuthMongo.createSession(data);
                return data;
            }
            return `Wrong password`;
        }
        return `Username ${params.username} not found. Sign-up pls`
    }

    async getSession(id) {
        const doc = await this.AuthMongo.getSession(id);
        return doc;
    }
}
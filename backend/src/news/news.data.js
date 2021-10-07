import { MongoCommon } from "../../lib/mongodb";
const MongoData = new MongoCommon();
export class NewsMongoBase{
    constructor(db){
        this.db=db
        this.col_news = this.db.collection("News")
    }

    async getNewsList() {
        const docs = await this.col_news.find().toArray()
        return MongoData.Many(docs)
    }

    async getNews(id){
        const doc = await this.col_news.findOne({_id:id})
        return MongoData.One(doc)
    }

    async createNews(news) {
        const doc = await MongoData.ToMongo(news);
        await this.col_news.insertOne(doc);
        return news;
    }

    async updateNews(news) {
        await this.col_news.updateOne({_id : news.id} , {$set : news});
        const doc = await MongoData.One(news);
        return doc;
    }

    async deleteNews(id){
        const doc = await this.getnews(id)
        await this.col_news.deleteOne({_id:id})
        return doc
    }
}
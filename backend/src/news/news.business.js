import { uppercase } from "../../lib/random";

export class NewsServiceBase{
    constructor(NewsMongo){
        this.NewsMongo = NewsMongo;
    }

    async getNewsList(){
        const docs = await this.NewsMongo.getNewsList();
        return docs;
    }

    async getNews(id){
        const doc = await this.NewsMongo.getNews(id);
        if(!doc){
            return `Không tìm thấy bài báo với id = ${id}`;
        }
        return doc
    }

    async createNews(params) {
        let user = {
            id : uppercase(8),
            catagory : params.catagory,
            description : params.description,
            title : params.title,
            content : params.content,
            img : params.img,
            imgThumb : params.imgThumb,
            cTime : Date.now(),
            Id_InforPharmacy : params.Id_InforPharmacy
        }
        const doc = await this.NewsMongo.createNews(user);
        return doc;
    }

    async updateNews(id, params) {
        let news = await this.getNews(id);
        if (params.catagory) {
            news.catagory = params.catagory;
        }if (params.catagory) {
            news.catagory = params.catagory;
        }
        if (params.description) {
            news.description = params.description;
        }
        if (params.title) {
            news.title = params.title;
        }
        if (params.content) {
            news.content = params.content;
        }
        if (params.img) {
            news.img = params.img;
        }
        if (params.imgThumb) {
            news.imgThumb = params.imgThumb;
        }
        news.uTime = Date.now();
        const doc = await this.NewsMongo.updateNews(news);
        return doc;
    }

    async deleteNews(id){
        const doc = await this.NewsMongo.deleteNews(id)
        return doc
    }
}
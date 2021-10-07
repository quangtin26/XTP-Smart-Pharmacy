import { MongoClient } from "mongodb";
export class MongoCommon {
    constructor(url, obj, arr) {
        this.url = url;
        this.obj = obj;
        this.arr = arr;
    }
    
    async Connect(url) {
        const client = new MongoClient(url, {useUnifiedTopology : true , useNewUrlParser:true});
        await client.connect();
        return client;
    }
    
    //check phần tử từ db
    One(obj) {
        if (!obj) {
            return null;
        }
        const key_value = Object.entries(obj);
        const newObj = key_value.map(k => {
            if (k[0] == "_id") {
                k[0] = "id"
            }    
            return k;
        })
        return Object.fromEntries(newObj);
    }

    //check list từ db
    Many(arr) {
        if (!arr) {
            return [];
        }
        const newArr = arr.map(el => this.One(el));
        return newArr;
    }

    //check r ném lại vào db
    ToMongo(obj) {
        if (!obj) {
            return null;
        }
        const key_value = Object.entries(obj);
        const newObj = key_value.map(k => {
            if (k[0] == "id") {
                k[0] = "_id"
            }    
            return k;
        })
        return Object.fromEntries(newObj);
    }
}

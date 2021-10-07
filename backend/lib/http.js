import { Const } from "./const";
const enumData = new Const();

//loại lỗi
export const HttpStatusCodes = {
    BadRequest : 400,
    Unauthorized : 401,
    NotFound : 404,
    MethodNotAllowed : 405
}

//xuất thông báo
export class HttpError extends Error {
    constructor(mess , __httpStatusCode) {
        super(mess);
    }
    HttpStatusCode() {
        return this.__httpStatusCode;
    }
}

//length dữ liệu
export const HttpParamsValidators = {
    MustBeString(obj, key, min = 1, max = 512) {
        const k = obj[key];
        if (typeof k !== "string") {
            console.log(`${key} must be string`);
        }
        if (k.length < min) {
            console.log(`${key} must be at least ${min} characters`);
        }
        
        if (k.length > max) {
            console.log(`${key} must be shorter than ${max} characters`);
        }
        return k;
    },   

    //kiểm tra định dạng dữ liệu
    MustBeOneOf(obj , key , method) {
        const k = obj[key];
        const func = enumData[method];
        const values = Object.values(func());
        if (!values) {
            return [];
        }
        for (const v of values) {
            if (v === k) {
                return v;
            }
        }
        console.log(`${key} must be one of ${values.join(",")}`);
    }
} 
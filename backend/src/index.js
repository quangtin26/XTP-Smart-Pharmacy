import express from "express";
import cors from "cors";
import "../ext/log.js";
import { ReadConfig } from "./config";
import { MongoCommon } from "../lib/mongodb";

import session from 'express-session';
import MongoStore from 'connect-mongo';

import { InforPharMongoBase } from "./inforPharmacy/inforPharmacy.data";
import { InforPharServiceBase } from "./inforPharmacy/inforPharmacy.business";
import { NewInforPharAPI } from "./inforPharmacy/inforPharmacy.api";

import { UserMongoBase } from "./user/user.data";
import { UserServiceBase } from "./user/user.bussiness";
import { NewUserAPI } from "./user/user.api";

import { NewAuthAdminMiddleware } from "./auth/auth.api.middleware"
import { NewAuthAPI } from "./auth/auth.api";
import { AuthServiceBase} from "./auth/auth.bussiness";
import { AuthMongoBase } from "./auth/auth.data";

import { OfferMongoBase } from "./offers/offers.data.js";
import { OfferServiceBase } from "./offers/offers.business.js";
import { NewOfferAPI } from "./offers/offers.api.js";

import { PharOwnerMongoBase } from "./pharmacyOwner/pharmacyOwner.data.js";
import { PharOwnerServiceBase } from "./pharmacyOwner/pharmacyOwner.business.js";
import { NewPharOwnerAPI } from "./pharmacyOwner/pharmacyOwner.api.js";

import { OverviewMongoBase } from "./overview/overview.data";
import { OverviewServiceBase } from "./overview/overview.business";
import { NewOverviewAPI } from "./overview/overview.api";

import { RateMongoBase } from "./rate/rate.data";
import { RateServiceBase } from "./rate/rate.business";
import { NewRateAPI } from "./rate/rate.api";

import { AdvisoryMongoBase } from "./advisory/advisory.data";
import { AdvisoryServiceBase } from "./advisory/advisory.business";
import { NewAdvisoryAPI } from "./advisory/advisory.api";

import { NewsMongoBase } from "./news/news.data";
import { NewsServiceBase } from "./news/news.business";
import { NewNewsAPI } from "./news/news.api";

async function main() { 
    const config = await ReadConfig();
    const MongoData = new MongoCommon();
    const client = await MongoData.Connect(config.database.db_url , {replica : true});
    console.log(`Connected to database`);
    const database = await client.db(config.database.db_name);
    
    //*********************************************************************//
    const InforPharMongo = new InforPharMongoBase(database);
    const InforPharService = new InforPharServiceBase(InforPharMongo);
    const OverviewMongo = new OverviewMongoBase(database);
    const OverviewService = new OverviewServiceBase(OverviewMongo);
    const UserMongo = new UserMongoBase(database);
    const UserService = new UserServiceBase(UserMongo);
    const OfferMongo = new OfferMongoBase(database);
    const OfferService = new OfferServiceBase(OfferMongo);
    const PharOwnerMongo = new PharOwnerMongoBase(database);
    const PharOwnerService = new PharOwnerServiceBase(PharOwnerMongo);
    const NewsMongo = new NewsMongoBase(database);
    const NewsService = new NewsServiceBase(NewsMongo);
    const RateMongo = new RateMongoBase(database);
    const RateService = new RateServiceBase(RateMongo);
    const AdvisoryMongo = new AdvisoryMongoBase(database);
    const AdvisoryService = new AdvisoryServiceBase(AdvisoryMongo);
    //*********************************************************************//
    const AuthMongo = new AuthMongoBase(database);
    const AuthService = new AuthServiceBase(AuthMongo);
    //*********************************************************************//
    const app = express();
    app.disable("x-powered-by");
    app.use(express.json());
    app.use(cors());
    //*********************************************************************//
    app.use(session({
        secret: config.session.key,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ 
            mongoUrl : `${config.database.db_url}`,
            dbName : `${config.database.db_name}`,
            collectionName : `Session`,
            ttl: 10 * 24 * 60 * 60
         })
    }));
    //*********************************************************************//
    app.use("/api/infor-phar" , NewInforPharAPI(InforPharService, PharOwnerService, OfferService,RateService, OverviewService, AuthService));
    app.use("/api", NewUserAPI(UserService, AuthService));
    app.use("/api/infor-phar", NewAuthAdminMiddleware(AuthService), NewPharOwnerAPI(PharOwnerService));
    app.use("/api/infor-phar", NewAuthAdminMiddleware(AuthService), NewOfferAPI(OfferService));
    app.use("/api/infor-phar", NewRateAPI(RateService, AuthService));
    app.use("/api/infor-phar", NewOverviewAPI(OverviewService, AuthService));
    app.use("/api/news", NewAuthAdminMiddleware(AuthService), NewNewsAPI(NewsService, AuthService));
    app.use("/api/auth", NewAuthAPI(AuthService,UserService));
    app.use("/api", NewAdvisoryAPI(AdvisoryService, AuthService));
    //********************************************************************//
    console.log(`Listen on ${config.server.port}`);
    app.listen(config.server.port, "0.0.0.0" , () => {
        const err = arguments[0];
        if (err) {
            console.log(err);
        }
    })
}
main().catch(err => console.log(err));



import { Router } from "express";
import { CrawlerController } from "../controller/crawler.controller";

export class CrawlerRouter {

    constructor( router : Router){
        router.post("/crawler/search/document", CrawlerController.searchByDocumentInCrawler );
        router.post("/crawler/document", CrawlerController.searchByDocumentInCrawler );
    }

}
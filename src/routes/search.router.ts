

import { Router } from "express";
import { SearchController } from "../controller/search.controller";

export class SearchRouter {

    constructor( router : Router){
        router.get("/api/search/document/number/:docnumber", SearchController.searchByDocument );
        router.get("/api/search/document/wildcard/:docnumber", SearchController.searchByDocumentWildcard );
    }
}
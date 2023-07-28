

import { Router, Request, Response } from "express";
import { SearchService } from "../service/search.service";

export class SearchRouter {

    private static async searchByDocument(req: Request, res: Response){

        let docnumber = req.body ? req.body.docnumber ? req.body.docnumber : null : null;

        try{

            if( docnumber ){
                await SearchService.searchByCpf( docnumber );
                res.json({ "success" : true });
            }
            else{
                throw "Missing required parameter: docnumber";
            }

        }
        catch(e : any){

            console.log("catch");
            console.log("e", e );

            res.status(500);
            res.send({
                message: e.message ? e.message : e,
                error: {}
            });
        }
        
    }

    constructor( router : Router){
        router.post("/search/document", SearchRouter.searchByDocument );
    }
}
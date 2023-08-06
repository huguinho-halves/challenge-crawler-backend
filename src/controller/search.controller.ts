

import { Request, Response } from "express";
import { ElasticService } from "../service/elastic.service";

export class SearchController {

    

    public static async searchByDocument(req: Request, res: Response){

        let docnumber = req.body ? req.params.docnumber ? req.params.docnumber : null : null;

        try{

            if( docnumber ){

                const response = await ElasticService.searchByParameter(docnumber);
                res.json({ "success" : true, "data" : response });
            }
            else{
                throw "Missing required parameter: docnumber";
            }

        }
        catch(e : any){

            console.log("e", e );

            res.status(500);
            res.send({
                message: e.message ? e.message : e,
                error: {}
            });
        }
    }

}
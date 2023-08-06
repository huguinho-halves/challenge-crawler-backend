

import { Request, Response } from "express";
import { SearchService } from "../service/search.service";
import { ElasticService } from "../service/elastic.service";

export class CrawlerController {

    public static async searchByDocumentInCrawler(req: Request, res: Response){

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

            console.log("e", e );

            res.status(500);
            res.send({
                message: e.message ? e.message : e,
                error: {}
            });
        }
        
    }

    public static async saveDocumentOnElastic(req: Request, res: Response){

        let body = req.body;

        console.log("Request recebida para salvar dados no elastic search");
        console.log("payload", body );

        try{

            if( body ){
                await ElasticService.saveRecord("benefits", body);

                console.log("Dados armazenados com sucesso");
                res.json({ "success" : true });
            }
            else{
                throw "Missing required parameter: body";
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
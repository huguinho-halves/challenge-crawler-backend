import { Router, Request, Response } from "express";


export class HealthRouter {

    private static isReady(req: Request, res: Response){

        res.json({ "success" : true });
    }

    constructor( router : Router){
        router.get("/ready", HealthRouter.isReady );
    }
}



import express from "express";
import { RouterApplication } from "./routes/router-application";
import { Router, Request, Response } from 'express';

export const App = () =>{

    const app = express();

    // const route = Router()
    const router = new RouterApplication().router;
    app.use(router);

    app.use(express.json())

    /*
    route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript' })
    })

    app.use(route)
    */

    app.listen(process.env.PORT, () => {
        console.log("server listen on ", process.env.PORT)
    });


}
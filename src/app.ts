

import express from "express";
import expressListRoutes  from "express-list-routes";
import bodyParser from "body-parser";
import { RouterApplication } from "./routes/router-application";

export const App = () =>{

    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    const router = new RouterApplication().router;
    app.use(router);

    app.use(express.json());

    app.listen(process.env.PORT, () => {

        expressListRoutes(app);
        console.log("server listen on ", process.env.PORT);
        
    });


}
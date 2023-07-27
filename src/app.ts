

import express from "express";
import { RouterApplication } from "./routes/router-application";

export const App = () =>{

    const app = express();

    const router = new RouterApplication().router;
    app.use(router);

    app.use(express.json());

    app.listen(process.env.PORT, () => {
        console.log("server listen on ", process.env.PORT)
    });


}
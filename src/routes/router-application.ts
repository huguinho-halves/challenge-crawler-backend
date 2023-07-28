

import { Router } from 'express';
import { HealthRouter } from './health.router';
import { SearchRouter } from './search.router';

export class RouterApplication {

    router!: Router;

    constructor(){
        this.router = Router();

        new HealthRouter(this.router);
        new SearchRouter(this.router);
    }
}
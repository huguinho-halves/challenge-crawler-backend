

import { Router } from 'express';
import { HealthRouter } from './health.router';
import { SearchRouter } from './search.router';
import { CrawlerRouter } from './crawler.router';

export class RouterApplication {

    router!: Router;

    constructor(){
        this.router = Router();

        new HealthRouter(this.router);
        new SearchRouter(this.router);
        new CrawlerRouter(this.router);
    }
}
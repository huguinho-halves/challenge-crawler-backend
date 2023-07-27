

import { Router } from 'express';
import { HealthRouter } from './health.router';

export class RouterApplication {

    router!: Router;

    constructor(){
        this.router = Router();

        new HealthRouter(this.router);
    }
}
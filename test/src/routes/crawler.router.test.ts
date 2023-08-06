

import {describe, expect, test} from '@jest/globals';
import { CrawlerRouter } from '../../../src/routes/crawler.router';
import { Router } from 'express';

describe("Test suit for crawler router", () => {
  
  test("Should be create crawler router", async () => {
    
    const router = Router();
    const searchRouter = new CrawlerRouter( router );

    expect( searchRouter ).not.toBeNull();
  });


});
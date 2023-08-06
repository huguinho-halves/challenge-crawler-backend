

import {describe, expect, test} from '@jest/globals';
import { SearchRouter } from '../../../src/routes/search.router';
import { Router } from 'express';

describe("Test suit for search router", () => {
  
  test("Should be create search router", async () => {
    
    const router = Router();
    const searchRouter = new SearchRouter( router );

    expect( searchRouter ).not.toBeNull();
  });


});
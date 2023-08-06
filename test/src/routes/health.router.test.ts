

import {describe, expect, test} from '@jest/globals';
import { HealthRouter } from '../../../src/routes/health.router';
import { Router } from 'express';

describe("Test suit for health router", () => {
  
  test("Should be create health router", async () => {
    
    const router = Router();
    const searchRouter = new HealthRouter( router );

    expect( searchRouter ).not.toBeNull();
  });


});


import {describe, expect, test} from '@jest/globals';
import { RouterApplication } from '../../../src/routes/router-application';
import { Router } from 'express';

describe("Test suit for router application", () => {
  
  test("Should be create router application", async () => {
    
    const searchRouter = new RouterApplication();

    expect( searchRouter ).not.toBeNull();
  });


});
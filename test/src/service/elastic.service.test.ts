

import {describe, expect, test} from '@jest/globals';
import { ElasticService } from '../../../src/service/elastic.service';

describe("Test suit for search service", () => {
  
  test("Should save record in elastic search", async () => {
    
    const indexName = "benefits";
    const body = {
        "docnumber" : "033.355.888-00"
    }
    
    const response = await ElasticService.saveRecord(indexName, body);

    expect( response ).not.toBeNull();
  });

  test("Should be return resultset after search by docnumber", async () => {
    
    const docnumber = "033.355.888-00";
    
    const response = await ElasticService.searchByParameter("docnumber", docnumber);
    expect( response ).not.toBeNull();
  });

  test("Should be return resultset after search by wildcard", async () => {
    
    const docnumber = "033.355.888-00";
    
    const response = await ElasticService.searchByWildcard("docnumber", docnumber);
    expect( response ).not.toBeNull();
  });


});
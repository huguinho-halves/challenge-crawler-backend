

import {describe, expect, test} from '@jest/globals';
import { SearchService } from '../../../src/service/search.service';

describe("Test suit for search service", () => {
  
  test("This test will produce a message in queue and should not throw a error", async () => {

    const docnumber = "03335588800";
    const response = await SearchService.searchByCpf(docnumber);

    expect( response ).toBeUndefined();
  });

  test("Allow the same docnumber many times in message queue", async () => {

    const docnumber = "03335588800";

    await SearchService.searchByCpf(docnumber);
    const response = await SearchService.searchByCpf(docnumber);

    expect( response ).toBeUndefined();
  });

});
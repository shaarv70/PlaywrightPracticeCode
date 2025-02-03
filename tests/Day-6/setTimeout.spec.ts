import { test } from '@playwright/test'


/*   settimeout is basically used for hooks like beforeEach, afterEach, beforeAll, afterAll and also at the test level since slow annotataion
can be used at the test level only but not at the hooks level

*/

test("example-1", async ({ page }) => {

    console.log("This is  an example1 of  annotation");

})


test("example-2", async ({ page }) => {

    test.setTimeout(60000);     //this will set the timeout of this test for 60seconds. this is applied at test level. 
    console.log("This is  an example2 of  annotation");

})


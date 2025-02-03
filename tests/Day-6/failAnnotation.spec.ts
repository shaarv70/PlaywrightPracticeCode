import { test } from '@playwright/test'


/* test.fail() will unconditionally marks a test as "should fail" 
cannot be used at signature level, remaining we can use it in the same was as skip.

*/ 


test("example-1", async ({ page }) => {
    test.fail();
    console.log("This is  an example1 of  annotation");

})


test("example-2", async ({ page }) => {

    test.setTimeout(60000);     //this will set the timeout of this test for 60seconds. this is applied at test level. 
    console.log("This is  an example2 of  annotation");

})
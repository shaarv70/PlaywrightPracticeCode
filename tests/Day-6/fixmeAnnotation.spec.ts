import { test } from '@playwright/test'


/*fixme annotation declares a test to be fixed, similarly to test(). This test will not be run.
So basically this anotation is used to identify the test which needs to be fixed out of multiple test cases and it will skip this particular testcase
and letts supooseif we come to this script atfter so many days and run all the test then with this annotatiion we will identify that this 
test has to be fixed

Note: fixme can also be used in the same way as skip annotation
*/

test.fixme("fixme annotation example", async ({ page }) => {

    console.log("This is  an example of fixme annotation");

})



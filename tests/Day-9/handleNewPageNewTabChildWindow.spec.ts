import { test, expect } from '@playwright/test';


/*
    Isolated BrowserContext instance, created for each test. Since contexts are isolated between each other, every test gets a fresh environment, even when multiple tests run in a single Browser.
    Context won't share cookies/cache with other browser contexts.
    The page event on browser contexts can be used to get new pages that are created in the context.
    This can be used to handle new pages opened by target="_blank" links.
*/


test('Handle new Page', async ({ context }) => {

    const page = await context.newPage();
    await page.goto('https://testpages.eviltester.com/styled/windows-test.html');


    //affter clicking on the link, new page is opened which means we are in the same context(environment) but a new page is opened in that environment

    const promise = context.waitForEvent("page"); //so this is the line which will be wait for the new page, window, tab event to open and
    //  has to write before  the line of code which will open it.   

    await page.getByRole("link", { name: "Basic Ajax in new page" }).click();

    const newPage = await promise;
    await expect(newPage).toHaveTitle('Test Page For Basic Ajax Example');

    //performing action in original window
    await page.getByRole("link", { name: "Index" }).click();
    await expect(page).toHaveTitle('Web Testing and Automation Practice Application Pages');


})
import { test } from '@playwright/test';


//Note: in html 4 the tag used was frames  but in html5 the tags used is iframes but both can be handled in same way below

test('Handle Iframe with name attribute', async ({ page }) => {

    await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_attributes_submit');
    const frame2 = page.frame('iframeResult');
    await frame2?.locator('#fname').fill('testing');


})

test('Handle Iframe with URL', async ({ page }) => {    //here src atttribute value right click on mouse and copy link address

    await page.goto('https://www.w3schools.com/html/html_iframe.asp');
    const frame2 = page.frame({url:'https://www.w3schools.com/html/default.asp'});
    await frame2?.getByLabel('Button to open search field').click();
    await frame2?.getByPlaceholder("Search...").fill("Javascript");



})


test('Handle Iframe with frameLocator Method', async ({ page }) => {  

    await page.goto('https://www.w3schools.com/html/html_iframe.asp');
    const frame2 = page.frameLocator('[title="W3Schools HTML Tutorial"]');// in this method we can give xpath,css ,id etc any locator
    await frame2?.getByLabel('Button to open search field').click();
    await frame2?.getByPlaceholder("Search...").fill("Javascript");



})


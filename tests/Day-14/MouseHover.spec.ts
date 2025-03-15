import {test} from '@playwright/test';


test('practicing mouse hover',async({page})=>{

await page.goto("https://practice.expandtesting.com/hovers  ");
await page.getByAltText("User Avatar").first().hover();
//await page.getByAltText("User Avatar").first().hover({force:true}); -- in oder to bypass the actionability check for that webelement we can use this
await page.getByText("View profile").first().click();





})
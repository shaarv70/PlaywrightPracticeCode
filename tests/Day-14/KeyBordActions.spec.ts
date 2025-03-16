import {test,expect} from '@playwright/test'


test("keyboard actions",async({page})=>{

await page.goto("https://testpages.eviltester.com/styled/basic-html-form-test.html");
const element=await page.locator("[name='comments']");
await element.press("Control+a");
await element.press("Backspace");
await element.press("a+A+B+C");
await element.press("Control+a+x");
const username=await page.locator("[name='username']");
await username.press("Control+v");
await username.press("ArrowLeft+ArrowLeft+ArrowLeft+c");// this will perform keyboard action on particular element
await page.keyboard.press("PageDown");// this will perform only the keyboard action 
await page.keyboard.press("PageUp");



})

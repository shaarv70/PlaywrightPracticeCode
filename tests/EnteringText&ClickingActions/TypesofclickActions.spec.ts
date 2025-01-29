import { test } from '@playwright/test'



//click() :performs a simple click operation
//dblClick(): performs a double click

test('dblclick method', async ({ page }) => {

    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('button', { name: 'Copy Text' }).dblclick();
})

//Right/Context click: performs right click
//syntax :  click({button:'right})
/*
if any element is hidden behind some element or if any element is not getting clicked by normal click method 
and we want to click over it then we can do through this method
click({force:true})
*/


test('Right click', async ({ page }) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    await page.getByText('right click me', { exact: true }).click({ button: 'right' });

})



/*programmatic click: if any element is hidden behind some element or if any element is not getting clicked by normal click method 
and we want to click over it then we can do through this method
*/

test('programmatic click', async ({ page }) => {


    await page.goto('https://medium.com/');

    await page.waitForTimeout(3000);
   // await page.getByText('Get started').dispatchEvent('click');
})
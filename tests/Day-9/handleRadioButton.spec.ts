import {expect, test} from '@playwright/test'


//check() - to check the radio button
//toBeChecked() : to check whther the radio button is checked or not

test('Handling Radio button',async({page})=>{

    await page.goto('https://artoftesting.com/samplesiteforselenium');
    await page.locator('#male').isChecked().then(async(value)=>{

        if(!value){

            await  page.locator('#male').check();
        }
     
        expect(page.locator('#male')).toBeChecked();
    
    })

   
})

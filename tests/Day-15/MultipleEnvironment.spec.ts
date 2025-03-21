import {test} from '@playwright/test';


test('Handle multiple Environment',async({page})=>{

    console.log(process.env.URL);
    console.log(process.env.PASSWORD);
    
    
   await page.goto(process.env.URL as string);    // type assertion
   await page.locator('[data-test="username"]').fill(<string>process.env.USERNAME); //another way of type assertion
   await page.locator('[data-test="password"]').fill(<string>process.env.PASSWORD); 
  await page.getByRole('button', { name: 'LOGIN' }).click();

})
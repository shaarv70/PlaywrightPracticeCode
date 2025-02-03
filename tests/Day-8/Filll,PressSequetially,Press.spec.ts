import {test} from '@playwright/test'

/*Fill: it is used to fill out the form fields. It works for <input, <textarea and when "contenteditable" atttribute is present and its 
value must be "true"
*/

test("fill method with input and text area example",async({page})=>{

await page.goto('https://ultimateqa.com/filling-out-forms/');
await page.locator('#et_pb_contact_name_0').fill("Test usr");
await page.locator('#et_pb_contact_message_0').fill("for testing purpose");
await page.locator('#et_pb_contact_form_0').getByRole('button', { name: 'Submit' }).click();    
})

test('contentEditable example',async({page})=>{


    await page.goto('https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml5_global_contenteditable');
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByText('This is a paragraph. It is').fill("this is a testing");
})


/*pressSequentially: it types into the field character by character, as if user is typing with real keyboard */ 

test('Press Sequentially example',async({page})=>{


    await page.goto('https://www.google.com/');
    await page.locator('#APjFqb').pressSequentially('Playwright',{delay:1000});  //if we dont use delay it will fill the value very fast like fill method
})



/* press: this method is used to perform keystrokes one by one*/


test('loctor.press example',async({page})=>{

    await page.goto('https://www.google.com/');
    await page.locator('#APjFqb').pressSequentially('Playwright',{delay:1000});
    await page.locator('#APjFqb').press('ArrowDown+ArrowDown+ArrowDown');
   // await page.locator('#APjFqb').press('Enter');
   await page.locator('#APjFqb').press('Backspace');
    
})

import { test } from '@playwright/test'

/*
	We can Select one or multiple options in the <select> element with locator.selectOption().
	You can specify option, value, label or index to select.

    locator.selectOption(<value / label / visible text>)
	locator.selectOption({value:’value attribute’s value’})
	locator.selectOption({label:’label attribute’s value’})  if label attribute is not there then visible text can be provided but
     if label attribute is there then visible text will not work here.
	locator.selectOption({index:’index value’})
*/
test('handle dropdown by visible text and value', async ({ page }) => {

    await page.goto('https://artoftesting.com/samplesiteforselenium');
    //await page.locator('#testingDropdown').selectOption('Performance Testing');//by visible text
   // await page.locator('#testingDropdown').selectOption('Database');//by 'value' attribute value
  //  await page.locator('#testingDropdown').selectOption({index:2});//this will select Manual from dropdown
    await page.locator('#testingDropdown').selectOption({value:'Database'});

    //If we do not have any label attribute then in below case we can use visible text for label attribute value but if we have
    //label attribute and its value then visible text will not work in that case
    await page.locator('#testingDropdown').selectOption({label:"Performance Testing"});
   
})

test('Hnadle dropdown with Label',async({page})=>{

    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label');
    //here we have used "label" attribute value, since visible text wont work here 
    //await page.locator('iframe[name="iframeResult"]').contentFrame().getByLabel('Choose a car:').selectOption('Mercedes'); 
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByLabel('Choose a car:').selectOption({label:"Audi"});



})
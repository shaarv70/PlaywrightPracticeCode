import { test } from '@playwright/test';


test("different getBy methods", async ({ page }) => {


  await page.goto("https://demo.nopcommerce.com/login?returnUrl=%2F");

  //getByLabel: use in that case when we have "label" as html tag and it is basically used in form fields.

  //  await page.getByLabel("Emai").fill("arvindsharma50480@gmail.com");//here we have to insert the text associated with this node having label tag and 
  // here we can give the partial text also , if we want complete text to be vallidated  then we have to use options with it    

  await page.getByLabel("Email:", { exact: true }).fill("arvindsharma50480@gmail.com");

  //getByPlaceHolder: it is used in that case when we dont have label tag and we have placeHolder texts.

  await page.getByPlaceholder("Search store").fill("mobile");//here also we can give partial text


  //getByText:It is used to find non interactive elements like div, span, p etc. (partial text allowed)

  console.log(await page.getByText("New Customer").textContent());


  //getByRole: It is mostly recommended method to locate the elements which include buttons, checboxes, headings, links, lists, tables, etc. 

  await page.getByRole("link", { name: "Electronics " }).click();


  //getByTitle: it is used in case of title attribute

  await page.getByTitle("Show products in category Electronics").first().click(); // here we are using first method since we have three elements which are having title attribute



  //getByAltText:It is used in that case when thr element supports alt text such as img and area element (partial text allowed)

  await page.getByAltText("nopCommerce demo store").click();

})


test("getByTestId",async({page})=>{

   //getByTestId:this can be used when getbyrole or text is not present and we have configured in config.ys like what testid must be used 


    await page.goto("https://www.saucedemo.com/");
    await page.getByTestId("username").fill("standard_user");

  
})
import { expect, test } from "@playwright/test";

test("Visual testing verification", async ({ page }) => {

    //If ss not present so in first execution it will get failed and write the SS
  await page.goto("https://the-internet.herokuapp.com/tables");
  await expect(page).toHaveScreenshot(); 
  //giving the folder name in these ways  
  await expect(page).toHaveScreenshot(["VisualTesting/Childfolder2","VisualTestingChildFolder1.png"]);
  await expect(page).toHaveScreenshot(["ChildFolder3","subfolder","ImagewithinsubFolder.png"]);
  //to take screenshot for fullpage
  await expect(page).toHaveScreenshot("FullPage.png",{fullPage:true});
  //mentioning maximun diffrence in pixels acceptable
  await expect(page).toHaveScreenshot("MAxdiffpixels.png",{maxDiffPixels:500});
  //mentioning maximun diffrence in pixels ratio acceptable
  await expect(page).toHaveScreenshot("MAxdiffpixels.png",{maxDiffPixelRatio:0.60});
  //masking or hiding a particular area to compare within the ss, mentioned locator will hide that area 
  await expect(page).toHaveScreenshot("SingleMasking.png",{mask:[page.locator("//table[@id='table1']//tr/td[4]")]});
  //masking or hiding a multiple area to compare within the ss, mentioned locators will hide those areas
  await expect(page).toHaveScreenshot("SingleMasking.png",{mask:[page.locator("//table[@id='table1']//tr/td[4]"),page.locator("[id='table2']")]});
  //comparing a particular element with the ss instead of page and also applying mask
  await expect(page.locator("#table1")).toHaveScreenshot("ImagewithinsubFolder.png",{mask:[page.locator("//table[@id='table1']//tr/td[4]"),page.locator("[id='table2']")]});
});


test("Visual Testing- hiding iframe Verification",async({page})=>{


    await page.goto("https://demoqa.com/forms");
    //this line will hide all the elements present in iframe in ss and the logic is present in CSS file 
    await expect(page).toHaveScreenshot("iframe handling.png",{stylePath:"tests\Day-15\screenshot.css"});

})

test("to compare arbitarary text or binary data",async({page})=>{

        await page.goto("https://playwright.dev/");
        await expect(page.locator(".hero hero--primary heroBanner_UJJx").textContent()).toMatchSnapshot("Heading.txt");
})


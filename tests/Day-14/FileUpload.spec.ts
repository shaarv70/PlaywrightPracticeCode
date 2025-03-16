import { test, expect } from '@playwright/test';


test('upload multiple file', async ({ page }) => {
    
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.locator("#filesToUpload").setInputFiles(["./tests/Day-14/file.txt","./tests/Day-14/file1.txt","./tests/Day-14/file2.txt"]);
})


test('upload single files', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("[id='file-upload']").setInputFiles("./tests/Day-14/file.txt");
    await page.locator("[id='file-submit']").click();
    await expect(page.locator("[id='uploaded-files']")).toHaveText("file.txt");

})

test('upload file in a div page where element is not having input tag',async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload");

    const promptPromise= page.waitForEvent('filechooser');
    await page.locator("[id='drag-drop-upload']").click();
    const filechooserPromise=await promptPromise;
    await filechooserPromise.setFiles("./tests/Day-14/file.txt");
    await expect(page.locator("(//div[@class='dz-filename'])[1]/span")).toHaveText("file.txt");


})
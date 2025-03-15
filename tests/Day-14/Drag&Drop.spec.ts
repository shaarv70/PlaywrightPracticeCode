import {test,expect} from '@playwright/test'



//1) Manual approach:

test('Manual approach for drag and drop',async({page})=>{

await page.goto("https://demoqa.com/droppable");
await page.getByText("Drag me").first().hover();
await page.mouse.down();//by default it will keep left click on the mouse
await page.getByText("Drop here").first().hover();
await page.mouse.up();
await expect(page.locator("//*[@id='droppable'][1]/p").first()).toHaveText("Dropped!");

})


//2) Second approach:
test('Second approach for drag and drop',async({page})=>{

    await page.goto("https://demoqa.com/droppable");
    await page.getByText("Drag me").first().dragTo(page.getByText("Drop here").first())
    await expect(page.locator("//*[@id='droppable'][1]/p").first()).toHaveText("Dropped!");
    
})


//2) Third approach:using x&y
test('Third approach for drag and drop',async({page})=>{

    await page.goto("https://demoqa.com/droppable");
    await page.getByText("Drag me").first().dragTo(page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable'),{sourcePosition:{x:0,y:0 },targetPosition:{x:75,y:75}});
    await expect(page.locator("//*[@id='droppable'][1]/p").first()).toHaveText("Dropped!");
    
})

    
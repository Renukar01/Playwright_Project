import{test,expect} from '@playwright/test';

test('Drag and Drop',async({page})=>
{
    await page.goto("https://testautomationcentral.com/demo/drag_and_drop.html")

    const source=page.locator('#draggable')
    const Dest=page.locator("#droppable")
    await source.dragTo(Dest)
   

    await expect(page.locator('#drop-message')).toHaveText("Dropped successfully!")
     await page.waitForTimeout(2000)
})
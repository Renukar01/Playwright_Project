import {test,expect} from '@playwright/test'

test('Amazone',async({page})=>
{
    await page.goto('https://www.amazon.in/')
    const search= page.locator('#twotabsearchtextbox')
    await search.click()
    await search.fill('Mobile Phone')
    for(let i=0;i<=4;i++)
    {
        await page.keyboard.press('Shift+ArrowLeft')
    }
    await page.keyboard.press('Delete')
    await page.waitForTimeout(1000)
    await page.keyboard.press('Enter')
})
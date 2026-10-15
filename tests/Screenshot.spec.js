import {test,expect} from '@playwright/test'

test("Screenshot",async({page})=>
{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")
    const element=page.locator("#Register")
    await page.waitForTimeout(3000)
    await element.screenshot({path:".//Screenshot//screen.png"})
    await page.screenshot({path:".//Screenshot//scrn.png",fullPage:true})
}
)
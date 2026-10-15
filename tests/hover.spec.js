import{test,expect} from '@playwright/test'

test("Hover",async({page})=>
{
    await page.goto("https://www.ebay.com/")

    const element=page.locator('//*[@id="vl-flyout-nav"]/ul/li[4]/a/span')
    await element.hover()
    await page.waitForTimeout(3000)
}
)
import {test,expect} from '@playwright/test'

test ('Mouse Action', async({page})=>
{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    
    
    const right=page.locator('//*[@id="authentication"]/span')
    await right.click({button:'right'})
    const ri=page.locator('//*[@id="authentication"]/ul/li[1]')
    await ri.click()
    await page.waitForTimeout(3000)
    const double=page.locator('//*[@id="authentication"]/button')
    await double.dblclick();
    await page.waitForTimeout(3000)
}

)
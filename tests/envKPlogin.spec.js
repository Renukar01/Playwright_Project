import {test, expect} from '@playwright/test'

test('Login Validation', async({page})=>
{
    await page.goto(process.env.url)
    // Locator ID

    await page.locator('#ulogin').fill(process.env.uname)
    await page.locator('#upass').fill(process.env.upass)
    await page.locator('#sub_logbtn').click()
    await page.waitForTimeout(2000)
})
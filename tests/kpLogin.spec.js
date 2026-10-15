import {test, expect} from '@playwright/test'

test('Login Validation', async({page})=>
{
    await page.goto('https://keralaproperty.in/member/login/')
    // Locator ID

    await page.locator('#ulogin').fill('renukar4774@getMaxListeners.com')
    await page.locator('#upass').fill('Renuka@20')
    await page.locator('#sub_logbtn').click()
    await page.waitForTimeout(4000)
})
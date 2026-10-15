import {test, expect} from '@playwright/test'
import data from '../util/data.json'
test('Login Validation', async({page})=>
{
    await page.goto('https://keralaproperty.in/member/login/')
    // Locator ID

    await page.locator('#ulogin').fill(data.username)
    await page.locator('#upass').fill(data.password)
    await page.locator('#sub_logbtn').click()
    await page.waitForTimeout(4000)
})
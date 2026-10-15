import {test, expect} from '@playwright/test'
import data from '../util/testdata.json'

for(let dataa of data)
{

test(`Login Validation ${dataa.username}`, async({page})=>
{
    await page.goto('https://keralaproperty.in/member/login/')
    // Locator ID

    await page.locator('#ulogin').fill(dataa.username)
    await page.locator('#upass').fill(dataa.password)
    await page.locator('#sub_logbtn').click()
    await page.waitForTimeout(4000)
})
}
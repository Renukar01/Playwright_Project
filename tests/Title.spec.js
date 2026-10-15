import {test,expect} from '@playwright/test'

test ("Title Verification",async({page})=>
{
    await page.goto('https://www.google.com/')
    const title=await page.title()
    console.log(title)
})
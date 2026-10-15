import {test} from '@playwright/test'

test('Launch Application',async({page})=>
{
    await page.goto('https://keralaproperty.in/')
})
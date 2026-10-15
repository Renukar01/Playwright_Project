import{test,expect} from '@playwright/test'

test('Multi Tabs',async({context})=>
{
    const page1=await context.newPage()
    await page1.goto('https://demo.guru99.com/popup.php')

    const [newPage]=await Promise.all([
        context.waitForEvent('page'),
        page1.getByRole('link',{name:'Click Here'}).click()
    ])

    await newPage.waitForLoadState()
    await page1.waitForTimeout(2000)
    await newPage.locator('xpath=/html/body/form/table/tbody/tr[5]/td[2]/input').fill('renuka@gmail.com')
    await page1.waitForTimeout(2000)
    await newPage.close()
    await page1.bringToFront();
    await page1.waitForTimeout(2000)
})
import{test,expect} from '@playwright/test'

test.use({viewport:{width:1536,height:864}})
test('View Port', async({page})=>
{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")

    const field=page.getByPlaceholder('Enter your full name')
    await field.click()
    await field.fill("Renuka R")
    await page.keyboard.press('Control+A')
    await page.waitForTimeout(1000)
    await page.keyboard.press('Control+C')
    await page.waitForTimeout(1000)

    await page.keyboard.press('Tab')
    await page.waitForTimeout(1000)
    await page.keyboard.press('Control+v')
    await page.waitForTimeout(3000)
}
)
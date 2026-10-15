import{test,expect} from '@playwright/test'

test('Drop down',async({page})=>
{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")
    const day=page.locator(".day")
    await day.selectOption("30")
    //const month=page.locator(".middle month")
    //await month.selectOption({label:"JAN"})
    const year=page.locator(".year")
    await year.selectOption({index:14})

    await page.waitForTimeout(6000)
})
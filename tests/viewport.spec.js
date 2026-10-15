import{test,expect} from '@playwright/test'

test.use({viewport:{width:1536,height:864}})
test('View Port', async({page})=>
{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")
   // console.log(await page.viewportSize().height)
    //console.log(await page.viewportSize().width)
    await page.waitForTimeout(3000)
}
)
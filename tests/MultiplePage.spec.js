import{test,expect} from '@playwright/test'

test("Muptiple Page",async({context})=>
{
    const page1=await context.newPage();
    await page1.goto('https://www.amazon.in/')
    const tit1=page1.title()
    console.log(tit1)


    const page2=await context.newPage();
    await page2.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    const tit2=page2.title()
    console.log(tit2)
})
import{test,expect} from '@playwright/test'
import { LoginPage } from '../../PageFolder/LoginPage.js'
import { HomePge } from '../../PageFolder/HomePage.js'

test.beforeEach('KpLogin',async({page})=>
{
    await page.goto('https://keralaproperty.in/member/login/')
    const login=new LoginPage(page)
    
    await login.seValues("renukar4774@gmail.com","Renuka@123")
    await login.btnClick()
    const title=await login.titleVerifivation()
    expect(title).toContain('Post your Property - Login | Keralaproperty')
    await page.waitForTimeout(2000)
})
test('Home Page',async({page})=>
{
    const home=new HomePge(page)
    const ttl=await home.Verification()
    expect(ttl).toContain('Kerala Real Estate Website | Kerala Property')
    
    await home.dataFill('Villa')
    await page.waitForTimeout(2000)

})
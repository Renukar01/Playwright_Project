import{test,expect} from '@playwright/test'
import { LoginPage } from '../../PageFolder/LoginPage.js'

test('KpLogin',async({page})=>
{
    await page.goto('https://keralaproperty.in/member/login/')
    const login=new LoginPage(page)
    await login.seValues("Renukar","Renuka@123")
    await login.btnClick()
    const title=await login.titleVerifivation()
    expect(title).toContain('Post your Property - Login | Keralaproperty')
    await page.waitForTimeout(2000)
})
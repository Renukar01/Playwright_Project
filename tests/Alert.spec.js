import {test,expect} from '@playwright/test'

test .beforeEach('Alert',async({page})=>
{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
}
)
test('simple alert',async({page})=>
{
    page.on('dialog',async dlg=>
    {
        expect(dlg.type()).toContain('alert')
        expect(dlg.message()).toContain('I am an alert box!')
        await dlg.accept()
        await page.waitForTimeout(2000)
    }
    )
    await page.waitForTimeout(2000)
    const alertBTn=page.getByRole('button',{name:'click the button to display an  alert box:'})
    await alertBTn.click()
    await page.waitForTimeout(2000)
})
//conformation allert
test('confirmation alert',async({page})=>
{
    page.on('dialog',async dlg=>
    {
        expect(dlg.type()).toContain('confirm')
        expect(dlg.message()).toContain('Press a Button !')
        await dlg.accept()
        //await dlg.dismiss()
        await page.waitForTimeout(2000)
    }
    )
    
    const btn=page.locator('xpath=/html/body/div[1]/div/div/div/div[1]/ul/li[2]/a')
    await btn.click()
    await page.waitForTimeout(2000)
    const alertBTn=page.locator('xpath=//*[@id="CancelTab"]/button')
    await alertBTn.click()
    await page.waitForTimeout(2000)
})

test.only('prompt alert',async({page})=>
{
    page.on('dialog',async dlg=>
    {
        expect(dlg.type()).toContain('prompt')
        expect(dlg.message()).toContain('Please enter your name')
        await dlg.accept('Renuka')
        //await dlg.dismiss()
        await page.waitForTimeout(2000)
    }
    )
    
    const btn=page.locator('xpath=/html/body/div[1]/div/div/div/div[1]/ul/li[3]/a')
    await btn.click()
    await page.waitForTimeout(2000)
    const alertBTn=page.locator('xpath=//*[@id="Textbox"]/button')
    await alertBTn.click()
    await page.waitForTimeout(2000)
})
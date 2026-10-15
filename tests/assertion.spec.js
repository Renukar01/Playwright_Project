import{test,expect} from '@playwright/test'
import { log } from 'node:console'
import { title } from 'node:process'
import { beforeEach } from 'node:test'

test.beforeEach("Assertion",async({page})=>
{
   await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

})
test('Title Verification',async({page})=>
{
    await expect(page).toHaveTitle('Rediffmail Free Unlimited Storage')
})

test('logo verifivatio',async({page})=>
{
    const logo=page.locator("xpath=/html/body/div[1]/div/div[1]/a/img")
    await expect(logo).toBeVisible()
})

test('Button enable / disable',async({page})=>
{
    const btn=page.locator('#Register')
    await expect(btn).toBeEnabled()
})

test('Chech box enable / disable',async({page})=>
{
    const cbox=page.locator('xpath=/html/body/div[2]/div[2]/form/div/div[9]/div/label[1]/input')
    await expect(cbox).toBeChecked()
})

test('Textbox editable or not',async({page})=>
{
    const tbox=page.getByPlaceholder("Enter your full name")
    await expect(tbox).toBeEditable()
})
test.only('non retrying',async({page})=>
{
    const msg='Account created'
    await expect(msg).toContain('created')
})
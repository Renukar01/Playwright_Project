import{test,expect} from '@playwright/test'
import path from 'node:path'


test('View Port', async({page})=>
{
    await page.goto("https://demo.automationtesting.in/FileUpload.html")
    const btn=page.locator('//*[@id="input-4"]')
    btn.setInputFiles("S:\\IMG_1508.JPG",path)
}
)
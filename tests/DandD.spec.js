import{test,expect} from '@playwright/test'

test('Drag and Drop',async({page})=>
{
    await page.goto("https://demo.guru99.com/test/drag_drop.html")

    const bSource=page.locator('//*[@id="credit2"]/a')
    const bDest=page.locator('//*[@id="bank"]/li')
    
    const bamt=page.locator('//*[@id="fourth"]/a').first()
    const bamtDest=page.locator('//*[@id="amt7"]/li')

    const sAmt=page.locator('//*[@id="fourth"]/a')
    const sAmtDest=page.locator('//*[@id="amt8"]/li')
    
    const sSource=page.locator('//*[@id="credit1"]/a')
    const sDest=page.locator('//*[@id="loan"]/li')

    await bSource.dragTo(bDest)
    await bamt.dragTo(bamtDest)
    await sSource.dragTo(sDest)
    await page.waitForTimeout(2000)
    await expect(page.locator('//*[@id="equal"]/a')).toHaveText('perfect!')
})
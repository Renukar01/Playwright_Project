export class HomePge{
    constructor(page)
    {
        this.page=page
        this.addProperty=page.locator("xpath=/html/body/div[3]/div/div/div[1]/div/ul/li[3]/a")
        this.propertyLabel=page.locator('#proplabel')
    }
    async Verification()
    {
        return await this.page.title()
    }
    async dataFill(Property_Label)
    {   
        await this.addProperty.click()
        await this.propertyLabel.fill(Property_Label)
    }
}
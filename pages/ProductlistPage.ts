import {Page,Locator} from '@playwright/test'

export class ProductListPage
{
    page:Page;
    AddToCart:Locator;
    OpenCartIcon:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.AddToCart = page.locator('#add-to-cart-sauce-labs-backpack');
        this.OpenCartIcon = page.locator('.shopping_cart_badge');
    }

    async AddTocartButton()
    {
        await this.AddToCart.click();
    } 

}
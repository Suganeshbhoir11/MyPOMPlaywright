 import{test,expect} from '@playwright/test'

 test('ValidateInventory',async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.waitForTimeout(2000);

    //assertion to navigate to Invengtory
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('#react-burger-menu-btn').click();
    await page.waitForTimeout(2000);
    await page.locator('#logout_sidebar_link').click();
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await page.waitForTimeout(5000);
    
 })

 test('AddToCart',async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.waitForTimeout(2000);

    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.waitForTimeout(2000);
    const CartVisible = await page.locator('.shopping_cart_badge');
    await expect(CartVisible).toBeVisible();

    await page.locator('#react-burger-menu-btn').click();
    await page.waitForTimeout(2000);
    await page.locator('#logout_sidebar_link').click();
    await page.waitForTimeout(2000);

 })
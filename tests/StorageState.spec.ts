import { test, expect } from '@playwright/test';

test('validateProduct', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.waitForTimeout(2000);
    await page.locator('#item_4_title_link').click();
    await page.waitForTimeout(2000);
    
})
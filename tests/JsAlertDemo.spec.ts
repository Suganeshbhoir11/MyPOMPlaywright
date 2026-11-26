import { test, expect } from '@playwright/test';

test('AlertDemo', async ({ page }) => {

    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
    await page.waitForTimeout(5000);

    page.on('dialog', async dialog => {

        console.log(await dialog.message()); //show the message of the alert
        await dialog.accept('Playwright');
    });

    //await page.locator('//*[@id="__next"]/div/main/section[2]/div/div/div/div[1]/p/button').click();

    //await page.locator('//*[@id="__next"]/div/main/section[2]/div/div/div/div[2]/div/p[1]/button').click();

    await page.locator('//*[@id="__next"]/div/main/section[2]/div/div/div/div[3]/p[1]/button').click();

    await page.waitForTimeout(5000);
});
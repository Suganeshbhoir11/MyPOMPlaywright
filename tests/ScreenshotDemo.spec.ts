import { test, expect } from '@playwright/test';

test('Screenshot', async ({ page }) => {

    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
    await page.waitForTimeout(5000);

    //view port screenshot
    await page.screenshot({path:'viewport.png'});

    //full page screenshot
    await page.screenshot({path:'fullpage.png', fullPage:true});

    //element screenshot
    const ele_1 = await page.getByText('Get Started Free');
    await ele_1.screenshot({path:'ele_1.png'});

})
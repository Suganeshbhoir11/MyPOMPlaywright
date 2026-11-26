import { test, expect } from '@playwright/test';

test('DropdownTest', async ({ page }) => {

    await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/');
    await page.waitForTimeout(5000);

    //select by label
    await page.locator('[name=country]').selectOption({label:'India'});

    //select by index
    await page.locator('[name=country]').selectOption({ index: 3 });

    //select by value
    await page.locator('[name=country]').selectOption({value:'NC'});

    await page.waitForTimeout(5000);

});
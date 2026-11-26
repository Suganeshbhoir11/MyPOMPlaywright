import{test,expect} from '@playwright/test';

test('LoginTest',async({page})=>{

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    //validate the page title

    await expect(page).toHaveTitle(('Test Login | Practice Test Automation'));

    await page.getByLabel('Username').fill('student');

    await page.getByLabel('Password').fill('Password123');

    await page.getByRole('button',{name:'Submit'}).click();

    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');

    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

    await page.waitForTimeout(5000);

    await page.getByRole('link',{name:'Log out'}).click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveTitle('Test Login | Practice Test Automation');

    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');

    await page.waitForTimeout(5000);
})
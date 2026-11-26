import{test,expect} from '@playwright/test'
import {LoginPage} from '../pages/loginPage'
import{ProductListPage} from '../pages/ProductlistPage'

test('ValidatedLogin',async({page})=>{

    const loginpage = new LoginPage(page);
    await loginpage.openApplication();
    await loginpage.doLogin();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(5000);

})

test('AddCart',async({page})=>{

    const AddTocartfunc = new ProductListPage(page);
    const logFunc = new LoginPage(page);
    await logFunc.openApplication();
    await logFunc.doLogin();
    await AddTocartfunc.AddTocartButton();
    await page.waitForTimeout(5000);

})


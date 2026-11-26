import{test,expect} from '@playwright/test'

test('TableDemo',async({page})=>{

    await page.goto('https://www.testmuai.com/selenium-playground/table-sort-search-demo/');
    await page.waitForTimeout(2000);
    // column count
    const allcolumn = await page.locator('thead tr th');
    const columncount = await allcolumn.count();
    console.log('Total - '+columncount);

    await expect(columncount).toBe(4);

    //Row count
    const allrows = await page.locator('tbody tr');
    const countofrows = await allrows.count();
    console.log('Total row - '+countofrows);

    await expect(countofrows).toBe(12)

    await page.waitForTimeout(5000);

});
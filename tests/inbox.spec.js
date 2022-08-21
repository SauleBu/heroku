const { test, expect } = require('@playwright/test');

test.setTimeout(120000);


test.describe('Testing galingas.lt', () => {
    test('Search for BMW E66 power', async ({ page }) => {
        page.goto('https://www.1nsane.lt/');
        //await page.locator('#carid').click();
//        let element = document.getElementsByName(brand_id);
        await page.selectOption('#carid', { label: 'BMW'});
        await page.selectOption('#modelid', {label: '7 serija 730d - E65 - 231 HP'});
        await page.locator('#find_power').click();

        await expect(page.locator('#power-results')).toContainText('Galingumas');

        await expect(page.locator('#power-results')).toContainText('199');
        //await expect(page.locator('#flash-messages')).toHaveText('Prašome įvesti vartotojo vardą ir slaptažodį!') ;
    });
});
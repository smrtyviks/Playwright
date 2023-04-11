// @ts-check
const { test, expect } = require('@playwright/test');

test('Launch Home page', async ({ page }) => {
  //Launch Home Page
  await page.goto('https://www.lego.com/en-us');
  //Handle Dialog popups
  page.on('dialog', dialog => {
    dialog.accept();
  });
  //Take Screenshot and handle age gate
  await page.screenshot({ path: './test-results/screenshot1.png' });
  if ((await page.locator('[data-test="age-gate-overlay"] div').filter({ hasText: 'LEGO.comYou are about to enter LEGO.com.You can shop, get support & more.Continu' })) !== null) {
    await page.screenshot({ path: './test-results/screenshotAgegate.png' });
    await page.locator('[data-test="age-gate-grown-up-cta"]').click();
  }
   //Take Screenshot and handle Cookies dialog box
  await page.locator('[data-test="age-gate-overlay"]').getByRole('img', { name: 'Lego' }).isVisible();
  if(await page.getByText('Privacy preferences: The cookies are ours. The control is yours.')!==null){
    await page.screenshot({ path: './test-results/screenshotCookieshandle.png' });
    await page.locator('[data-test="cookie-accept-all"]').click();
  }
// Invoke Search input button and search for Yoda Sets
  await page.locator('[data-test="search-input-button"]').click();
  await page.locator('[data-test="search-input"]').fill('Yoda');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: './test-results/screenshot2.png' });
  await page.getByRole('link', { name: 'yoda', exact: true }).click();
  await page.getByText('Search results for "yoda"').isVisible();
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: './test-results/screenshot3.png' });
  // Select the Product to be added to Bag
  await page.locator('[aria-label="The Child"]').click();

  //Handle Popup if visible
  if(await page.getByRole('img', { name: 'Survey invitation background' }).isVisible() == null){
    await page.getByRole('link', { name: 'no', exact: true }).click();
  }

  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: './test-results/screenshot4.png' });
  // Add product to the bag
  await page.locator('[data-test="add-to-bag"]').click();
  await page.locator('[data-test="view-my-bag"]').click();
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: './test-results/screenshot5.png' });
  //verify that the product added is present in the Bag for shopping
  await page.locator('[data-test="cart-item"] div').filter({ hasText: 'The Child' }).nth(2).click();
  // Remove the Product from the cart for fresh run next iteration 
  await page.locator('[data-test="remove-from-cart"]').click();
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: './test-results/screenshot6.png' });

});


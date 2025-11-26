import {test, expect} from '@playwright/test'

test('Login page validation', async ({page}) => {
    //1. Write a Playwright test that opens saucedemo.com, logs in with valid credentials, 
    // verifies the Products page is visible.
    await page.goto('https://www.saucedemo.com/')
    await expect(page).toHaveTitle('Swag Labs')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button',{name:"Login"}).click()
    await expect(page.getByText('Products')).toHaveText('Products')
    console.log('Login Sucessful & Product page displayed.')

   //2. Add any product to cart → Verify cart badge count becomes 1
   await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click()
   await page.locator('[data-test="shopping-cart-link"]').click()
   await expect(page.locator('[data-test="item-quantity"]')).toHaveText('1')
   console.log('Product added in the cart and expected item is 1 successfully verified.')

    //3. Search for 'Laptop' and verify results contain this keyword.
    await page.getByRole('button',{name:"Continue Shopping"}).click()
    const souce = await page.getByText('Sauce Labs Onesie')
    await souce.click()
    await expect(souce).toHaveText("Sauce Labs Onesie")
    console.log('Souce shirt displayed')

    //4. Call an API and validate UI matches the API response.

});
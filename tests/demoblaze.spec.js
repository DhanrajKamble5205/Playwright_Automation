import {test,expect} from '@playwright/test'

test.beforeEach('using this to call url to every where',async({page}) => {

    await page.goto('https://www.demoblaze.com/')
});

test('Verify Signup and login to the page',async ({page}) => {
    // Signup page
   
    await page.getByRole('link',{name:"Sign Up"}).click()
    await expect(page.getByRole('heading',{name:'Sign Up'})).toHaveText('Sign Up')

    await page.getByRole('textbox',{name:'Username:'}).fill('demologin')
    await page.getByRole('textbox',{name:'Password:'}).fill('demologin')
    await page.getByRole('button',{name:"Sign Up"}).click()
    await page.getByRole('button',{name:"Close"}).first().click()
    console.log('Sing up sucessfull...')

    // Login page
    await page.getByRole('link',{name:"Log in"}).click()
    await expect(page.getByRole('heading',{name:'Log in'})).toHaveText('Log in')

    await page.locator('#loginusername').fill('demologin')
    await page.locator('#loginpassword').fill('demologin')
    await page.getByRole('button',{name:"Log In"}).click()
    console.log('Sucessful Login...')
});

test ('Add any product → cart updates', async ({page}) => {
    await page.getByRole('link',{name:'Iphone 6 32gb'}).click()
    await page.getByRole('link',{name:'Add to cart'}).click()
    await page.waitForURL('https://www.demoblaze.com/prod.html?idp_=5#')
    await page.getByRole('link',{name:'Cart'}).first().click()
   
    await expect(page.getByText('Iphone 6 32gb')).toBeVisible()
    console.log('Successfully added product in the cart.')

    await page.getByRole('button',{name:'Place'}).click()
    await page.getByRole('textbox',{name:'name:'}).fill('Tester')
    await page.getByRole('textbox',{name:'Country:'}).fill('India')
    await page.getByRole('textbox',{name:'City:'}).fill('Pune')
    await page.getByRole('textbox',{name:'Credit card:'}).fill('1234 1234 1234 1234')
    await page.getByRole('textbox',{name:'Month:'}).fill('November')
    await page.getByRole('textbox',{name:'Year:'}).fill('2025')
    await page.getByRole('button',{name:'purchase'}).click()

    await expect(page.getByRole('heading',{name:'Thank you for your purchase!'})).toHaveText('Thank you for your purchase!')
    // Get the text from the <p> element
    const idText = await page.locator('p.lead.text-muted').innerText();
    // Extract the ID using regex
    const idMatch = idText.match(/Id:\s*(\d+)/);
    console.log("Item Purchased and ID:", idMatch[1]);
    
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForSelector('.sweet-overlay', { state: 'hidden' });
    //await page.getByRole('button', { name: 'OK' }).click({delay:500});
    // Wait until the sweet alert popup **disappears**
    // await page.locator('.sweet-alert').waitFor({ state: 'hidden' });
})

test ('Public API returning product list', async ({reqest}) => {
    await page.goto('https://api.demoblaze.com/entries')

})


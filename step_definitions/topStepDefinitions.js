const { Given, When, Then } = require('cucumber');
const puppeteer = require('puppeteer');
const { expect } = require('chai');

let browser, page;

Given('I am on the Rahvaraamat.ee website', async function () {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('https://www.rahvaraamat.ee/');
});

When('I check the top weekly books carousel', async function () {
    await page.waitForSelector('.styles_swiper__3oDwK');
});

Then('I should see "Vareda" in the top weekly books carousel', async function () {
    const carousel = await page.$('.styles_swiper__3oDwK');

    const searchText = await page.evaluate(carousel => carousel.innerText, carousel);
    expect(searchText).to.include('Vareda');
});


const { Given, When, Then } = require('cucumber');
const puppeteer = require('puppeteer');
const { expect } = require('chai');

let browser, page;

Given('I am on the Rahvaraamat.ee website', async function () {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('https://www.rahvaraamat.ee/');
});

When('I enter "Harry Potter" into the search bar and press Enter', async function (searchQuery) {
    const searchInputSelector = '#search-input';
    await page.type(searchInputSelector, searchQuery);
    await page.keyboard.press('Enter');

    // Wait for the search results to appear (adjust the selector accordingly)
    await page.waitForSelector('.styles_gridViewContainer__3y5Q5');
});

Then('I should see search results for "Harry Potter"', async function () {
    const searchResultsContainer = await page.$('.styles_gridViewContainer__3y5Q5');

    const searchText = await page.evaluate(container => container.innerText, searchResultsContainer);
    expect(searchText).to.include('Harry Potter');
});


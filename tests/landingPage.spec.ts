import { test, expect } from '@playwright/test';
test.describe('Desktop tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.emerald.com/insight/');
    await page.getByLabel('Agree to storing cookies and').click();

    await page.waitForLoadState('domcontentloaded');
  });

  test.only('open search from landing page using enter', async ({ page }) => {
    //Arrange
    const searchItem = 'swimming';

    //Act
    await page.getByPlaceholder('Start your search here...').fill(searchItem);
    await page.getByPlaceholder('Start your search here...').press('Enter');
    // await page.getByLabel('Submit').click();

    //Assert
    await expect(page).toHaveURL(
      `https://www.emerald.com/insight/search?q=${searchItem}`,
    );
  });

  test('open search from landing page using submit', async ({ page }) => {
    //Arrange
    const searchItem = 'swimming';

    //Act
    await page.getByPlaceholder('Start your search here...').fill(searchItem);
    await page.getByLabel('Submit').click();

    //Assert
    await expect(page).toHaveURL(
      `https://www.emerald.com/insight/search?q=${searchItem}`,
    );
  });
});

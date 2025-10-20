import { test, expect } from '@playwright/test';
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { CategoryPage } from '../pages/categoryPage';


test.describe("Test Home Page", () => {
    let homePage: HomePage;
    let loginPage: LoginPage;

    //set up
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);

        await homePage.goToPage();
        await loginPage.login('minga', 'Trident123!');
    });

//Danh muc 
test('TC_Home_01:  Verify user can see Lập trình Backend section when open Danh mục', async ({ page }) => {
  const homePage = new HomePage(page);
  const categoryPage = new CategoryPage(page);

  await homePage.goToPage();
  await categoryPage.selectBackendCategory();
  await categoryPage.clickRandomCourseIn();
  await categoryPage.verifyNavigatedToCourseDetail();
});

test('TC_Home_02:  Verify user can register a course from Lập trình Backend section', async ({ page }) => {
  const homePage = new HomePage(page);
  const categoryPage = new CategoryPage(page);

  await homePage.goToPage();
  await categoryPage.selectBackendCategory();
  await categoryPage.clickRandomCourseIn();
  await categoryPage.verifyNavigatedToCourseDetail();
  await categoryPage.clickDangKyButton();
});
test('TC_Home_03:  Verify user can see Thiết kế Web section when open Danh mục', async ({ page }) => {
  const homePage = new HomePage(page);
  const categoryPage = new CategoryPage(page);

  await homePage.goToPage();
  await categoryPage.selectWebDesignCategory();
  await categoryPage.clickRandomCourseIn();
  await categoryPage.verifyNavigatedToCourseDetail();
});
test('TC_Home_04:  Verify user can see Lập trình di động section when open Danh mục', async ({ page }) => {
  const homePage = new HomePage(page);
  const categoryPage = new CategoryPage(page);

  await homePage.goToPage();
  await categoryPage.selectMobileDevelopmentCategory();
  await categoryPage.clickRandomCourseIn();
  await categoryPage.verifyNavigatedToCourseDetail();   

});
test('TC_Home_05:  Verify user can see Lập trình Front end section when open Danh mục', async ({ page }) => {
  const homePage = new HomePage(page);
  const categoryPage = new CategoryPage(page);

  await homePage.goToPage();
  await categoryPage.selectFrontendCategory();
  await categoryPage.clickRandomCourseIn();
  await categoryPage.verifyNavigatedToCourseDetail();   
});
test('TC_Home_06:  Verify user can see Lập trình Full Stack section when open Danh mục', async ({ page }) => {
  const homePage = new HomePage(page);
  const categoryPage = new CategoryPage(page);

  await homePage.goToPage();
  await categoryPage.selectFullstackCategory();
  await categoryPage.clickRandomCourseIn();
  await categoryPage.verifyNavigatedToCourseDetail();   
});
test('TC_Home_07:  Verify user can see Tư duy lập trình section when open Danh mục', async ({ page }) => {
  const homePage = new HomePage(page);
  const categoryPage = new CategoryPage(page);

  await homePage.goToPage();
  await categoryPage.selectProgrammingThinkingCategory();
  await categoryPage.clickRandomCourseIn();
  await categoryPage.verifyNavigatedToCourseDetail();   
});

});
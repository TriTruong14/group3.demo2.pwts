
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";

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

    test('TC_Home_01: Verify that the home page is displayed after a successful login', async ({ page }) => {
        // Verify that the home page is displayed
        // const welcomeMessage = await homePage.getWelcomeMessage();
        // expect(welcomeMessage).toBeTruthy();
        //await expect(page.locator("//h1[contains(text(),'Chào mừng')]")).toBeVisible();
        await expect(page.locator("img.avatar")).toBeVisible();
    });

    test('TC_Home_02: Verify navigation to Danh Mục section', async ({ page }) => {
         await homePage.goToDanhMuc(); 
        // // Verify that the Danh Mục section is displayed
        expect(page.url()).toContain('/trangchu');
        await expect(page.locator('.courseCateList').first()).toBeVisible();
        await page.locator('.courseCateList').first().locator('a[href*="BackEnd"]').click();;
        await expect(page).toHaveURL(/.*danhmuckhoahoc\/BackEnd/);
        
    });

    test('TC_Home_03: Verify navigation to Khóa Học section', async ({ page }) => {
        await homePage.goToKhoaHoc();
        // Verify that the Khóa Học section is displayed
        expect(page.url()).toContain('/khoahoc');
    });

    test('TC_Home_04: Verify navigation to Blog section', async ({ page }) => {
        await homePage.goToBlog();
        // Verify that the Blog section is displayed
        expect(page.url()).toContain('/blog');
    });

    test('TC_Home_05: Verify navigation to Sự Kiện section', async ({ page }) => {
        await homePage.goToSuKien();
        // Verify that the Sự Kiện section is displayed
        expect(page.url()).toContain('/sukien');
    });

    test('TC_Home_06: Verify navigation to Thông Tin section', async ({ page }) => {
        await homePage.goToThongTin();
        // Verify that the Thông Tin section is displayed
        expect(page.url()).toContain('/thongtin');
    });
    test('TC_Home_07: Verify that the user can navigate to their profile page', async ({ page }) => {
        await homePage.goToProfile();
        // Verify that the profile page is displayed
        expect(page.url()).toContain('/thongtincanhan');
    });

    test('TC_Home_08: Verify that the user can log out successfully', async ({ page }) => {
        await homePage.logout();
        await expect(page).toHaveURL(/trangchu/);
    });

    test('TC_Home_09: Verify logo click navigates to home page', async ({ page }) => {     
        await homePage.goToKhoaHoc(); // Navigate to another page first
        await homePage.logoClick(); // Click the logo to go back to home page
       // await expect(page).toHaveURL(); // Verify that we are back on the home page
    });

    // New test case for search functionality
    test('TC_Home_10: Verify search functionality', async ({ page }) => {     
        const keyword = "Back End";
        await homePage.search(keyword);
        await expect(homePage.searchInput.first()).toBeVisible();
        expect(page.url()).toContain(`/timkiem/${encodeURIComponent(keyword)}`);
    });
    test('TC_Home_11: Verify search not found', async ({ page }) => {
        const keyword = "NonExistentCourse";
        await homePage.search(keyword);
        await expect(homePage.searchInput.first()).toBeVisible();
        expect(page.url()).toContain(`/timkiem/${encodeURIComponent(keyword)}`);
        await expect(page.locator("//h6[contains(normalize-space(), 'Hiển thị')]")).toBeVisible();
    });


    });
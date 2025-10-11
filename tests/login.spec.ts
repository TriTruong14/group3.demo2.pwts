import { test } from '@playwright/test';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';

// test.describe ("Login Function", () => {

// let loginFunction: LoginPage; // Khai báo biến loginFunction để thao tác với class LoginPage

//   test.beforeEach (async ({ page }) => {
//     loginFunction = new LoginPage(page); // Khởi tạo biến loginFunction với đối tượng page
//     // await loginFunction.gotoPage(); // Mở trang đăng nhập trước mỗi test
//     await page.goto(process.env.BASE_URL!);
//   });

// test ("Login successful", async ({ page }) => {
//     await loginFunction.login("tri18","Tri@12345") // Sử dụng phương thức login từ class LoginPage});
//     // await expect(page.locator('img.avatar')).toBeVisible(); // Kiểm tra avatar hiển thị sau khi đăng nhập thành công
//     await expect(page.locator('h1')).toContainText('Chào mừng');
// });

// // test ("Login failed with invalid username", async ({ page }) => {
// //     await loginFunction.login('invalidUser','Tri@12345') // Sử dụng phương thức login từ class LoginPage});
// //     const errorMessage = await loginFunction.getErrorMessage(); // Lấy thông báo lỗi
// //     await expect(errorMessage).toContainText('Đã xảy ra lỗi vui lòng quay lại trang chủ hoặc thử lại'); // Kiểm tra thông báo lỗi
// // });

// })


test.describe("Test Home Page", () => {
    let homePage: HomePage;
    let loginPage: LoginPage;

    //set up
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);

        await homePage.goToPage();
        await loginPage.login('tri18', 'Tri@12345');
    });

    test('TC_Home_01: Verify that the home page is displayed after a successful login', async ({ page }) => {
        // Verify that the home page is displayed
        const welcomeMessage = await homePage.getWelcomeMessage();
        expect(welcomeMessage).toBeTruthy();
    });
});
import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { PASSWORD, USERNAME, WRONG_PW, WRONG_US } from "../utils/utils";

test.describe("TEST FUNCTION ĐĂNG NHẬP", ()=>{        
    let homePage: HomePage;
    let loginPage: LoginPage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await homePage.goToPage();
    });

    test("EP5_TC25: Kiểm tra trường Tài khoản, mật khẩu có placeholder", async ({page})=>{
        await loginPage.openLoginPage();
        await loginPage.usernameInput.fill(USERNAME);
        await loginPage.passwordInput.fill(PASSWORD);
        await expect(loginPage.usernameInput).toHaveValue(USERNAME);
        await expect(loginPage.passwordInput).toHaveValue(PASSWORD);
    });
    test("EP5_TC26: Kiểm tra trường mật khẩu có hiển thị dấu hoa thị", async ({page})=>{
        await loginPage.openLoginPage();
        await loginPage.usernameInput.fill(USERNAME);
        await loginPage.passwordInput.fill(PASSWORD);
        await expect(loginPage.usernameInput).toHaveValue(USERNAME);
        await expect(loginPage.passwordInput).toHaveValue(PASSWORD);
        await expect(loginPage.passwordInput).toHaveAttribute("type", "password");
    });    

    test("EP5_TC27: Đăng nhập thành công", async ({page})=>{
        await loginPage.login(USERNAME, PASSWORD);
        await expect(page.locator("img.avatar")).toBeVisible();
    });
    test("EP5_TC28: Tài khoản mật khẩu rỗng", async ({page})=>{
        await loginPage.login("","");
        await loginPage.verifyFailLogin();
        // await expect(page.locator(".swal-text")).toBeTruthy();
    });
    test("EP5_TC29: Đăng nhập lỗi khi tài khoản và mật khẩu sai", async ({page})=>{
        await loginPage.login(WRONG_US, WRONG_PW);                
        await loginPage.verifyFailLogin();
    });
    
    test("EP5_TC30: Đăng nhập lỗi khi tài khoản sai", async ({page})=>{
        await loginPage.login(WRONG_US, PASSWORD);                
        await loginPage.verifyFailLogin();
    });
        test("EP5_TC31: Đăng nhập lỗi khi mật khẩu sai", async ({page})=>{
        await loginPage.login(USERNAME, WRONG_PW);                
        await loginPage.verifyFailLogin();
    });

})
import test, { expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { SignUpPage } from "../pages/signUpPage";
import { email, invalidNums, invalidPasswords, reg_email, reg_name, reg_password, reg_phone, reg_username } from "../utils/utils";

test.describe("TEST FUNCTION ĐĂNG KÝ", () => {
    let homePage: HomePage;
    let signUpPage: SignUpPage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signUpPage = new SignUpPage(page);
        await homePage.goToPage();
        await signUpPage.openSignUpPage();
    })

    test("EP5_TC02: Kiểm tra các trường đều có placeholder", async ({ page }) => {
        await signUpPage.fillSignUp(reg_username, reg_name, reg_password, reg_email, reg_phone);

        await expect(signUpPage.usernameInput).toHaveValue(reg_username);
        await expect(signUpPage.nameInput).toHaveValue(reg_name);
        await expect(signUpPage.passWordInput).toHaveValue(reg_password);
        await expect(signUpPage.emailInput).toHaveValue(reg_email);
        await expect(signUpPage.phoneNumberInput).toHaveValue(reg_phone);
    })
    test("EP5_TC03: Kiểm tra trường mật khẩu hiển thị dấu hoa thị", async ({ page }) => {
        await signUpPage.passWordInput.fill(reg_password);
        await expect(signUpPage.passWordInput).toHaveAttribute("type", "password");
    })
    test("EP5_TC04: Kiểm tra đăng ký thành công", async ({ page }) => {
        await signUpPage.fillSignUp(reg_username, reg_name, reg_password, reg_email, reg_phone);
        await signUpPage.signUpButton.click()
        await signUpPage.verifySignUpSuccess();
    })
    test("EP5_TC05: Kiểm tra thông báo lỗi khi để trống các trường", async ({ page }) => {
        await signUpPage.signUpButton.click()
        await expect(signUpPage.usernameError).toHaveText("Tài khoản không được để trống");
        await expect(signUpPage.fullnameError).toHaveText("Tên không được để trống");
        await expect(signUpPage.passwordError).toHaveText("Tài khoản không được để trống");
        await expect(signUpPage.emailError).toHaveText("Email không được để trống");
        await expect(signUpPage.phoneError).toHaveText("Số điện thoại không được để trống");
    })
    test("EP5_TC06: Kiểm tra thông báo lỗi khi độ dài UserName 1 kí tự", async ({ page }) => {
        await signUpPage.usernameInput.fill("q");
        await signUpPage.signUpButton.click();
        await expect(signUpPage.usernameError).toHaveText("Tài khoản quá ít kí tự");
    })
    test("EP5_TC07: Kiểm tra hợp lệ khi độ dài UserName 2 kí tự", async ({ page }) => {
        await signUpPage.usernameInput.fill("qu");
        await signUpPage.signUpButton.click();
        await expect(signUpPage.usernameTrue).toHaveText("");
    })
    test("EP5_TC08: Kiểm tra hợp lệ khi độ dài UserName 16 kí tự", async ({ page }) => {
        await signUpPage.usernameInput.fill("quangduongquangd");
        await signUpPage.signUpButton.click();
        await expect(signUpPage.usernameTrue).toHaveText("");
    })
    test("EP5_TC09: Kiểm tra thông báo lỗi khi độ dài UserName 17 kí tự", async ({ page }) => {
        await signUpPage.usernameInput.fill("quangduongquangdu");
        await signUpPage.signUpButton.click();
        await expect(signUpPage.usernameError).toHaveText("Tài khoản quá 16 kí tự");
    })
    test("EP5_TC10: Kiểm tra thông báo lỗi khi độ dài Name 1 kí tự", async ({ page }) => {
        //FAIL
        await signUpPage.nameInput.fill("q");
        await signUpPage.signUpButton.click();
        await expect(signUpPage.fullnameError).toHaveText("Tên quá ngắn");
    })
    test("EP5_TC11: Kiểm tra hợp lệ khi độ dài Name 2 kí tự", async ({ page }) => {
        await signUpPage.nameInput.fill("qu");
        await signUpPage.signUpButton.click();
        await expect(signUpPage.page.locator(".message").nth(0)).toHaveText("");
    })
    test("EP5_TC12: Kiểm tra hợp lệ khi độ dài Name 50 kí tự", async ({ page }) => {
        await signUpPage.nameInput.fill("quangduongquangduongquangduongquangduongquangduong");
        await signUpPage.signUpButton.click();
        await expect(signUpPage.page.locator(".message").nth(0)).toHaveText("");
    })
    test("EP5_TC13: Kiểm tra thông báo lỗi khi độ dài Name 51 kí tự", async ({ page }) => {
        //FAIL
        await signUpPage.nameInput.fill("quangduongquangduongquangduongquangduongquangduong");
        await signUpPage.signUpButton.click();
        await expect(signUpPage.fullnameError).toHaveText("Tên vượt quá 50 kí tự");
    })
    test("EP5_TC14: Kiểm tra thông báo lỗi khi Name chứa chữ số", async ({ page }) => {
        await signUpPage.nameInput.fill("Duong 123");
        await signUpPage.signUpButton.click();
        await expect(signUpPage.fullnameError).toHaveText("Chỉ nhập kí tự chữ");
    })
    test("EP5_TC15: Kiểm tra thông báo lỗi khi đăng kí bằng Email đã tồn tại", async ({ page }) => {
        await signUpPage.fillSignUp(reg_username, reg_name, reg_password, email, reg_phone);
        await signUpPage.signUpButton.click();
        await signUpPage.verifyConflictEmail();
    })
    test("EP5_TC16: Kiểm tra thông báo lỗi khi đăng kí bằng Email không hợp lệ", async ({ page }) => {
        await signUpPage.emailInput.fill("quangduongle@g")
        await signUpPage.signUpButton.click();
        await expect(signUpPage.emailError).toHaveText("Email không hợp lệ");
    })
    test("EP5_TC17: Kiểm tra hợp lệ khi độ dài Email 100 kí tự", async ({ page }) => {
        await signUpPage.emailInput.fill("quangduonglequangduonglequangduonglequangduonglequangduonglequangduonglequangduonglequangd@gmail.com")
        await signUpPage.signUpButton.click();
        await expect(signUpPage.page.locator(".message").nth(0)).toHaveText("");
    })
    test("EP5_TC18: Kiểm tra hợp lệ khi độ dài Email 101 kí tự", async ({ page }) => {
        //FAIL
        await signUpPage.emailInput.fill("quangduonglequangduonglequangduonglequangduonglequangduonglequangduonglequangduonglequangdu@gmail.com")
        await signUpPage.signUpButton.click();
        await expect(signUpPage.emailError).toHaveText("Độ dài email vượt quá 100 kí tự");
    })
    test("EP5_TC19: Kiểm tra hợp lệ khi nhập Password đúng định dạng", async ({ page }) => {
        await signUpPage.passWordInput.fill("Duong@123")
        await signUpPage.signUpButton.click();
        await expect(signUpPage.page.locator(".message").nth(0)).toHaveText("");
    })
    test.describe("EP5_TC20: Xác minh lỗi khi nhập Password sai định dạng", () => {
        for (const pwd of invalidPasswords) {
            test(`Nhập mật khẩu "${pwd}" hiển thị lỗi định dạng`, async ({ page }) => {
                await signUpPage.passWordInput.fill(pwd);
                await signUpPage.signUpButton.click();
                await expect(signUpPage.passwordError).toHaveText("Mật khẩu phải ít nhất 8 tự gồm chữ, số, và kí tự đặc biệt");
            });
        }
    });
    test("EP5_TC21: Kiểm tra hợp lệ khi nhập Password 30 kí tự", async ({ page }) => {
        await signUpPage.passWordInput.fill("Duong@123Duong@123Duong@123Duong@1")
        await signUpPage.signUpButton.click();
        await expect(signUpPage.page.locator(".message").nth(0)).toHaveText("");
    })
    test("EP5_TC22: Kiểm tra thông báo lỗi khi nhập Password 31 kí tự", async ({ page }) => {
        //FAIL
        await signUpPage.passWordInput.fill("Duong@123Duong@123Duong@123Duong@12")
        await signUpPage.signUpButton.click();
        await expect(signUpPage.passwordError).toHaveText("Mật khẩu vượt quá 30 kí tự");
    })
    test("EP5_TC22: Kiểm tra hợp lệ khi nhập PhoneNumber đúng định dạng", async ({ page }) => {
        await signUpPage.phoneNumberInput.fill(reg_phone)
        await signUpPage.signUpButton.click();
        await expect(signUpPage.page.locator(".message").nth(0)).toHaveText("");
    })
    test.describe("EP5_TC23: Xác minh lỗi khi nhập PhoneNumber sai định dạng", () => {
        for (const nums of invalidNums) {
            test(`Nhập số điện thoại "${nums}" hiển thị lỗi định dạng`, async ({ page }) => {
                await signUpPage.phoneNumberInput.fill(nums);
                await signUpPage.signUpButton.click();
                await expect(signUpPage.phoneError).toHaveText("Số điện thoại chưa đúng định đạng");
            });
        }
    });
})
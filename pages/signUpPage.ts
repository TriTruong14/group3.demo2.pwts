import { Page, Locator, expect } from "@playwright/test";
import { BASE_URL, PASSWORD, reg_email, reg_name, reg_password, reg_phone, reg_username, USERNAME } from "../utils/utils";

export class SignUpPage {
    readonly page: Page;
    readonly signUpLink: Locator;
    readonly pageTitle: Locator;
    readonly usernameInput: Locator;
    readonly nameInput: Locator;
    readonly passWordInput: Locator;
    readonly emailInput: Locator;
    readonly phoneNumberInput: Locator;
    readonly signUpButton: Locator;

    readonly usernameError: Locator;
    readonly fullnameError: Locator;
    readonly passwordError: Locator;
    readonly emailError: Locator;
    readonly phoneError: Locator;

    readonly usernameTrue: Locator;
    readonly fullnameTrue: Locator;
    readonly passwordTrue: Locator;
    readonly emailTrue: Locator;
    readonly phoneTrue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signUpLink = page.locator("button.btnGlobal >> a[href='/login']");
        this.pageTitle = page.locator("//h2[contains(text(),'ĐĂNG KÝ')]")
        this.usernameInput = page.locator("//div[@class='form-container sign-up-container']//input[@placeholder='Tài khoản']");
        this.nameInput = page.locator("//input[@placeholder='Họ tên']");
        this.passWordInput = page.locator("//div[@class='form-container sign-up-container']//input[@placeholder='Mật khẩu']");
        this.emailInput = page.locator("//input[@placeholder='Email']");
        this.phoneNumberInput = page.locator("//input[@placeholder='Số điện thoại']");
        this.signUpButton = page.locator("//button[@type='submit'][contains(text(),'Đăng ký')]");

        this.usernameError = page.locator(".errorMessage").nth(0);
        this.fullnameError = page.locator(".errorMessage").nth(1);
        this.passwordError = page.locator(".errorMessage").nth(2);
        this.emailError = page.locator(".errorMessage").nth(3);
        this.phoneError = page.locator(".errorMessage").nth(4);

        this.usernameTrue = page.locator(".message").nth(0);
        this.fullnameTrue = page.locator(".message").nth(1);
        this.passwordTrue = page.locator(".message").nth(2);
        this.emailTrue = page.locator(".message").nth(3);
        this.phoneTrue = page.locator(".message").nth(4);
    }
    async goToPage() {
        await this.page.goto(BASE_URL || "");
    }

    async openSignUpPage(){
        await this.signUpLink.click();
        const signUpBtnInLogin = this.page.locator("//button[@id='signUp']");
        await expect(signUpBtnInLogin).toBeVisible({ timeout: 10000 });
        await signUpBtnInLogin.click();
    }
    async fillSignUp(username: string = reg_username,name: string = reg_name, password: string = reg_password, email: string = reg_email, phone: string = reg_phone){
        await this.usernameInput.fill(reg_username);
        await this.nameInput.fill(reg_name);
        await this.passWordInput.fill(reg_password);
        await this.emailInput.fill(reg_email);
        await this.phoneNumberInput.fill(reg_phone);
    }
    async verifySignUpSuccess() {
        const successPopup = this.page.locator(".swal-title");
        await expect(successPopup).toBeVisible({ timeout: 10000 });
        await expect(successPopup).toHaveText("Đăng kí thành công");
    }

    async verifyConflictEmail() {
        const warningPopup = this.page.locator(".swal-title");
        await expect(warningPopup).toBeVisible({ timeout: 10000 });
        await expect(warningPopup).toHaveText("Email đã tồn tại!");
    }


}

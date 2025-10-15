import { Page, Locator, expect } from "@playwright/test";
import { BASE_URL, PASSWORD, USERNAME } from "../utils/utils";


export class LoginPage {
    //thuoc tinh login page
    //readonly: chi doc va khong thay doi gia tri
    readonly page: Page;
    readonly loginLink: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly swalTitle: Locator;
    readonly swalText: Locator;
    readonly signupButton: Locator;


    //constructor
    constructor(page: Page) {
        this.page = page;
        this.loginLink = page.locator("button.btnGlobal >> a[href='/login']");
        this.usernameInput = page.locator("//form[@class='formLoginUser']//input[@placeholder='Tài khoản']");
        this.passwordInput = page.locator("//form[@class='formLoginUser']//input[@placeholder='Mật khẩu']");
        this.loginButton = page.locator("//button[@type='submit'][contains(text(),'Đăng nhập')]");;
        this.swalTitle = page.locator("//div[@class='swal-title']");
        this.swalText = page.locator(".swal-text");
        this.signupButton = page.locator("//button[@id='signUp']");
    }

    async goToPage() {
        await this.page.goto(BASE_URL || "");
    }
    async openLoginPage() {
        await this.loginLink.click();
        await this.page.waitForSelector("//form[@class='formLoginUser']");
    }

    async login(username: string = USERNAME, password: string = PASSWORD) {
        await this.openLoginPage();
        await this.usernameInput.fill(USERNAME);
        await this.passwordInput.fill(PASSWORD);
        await this.loginButton.click();
    }

    async getErrorMessage(): Promise<string | null> {
        return await this.swalTitle.textContent();
    }
}

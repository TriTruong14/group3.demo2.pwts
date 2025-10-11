import { Locator, Page } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config(); // Load biến môi trường từ file .env
import { USERNAME, PASSWORD, BASE_URL } from '../utils/utils';
// const USERNAME = process.env.USERNAME || "";
// const PASSWORD = process.env.PASSWORD || "";

// export class LoginPage {
//     readonly page: Page;
//     readonly errorMessage: Locator;
//     readonly username: Locator;
//     readonly password: Locator;
//     readonly loginButton: Locator;

//     constructor(page: Page) {
//         this.page = page;
//         this.errorMessage = page.locator('.error-message');
//         this.username = page.locator('form.formLoginUser >> input[name="taiKhoan"]');
//         this.password = page.locator('form.formLoginUser >> input[name="matKhau"]');
//         this.loginButton = page.locator('form.formLoginUser button[type="submit"]');
//     }

//     async gotoPage() {
//         const url = process.env.BASE_URL;
//         if (!url) throw new Error('BASE_URL is not set in .env');
//         await this.page.goto(url);
        
//         // await this.page.goto(process.env.BASE_URL || ""); // Sử dụng biến môi trường baseURL từ file .env
//     }

//     async login(username: string=USERNAME, password: string=PASSWORD) {
//        await this.username.fill(username);
//        await this.password.fill(password);
//        await this.loginButton.click();
//     }
//     getErrorMessage(): Locator {
//         return this.errorMessage
//     }
// }

export class LoginPage {
  //thuoc tinh login page
  //readonly: chi doc va khong thay doi gia tri
  readonly page: Page;
  readonly loginLink: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.loginLink = page.locator("button.btnGlobal >> a[href='/login']");
    this.usernameInput = page.locator("//form[@class='formLoginUser']//input[@placeholder='Tài khoản']");
    this.passwordInput = page.locator("//form[@class='formLoginUser']//input[@placeholder='Mật khẩu']");
    this.loginButton = page.locator("//button[@type='submit'][contains(text(),'Đăng nhập')]");;
    this.errorMessage = page.locator("swal-title");
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
      return await this.errorMessage.textContent();
    }
  }
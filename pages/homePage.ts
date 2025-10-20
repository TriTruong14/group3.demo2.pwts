import { Page, Locator, expect } from '@playwright/test';
import { BASE_URL } from '../utils/utils';

export class HomePage {
    readonly page: Page;
    readonly welcomeMessage: Locator;
    readonly danhMucMenu: Locator;
    readonly khoaHocMenu: Locator;
    readonly blogMenu: Locator;
    readonly suKienMenu: Locator;
    readonly thongTinMenu: Locator;
    readonly userMenu: Locator;
    readonly logoutButton: Locator;
    readonly searchInput: Locator;
    readonly textLogoMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.welcomeMessage = this.page.locator("h1");
        this.danhMucMenu = this.page.locator("text=Danh mục");
        this.khoaHocMenu = this.page.locator("//ul[@class='menuHeader']//a[contains(text(),'Khóa học')]");
        this.blogMenu = this.page.locator("//ul[@class='menuHeader']//a[contains(text(),'Blog')]");
        this.suKienMenu = this.page.locator("//body/div[@id='root']/section[@class='header']/div[@class='headerRight']/ul[@class='menuHeader']/li[@class='eventHeader courseCate']/a[1]");
        this.thongTinMenu = this.page.locator("a[href='/thongtin']").first();
        this.userMenu = this.page.locator("img.avatar");
        this.logoutButton = this.page.locator("span.logout");
        this.searchInput = this.page.locator("input.searchForm[placeholder='Tìm kiếm']");
        this.textLogoMenu = this.page.locator("//a[@class='textLogo active']");
    }

    async goToPage() {
        await this.page.goto(BASE_URL || '', { waitUntil: 'domcontentloaded' });
    }
    async getWelcomeMessage(): Promise<boolean> {
        return await this.welcomeMessage.first().isVisible();
    }
    async goToDanhMuc(): Promise<void> {
        await this.danhMucMenu.first().click();
    }
    async goToKhoaHoc(): Promise<void> {
        await this.khoaHocMenu.click();
    }
    async goToBlog(): Promise<void> {
        await this.blogMenu.click();
    }
    async goToSuKien(): Promise<void> {
        await this.suKienMenu.click();
    }
    async goToThongTin(): Promise<void> {
        await this.thongTinMenu.click();
    }
    async goToProfile(): Promise<void> {
        await this.userMenu.click();
    }
    //open logout button
    async openUserMenu(): Promise<void> {
        await this.userMenu.hover();
    }
    async logout(): Promise<void> {
        await this.openUserMenu();
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
  }
    //search function
    async search(keyword: string): Promise<void> {
        await this.searchInput.fill(keyword);
        await this.searchInput.press('Enter');

    }
    //click logo to go to home page
    async logoClick(): Promise<void> {
        await this.textLogoMenu.click();        
  }

}
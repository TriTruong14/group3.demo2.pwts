import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class BlogPage extends BasePage {
    // readonly page; // không cần khai báo kiểu Page vì đã kế thừa từ BasePage
    readonly blogTitle;

    constructor(page: Page) {
        super(page); // Gọi constructor của lớp cha
        this.blogTitle = page.locator("(//h3[normalize-space()='Blog'])[1]"); // Sử dụng selector chính xác cho tiêu đề blog
    }
    async gotoPage() {
        const url = process.env.BLOG_URL;
        if (!url) throw new Error('Missing BLOG_URL in .env');

        await this.navigateTo(url); // Sử dụng phương thức navigateTo từ BasePage 
        await this.blogTitle.waitFor({ state: "visible", timeout: 10000 }); // Đợi tiêu đề blog hiển thị

        // console.log(">> Navigating to:", url); // In ra URL để kiểm tra
        // await this.page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 }); // Sử dụng URL từ biến môi trường
        // await this.blogTitle.waitFor({ state: "visible", timeout: 10000 }); // Đợi tiêu đề blog hiển thị

        // await this.page.goto(process.env.BLOG_URL || ""); // Viết như này thì bị lỗi undefined
        // await this.page.goto("https://demo2.cybersoft.edu.vn/blog"); // như này cũng bị underfined BLOG_URL
    
    }
}
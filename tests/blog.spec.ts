import { test, expect } from "@playwright/test";
import { BlogPage } from "../pages/blogPage";

test.describe("Blog Function", () => {

let blogPage: BlogPage;

  test.beforeEach(async ({ page }) => {
    blogPage = new BlogPage(page);
    await blogPage.gotoPage();
});

    test("EP3-TC-01: Verify blog page title", async ({ page }) => {
        
        // await expect(blogPage.blogTitle).toHaveText("Blog");

        // await expect(page).toHaveURL(/\/blog/);// Cách này cũng được
        // const blogTitle = await blogPage.blogTitle.isVisible(); // >> OK
        expect(page.url()).toContain('/blog');// >> OK
    });

})
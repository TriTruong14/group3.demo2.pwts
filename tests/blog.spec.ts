import { test, expect } from "@playwright/test";
import { BlogPage } from "../pages/blogPage";

test.describe("Blog Function", () => {

let blogPage: BlogPage;

  test.beforeEach(async ({ page }) => {
    blogPage = new BlogPage(page);
    await blogPage.gotoPage();
});

    test("Check blog page title", async ({ page }) => {
        await expect(blogPage.blogTitle).toHaveText("Blog");

        // await expect(page).toHaveURL(/\/blog/);// Cách này cũng được

        // const blogTitle = await blogPage.blogTitle.isVisible(); // >> OK

        // expect(page.url()).toContain('/blog');// >> OK
    });

    // test('TC_Home_04: Verify navigation to Blog section', async ({ page }) => {
    //     await blogPage.gotoPage();
    //     // Verify that the Blog section is displayed
    //     expect(page.url()).toContain('/blog');
    // });

})
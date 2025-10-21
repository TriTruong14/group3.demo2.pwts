import { test, expect } from '@playwright/test';

//test.describe: tạo ra 1 group các test 
test.describe("Test trang hiển thị",()=>{

//chứa các test cases ở đây

  test('Check hiển thị trang Lập trình Backend', async ({ page }) => {
    await page.goto('https://demo2.cybersoft.edu.vn/danhmuckhoahoc/BackEnd', 
      { waitUntil: 'domcontentloaded' });

    // 1. Kiểm tra text tiêu đề (dùng locator chứa phần text)
    const heading = page.locator('h3', { hasText: 'Khóa học theo danh mục' }).first();
    await expect(heading).toHaveText('Khóa học theo danh mục');

    const paragraph = page.locator('p', { hasText: 'Hãy chọn khóa học mong muốn' });
    await expect(paragraph).toBeVisible();
    await expect(paragraph).toContainText('Hãy chọn khóa học mong muốn !!!');

    // 2. Kiểm tra button phân loại
    const filterTag = page.locator('span.listCourseTitle');
    await expect(filterTag).toHaveText('Lập trình Backend');

    // 3. Kiểm tra danh sách khóa học

    const nodeImage = page.locator('img[src="https://canhme.com/wp-content/uploads/2018/09/Nodejs.png"]').first();
    await expect(nodeImage).toBeVisible();

    // Đợi ảnh load
    await page.evaluate(() => {
      return Promise.all(
        Array.from(document.images)
          .filter(img => !img.complete)
          .map(img => new Promise(resolve => {
            img.onload = img.onerror = resolve;
          }))
      );
    });

    // Chụp ảnh
    await page.screenshot({ path: 'backend-page.png', fullPage: true });
  });
});

  test('Check hiển thị trang Thiết kế Web', async ({ page }) => {
    await page.goto('https://demo2.cybersoft.edu.vn/danhmuckhoahoc/Design', 
      { waitUntil: 'domcontentloaded' });

    // 1. Kiểm tra text tiêu đề (dùng locator chứa phần text)
    const heading = page.locator('h3', { hasText: 'Khóa học theo danh mục' }).first();
    await expect(heading).toHaveText('Khóa học theo danh mục');

    const paragraph = page.locator('p', { hasText: 'Hãy chọn khóa học mong muốn' });
    await expect(paragraph).toBeVisible();
    await expect(paragraph).toContainText('Hãy chọn khóa học mong muốn !!!');

    // 2. Kiểm tra button phân loại
    const filterTag = page.locator('span.listCourseTitle');
    await expect(filterTag).toHaveText('Thiết kế Web');

    // 3. Kiểm tra danh sách khóa học

    const nodeImage = page.locator('img[src="https://canhme.com/wp-content/uploads/2018/09/Nodejs.png"]').first();
    await expect(nodeImage).toBeVisible();

    // Đợi ảnh load
    await page.evaluate(() => {
      return Promise.all(
        Array.from(document.images)
          .filter(img => !img.complete)
          .map(img => new Promise(resolve => {
            img.onload = img.onerror = resolve;
          }))
      );
    });

    // Chụp ảnh
    await page.screenshot({ path: 'design-page.png', fullPage: true });
  });

  test('Check hiển thị trang Lập trình di động', async ({ page }) => {
    await page.goto('https://demo2.cybersoft.edu.vn/danhmuckhoahoc/DiDong', 
      { waitUntil: 'domcontentloaded' });

    // 1. Kiểm tra text tiêu đề (dùng locator chứa phần text)
    const heading = page.locator('h3', { hasText: 'Khóa học theo danh mục' }).first();
    await expect(heading).toHaveText('Khóa học theo danh mục');

    const paragraph = page.locator('p', { hasText: 'Hãy chọn khóa học mong muốn' });
    await expect(paragraph).toBeVisible();
    await expect(paragraph).toContainText('Hãy chọn khóa học mong muốn !!!');

    // 2. Kiểm tra button phân loại
    const filterTag = page.locator('span.listCourseTitle');
    await expect(filterTag).toHaveText('Lập trình di động');

    // 3. Kiểm tra danh sách khóa học

    const nodeImage = page.locator('img[src="https://canhme.com/wp-content/uploads/2018/09/Nodejs.png"]').first();
    await expect(nodeImage).toBeVisible();

    // Đợi ảnh load
    await page.evaluate(() => {
      return Promise.all(
        Array.from(document.images)
          .filter(img => !img.complete)
          .map(img => new Promise(resolve => {
            img.onload = img.onerror = resolve;
          }))
      );
    });

    // Chụp ảnh
    await page.screenshot({ path: 'didong-page.png', fullPage: true });
  });

  test('Check hiển thị trang Lập trình Frontend', async ({ page }) => {
    await page.goto('https://demo2.cybersoft.edu.vn/danhmuckhoahoc/FrontEnd', 
      { waitUntil: 'domcontentloaded' });

    // 1. Kiểm tra text tiêu đề (dùng locator chứa phần text)
    const heading = page.locator('h3', { hasText: 'Khóa học theo danh mục' }).first();
    await expect(heading).toHaveText('Khóa học theo danh mục');

    const paragraph = page.locator('p', { hasText: 'Hãy chọn khóa học mong muốn' });
    await expect(paragraph).toBeVisible();
    await expect(paragraph).toContainText('Hãy chọn khóa học mong muốn !!!');

    // 2. Kiểm tra button phân loại
    const filterTag = page.locator('span.listCourseTitle');
    await expect(filterTag).toHaveText('Lập trình Front end');

    // 3. Kiểm tra danh sách khóa học

    const nodeImage = page.locator('img[src="https://canhme.com/wp-content/uploads/2018/09/Nodejs.png"]').first();
    await expect(nodeImage).toBeVisible();

    // Đợi ảnh load
    await page.evaluate(() => {
      return Promise.all(
        Array.from(document.images)
          .filter(img => !img.complete)
          .map(img => new Promise(resolve => {
            img.onload = img.onerror = resolve;
          }))
      );
    });

    // Chụp ảnh
    await page.screenshot({ path: 'frontend-page.png', fullPage: true });
  });

  test('Check hiển thị trang Lập trình Fullstack', async ({ page }) => {
    await page.goto('https://demo2.cybersoft.edu.vn/danhmuckhoahoc/FullStack', 
      { waitUntil: 'domcontentloaded' });

    // 1. Kiểm tra text tiêu đề (dùng locator chứa phần text)
    const heading = page.locator('h3', { hasText: 'Khóa học theo danh mục' }).first();
    await expect(heading).toHaveText('Khóa học theo danh mục');

    const paragraph = page.locator('p', { hasText: 'Hãy chọn khóa học mong muốn' });
    await expect(paragraph).toBeVisible();
    await expect(paragraph).toContainText('Hãy chọn khóa học mong muốn !!!');

    // 2. Kiểm tra button phân loại
    const filterTag = page.locator('span.listCourseTitle');
    await expect(filterTag).toHaveText('Lập trình Full Stack');

    // 3. Kiểm tra danh sách khóa học

    const nodeImage = page.locator('img[src="https://canhme.com/wp-content/uploads/2018/09/Nodejs.png"]').first();
    await expect(nodeImage).toBeVisible();

    // Đợi ảnh load
    await page.evaluate(() => {
      return Promise.all(
        Array.from(document.images)
          .filter(img => !img.complete)
          .map(img => new Promise(resolve => {
            img.onload = img.onerror = resolve;
          }))
      );
    });

    // Chụp ảnh
    await page.screenshot({ path: 'fullstack-page.png', fullPage: true });
  });

  test('Check hiển thị trang Tư duy lập trình', async ({ page }) => {
    await page.goto('https://demo2.cybersoft.edu.vn/danhmuckhoahoc/TuDuy', 
      { waitUntil: 'domcontentloaded' });

    // 1. Kiểm tra text tiêu đề (dùng locator chứa phần text)
    const heading = page.locator('h3', { hasText: 'Khóa học theo danh mục' }).first();
    await expect(heading).toHaveText('Khóa học theo danh mục');

    const paragraph = page.locator('p', { hasText: 'Hãy chọn khóa học mong muốn' });
    await expect(paragraph).toBeVisible();
    await expect(paragraph).toContainText('Hãy chọn khóa học mong muốn !!!');

    // 2. Kiểm tra button phân loại
    const filterTag = page.locator('span.listCourseTitle');
    await expect(filterTag).toHaveText('Tư duy lập trình');

    // 3. Kiểm tra danh sách khóa học

    const nodeImage = page.locator('img[src="https://canhme.com/wp-content/uploads/2018/09/Nodejs.png"]').first();
    await expect(nodeImage).toBeVisible();

    // Đợi ảnh load
    await page.evaluate(() => {
      return Promise.all(
        Array.from(document.images)
          .filter(img => !img.complete)
          .map(img => new Promise(resolve => {
            img.onload = img.onerror = resolve;
          }))
      );
    });

    // Chụp ảnh
    await page.screenshot({ path: 'tuduy-page.png', fullPage: true });
  });

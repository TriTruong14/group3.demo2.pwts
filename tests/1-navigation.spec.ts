import { test, expect } from '@playwright/test';

const BASE_URL = 'https://demo2.cybersoft.edu.vn/';

//test.describe: tạo ra 1 group các test 
test.describe("Test access Danh mục",()=>{

//chứa các test cases ở đây

test('Vào trang Backend thành công từ Navigation bar', async ({ page }) => {
  // Truy cập trang chính
  await page.goto(BASE_URL, {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  });

  // Hover vào menu "Danh mục"
  const menuDanhMuc = page.locator('li.courseCate').filter({ hasText: 'Danh mục' });
  await menuDanhMuc.hover();

  // Click vào mục "Lập trình Backend"
  const backendLink = menuDanhMuc.locator('a', { hasText: 'Lập trình Backend' });

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    backendLink.click()
  ]);
  // Đợi toàn bộ ảnh hiển thị (tuỳ chọn nâng cao)
    await page.evaluate(() => {
      return Promise.all(
        Array.from(document.images)
          .filter(img => !img.complete)
          .map(img =>
            new Promise(resolve => {
              img.onload = img.onerror = resolve;
            })
          )
      );
    });
 await page.screenshot({ path: 'backend1.png' });  // chụp ảnh thủ công
  // Kiểm tra URL
  await expect(page).toHaveURL(/BackEnd/i, { timeout: 20000 });

})

test('Vào trang Thiết kế Web thành công từ Navigation bar', async ({ page }) => {
  // Truy cập trang chính
  await page.goto(BASE_URL, {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  });

  // Hover vào menu "Danh mục"
  const menuDanhMuc = page.locator('li.courseCate').filter({ hasText: 'Danh mục' });
  await menuDanhMuc.hover();

  // Click vào mục "Thiết kế Web"
  const backendLink = menuDanhMuc.locator('a', { hasText: 'Thiết kế Web' });

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    backendLink.click()
  ]);
  // Đợi toàn bộ ảnh hiển thị (tuỳ chọn nâng cao)
    await page.evaluate(() => {
      return Promise.all(
        Array.from(document.images)
          .filter(img => !img.complete)
          .map(img =>
            new Promise(resolve => {
              img.onload = img.onerror = resolve;
            })
          )
      );
    });
 await page.waitForTimeout(2000);
 await page.screenshot({ path: 'design1.png' });  // chụp ảnh thủ công
  // Kiểm tra URL
  await expect(page).toHaveURL(/Design/i, { timeout: 20000 });

})
});

test('Vào trang Lập trình di động thành công từ Navigation bar', async ({ page }) => {
  // Truy cập trang chính
  await page.goto(BASE_URL, {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  });

  // Hover vào menu "Danh mục"
  const menuDanhMuc = page.locator('li.courseCate').filter({ hasText: 'Danh mục' });
  await menuDanhMuc.hover();

  // Click vào mục "Lập trình di động"
  const backendLink = menuDanhMuc.locator('a', { hasText: 'Lập trình di động' });

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    backendLink.click()
  ]);
  // Đợi toàn bộ ảnh hiển thị (tuỳ chọn nâng cao)
    await page.evaluate(() => {
      return Promise.all(
        Array.from(document.images)
          .filter(img => !img.complete)
          .map(img =>
            new Promise(resolve => {
              img.onload = img.onerror = resolve;
            })
          )
      );
    });
 await page.waitForTimeout(2000);
 await page.screenshot({ path: 'didong1.png' });  // chụp ảnh thủ công
  // Kiểm tra URL
  await expect(page).toHaveURL(/DiDong/i, { timeout: 20000 });

})

test('Vào trang Lập trình Front end thành công từ Navigation bar', async ({ page }) => {
  // Truy cập trang chính
  await page.goto(BASE_URL, {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  });

  // Hover vào menu "Danh mục"
  const menuDanhMuc = page.locator('li.courseCate').filter({ hasText: 'Danh mục' });
  await menuDanhMuc.hover();

  // Click vào mục "Lập trình Front end"
  const backendLink = menuDanhMuc.locator('a', { hasText: 'Lập trình Front end' });

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    backendLink.click()
  ]);
  // Đợi toàn bộ ảnh hiển thị (tuỳ chọn nâng cao)
    await page.evaluate(() => {
      return Promise.all(
        Array.from(document.images)
          .filter(img => !img.complete)
          .map(img =>
            new Promise(resolve => {
              img.onload = img.onerror = resolve;
            })
          )
      );
    });
 await page.waitForTimeout(2000);
 await page.screenshot({ path: 'frontend1.png' });  // chụp ảnh thủ công
  // Kiểm tra URL
  await expect(page).toHaveURL(/FrontEnd/i, { timeout: 20000 });

})

test('Vào trang Lập trình Full Stack thành công từ Navigation bar', async ({ page }) => {
  // Truy cập trang chính
  await page.goto(BASE_URL, {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  });

  // Hover vào menu "Danh mục"
  const menuDanhMuc = page.locator('li.courseCate').filter({ hasText: 'Danh mục' });
  await menuDanhMuc.hover();

  // Click vào mục "Lập trình Full Stack"
  const backendLink = menuDanhMuc.locator('a', { hasText: 'Lập trình Full Stack' });

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    backendLink.click()
  ]);
  // Đợi toàn bộ ảnh hiển thị (tuỳ chọn nâng cao)
    await page.evaluate(() => {
      return Promise.all(
        Array.from(document.images)
          .filter(img => !img.complete)
          .map(img =>
            new Promise(resolve => {
              img.onload = img.onerror = resolve;
            })
          )
      );
    });
 await page.waitForTimeout(2000);
 await page.screenshot({ path: 'fullstack1.png' });  // chụp ảnh thủ công
  // Kiểm tra URL
  await expect(page).toHaveURL(/FullStack/i, { timeout: 20000 });

})

test('Vào trang Tư duy lập trình thành công từ Navigation bar', async ({ page }) => {
  // Truy cập trang chính
  await page.goto(BASE_URL, {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  });

  // Hover vào menu "Danh mục"
  const menuDanhMuc = page.locator('li.courseCate').filter({ hasText: 'Danh mục' });
  await menuDanhMuc.hover();

  // Click vào mục "Tư duy lập trình"
  const backendLink = menuDanhMuc.locator('a', { hasText: 'Tư duy lập trình' });

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    backendLink.click()
  ]);
  // Đợi toàn bộ ảnh hiển thị (tuỳ chọn nâng cao)
    await page.evaluate(() => {
      return Promise.all(
        Array.from(document.images)
          .filter(img => !img.complete)
          .map(img =>
            new Promise(resolve => {
              img.onload = img.onerror = resolve;
            })
          )
      );
    });
 await page.waitForTimeout(2000);
 await page.screenshot({ path: 'tuduy1.png' });  // chụp ảnh thủ công
  // Kiểm tra URL
  await expect(page).toHaveURL(/TuDuy/i, { timeout: 20000 });

})

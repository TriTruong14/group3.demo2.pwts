import { test, expect } from '@playwright/test';

//test.describe: tạo ra 1 group các test 
test.describe("Test access bằng URL",()=>{

//chứa các test cases ở đây

test('Vào trang Backend thành công khi điền URL', async ({ page }) => {
  // Truy cập trang Backend
  await page.goto('https://demo2.cybersoft.edu.vn/danhmuckhoahoc/BackEnd', {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  });

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
 await page.screenshot({ path: 'backend2.png' });  // chụp ảnh thủ công
  // Kiểm tra URL
  await expect(page).toHaveURL(/BackEnd/i, { timeout: 20000 });

})

test('Vào trang Thiết kế Web thành công khi điền URL', async ({ page }) => {
  // Truy cập trang chính
  await page.goto('https://demo2.cybersoft.edu.vn/danhmuckhoahoc/Design', {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  });

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
 await page.screenshot({ path: 'design2.png' });  // chụp ảnh thủ công
  // Kiểm tra URL
  await expect(page).toHaveURL(/Design/i, { timeout: 20000 });

})
});

test('Vào trang Lập trình di động thành công khi điền URL', async ({ page }) => {
  // Truy cập trang chính
  await page.goto('https://demo2.cybersoft.edu.vn/danhmuckhoahoc/DiDong', {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  });

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
 await page.screenshot({ path: 'didong2.png' });  // chụp ảnh thủ công
  // Kiểm tra URL
  await expect(page).toHaveURL(/DiDong/i, { timeout: 20000 });

})

test('Vào trang Lập trình Front end thành công khi điền URL', async ({ page }) => {
  // Truy cập trang chính
  await page.goto('https://demo2.cybersoft.edu.vn/danhmuckhoahoc/FrontEnd', {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  });

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
 await page.screenshot({ path: 'frontend2.png' });  // chụp ảnh thủ công
  // Kiểm tra URL
  await expect(page).toHaveURL(/FrontEnd/i, { timeout: 20000 });

})

test('Vào trang Lập trình Full Stack thành công khi điền URL', async ({ page }) => {
  // Truy cập trang chính
  await page.goto('https://demo2.cybersoft.edu.vn/danhmuckhoahoc/FullStack', {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  });

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
 await page.screenshot({ path: 'fullstack2.png' });  // chụp ảnh thủ công
  // Kiểm tra URL
  await expect(page).toHaveURL(/FullStack/i, { timeout: 20000 });

})

test('Vào trang Tư duy lập trình thành công khi điền URL', async ({ page }) => {
  // Truy cập trang chính
  await page.goto('https://demo2.cybersoft.edu.vn/danhmuckhoahoc/TuDuy', {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  });

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
 await page.screenshot({ path: 'tuduy2.png' });  // chụp ảnh thủ công
  // Kiểm tra URL
  await expect(page).toHaveURL(/TuDuy/i, { timeout: 20000 });

})

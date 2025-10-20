import { test, expect } from '@playwright/test';

//test.describe: tạo ra 1 group các test 
test.describe("Test trang Chi tiết khóa học",()=>{

//chứa các test cases ở đây

test('Vào trang chi tiết thành công từ trang Backend', async ({ page }) => {
  // Truy cập trang chính
  await page.goto('https://demo2.cybersoft.edu.vn/danhmuckhoahoc/BackEnd', {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  });

  // Hover vào menu "Danh mục"

  const modalchitiet = page.locator('div.subCard').filter({ hasText: 'BOOTCAMP - LẬP TRÌNH FULL STACK' }).first();

console.log('Count:', await modalchitiet.count());
console.log('Visible:', await modalchitiet.isVisible());

if (!(await modalchitiet.isVisible())) {
  console.warn('Phần tử không visible, thử scroll vào view');
  await modalchitiet.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
}

try {
  await modalchitiet.hover();
} catch (e) {
  console.warn('Hover không thành công, thử hover force');
  await modalchitiet.hover({ force: true });
}

// Click link "Xem chi tiết"
const chitietlink = modalchitiet.locator('a', { hasText: 'Xem chi tiết' });
if (await chitietlink.count() > 0) {
  await Promise.all([
    page.waitForNavigation(),
    chitietlink.click(),
  ]);
  console.log('Đã mở trang chi tiết:', page.url());
} else {
  console.warn('Không tìm thấy link Xem chi tiết trong subCard');
}

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    chitietlink.click()
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
 await page.screenshot({ path: 'detail-page.png' });  // chụp ảnh thủ công
  // Kiểm tra URL
  await expect(page).toHaveURL(/chitiet/i, { timeout: 20000 });

})
})
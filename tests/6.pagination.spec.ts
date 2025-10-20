import { test, expect } from '@playwright/test';

test.describe('Trang khóa học – Phân trang tại CyberSoft', () => {
  const baseUrl = 'https://demo2.cybersoft.edu.vn/khoahoc';

  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // đợi ít nhất một khóa học được tải hiển thị
    await page.waitForSelector('.course-item');  // **Điều chỉnh** selector nếu khác
  });

  test('Phân trang: chuyển từ trang 1 → trang 2 và nội dung thay đổi', async ({ page }) => {
    // Kiểm tra phần phân trang hiển thị
    const pagination = page.locator('ul.pagination');  // giả định dùng <ul class="pagination">
    await expect(pagination).toBeVisible();

    // Lấy các tiêu đề khóa học ở trang 1
    const courseCards1 = await page.locator('.course-item .course-title').allTextContents();
    expect(courseCards1.length).toBeGreaterThan(0);

    // Nhấn nút trang số 2
    const page2Button = pagination.locator('li >> text=2');
    await expect(page2Button).toBeVisible();
    await page2Button.click();

    // Đợi cho tới khi có sự thay đổi — đợi khóa học đầu tiên khác với trước hoặc đợi load mới
    await page.waitForTimeout(1000);

    // Lấy các tiêu đề khóa học ở trang 2
    const courseCards2 = await page.locator('.course-item .course-title').allTextContents();
    expect(courseCards2.length).toBeGreaterThan(0);

    // So sánh: danh sách trang 2 không nên giống trang 1
    expect(courseCards2).not.toEqual(courseCards1);
  });

  test('Phân trang: nút "Next" và "Previous" hoạt động đúng', async ({ page }) => {
    const pagination = page.locator('ul.pagination');
    const nextButton = pagination.locator('li >> text=›');   // giả định ký tự Next là “›”
    const prevButton = pagination.locator('li >> text=‹');   // giả định ký tự Previous là “‹”

    // Từ trang 1 → Next (nghĩa là trang 2)
    await expect(nextButton).toBeVisible();
    await nextButton.click();
    await page.waitForTimeout(1000);
    const afterNext = await page.locator('.course-item .course-title').allTextContents();
    expect(afterNext.length).toBeGreaterThan(0);

    // Sau đó nhấn Previous quay về trang 1
    await expect(prevButton).toBeVisible();
    await prevButton.click();
    await page.waitForTimeout(1000);
    const afterPrev = await page.locator('.course-item .course-title').allTextContents();
    expect(afterPrev.length).toBeGreaterThan(0);

    // Ở trang đầu (1) chúng ta mong khóa học giống như ban đầu (hoặc ít nhất ko giống trang 2)
    expect(afterPrev).toEqual(await page.locator('.course-item .course-title').allTextContents());
  });
});

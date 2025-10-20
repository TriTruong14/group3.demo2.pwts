import { test, expect } from '@playwright/test';

test.describe('Trang khóa học – Phân trang tại CyberSoft', () => {

  test('Kiểm tra đang ở trang 2', async ({ page }) => {
  await page.goto('https://demo2.cybersoft.edu.vn/khoahoc');

  // Click vào trang 2
  await page.locator('a.pageLinkPages[aria-label="Page 2"]').click();

  // Kiểm tra đã chuyển sang trang 2
  const currentPage2 = page.locator('a.pageLinkPages[aria-current="page"][aria-label*="Page 2"]');
  await expect(currentPage2).toBeVisible();
});})

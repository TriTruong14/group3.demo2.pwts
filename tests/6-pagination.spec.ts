import { test, expect } from '@playwright/test';

test.describe('Trang khóa học – Phân trang tại CyberSoft', () => {

  test('Kiểm tra click trang 2', async ({ page }) => {
  await page.goto('https://demo2.cybersoft.edu.vn/khoahoc');

  // Click vào trang 2
  await page.locator('a.pageLinkPages[aria-label="Page 2"]').click();

  // Kiểm tra đã chuyển sang trang 2
  const currentPage2 = page.locator('a.pageLinkPages[aria-current="page"][aria-label*="Page 2"]');
  await expect(currentPage2).toBeVisible();
});

  test('Kiểm tra click Next button', async ({ page }) => {
  await page.goto('https://demo2.cybersoft.edu.vn/khoahoc');

  // Click nút Next page
  const nextButton = page.locator('a.pageLinkPages[aria-label="Next page"]');
  await expect(nextButton).toBeVisible();
  await nextButton.click();

  // Kiểm tra đã chuyển sang trang 2
  const currentPage2 = page.locator('a.pageLinkPages[aria-current="page"][aria-label*="Page 2"]');
  await expect(currentPage2).toBeVisible();
});

test('Kiểm tra click Previous button', async ({ page }) => {
  await page.goto('https://demo2.cybersoft.edu.vn/khoahoc');

// Click vào trang 3
  await page.locator('a.pageLinkPages[aria-label="Page 3"]').click();

  // Click nút Previous page
  const previousButton = page.locator('a.pageLinkPages[aria-label="Previous page"]');
  await expect(previousButton).toBeVisible();
  await previousButton.click();

  // Kiểm tra đã chuyển về trang 2
  const currentPage2 = page.locator('a.pageLinkPages[aria-current="page"][aria-label*="Page 2"]');
  await expect(currentPage2).toBeVisible();
});})

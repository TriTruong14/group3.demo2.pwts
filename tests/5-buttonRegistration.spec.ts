import { test, expect } from '@playwright/test';

const COURSE_URL = 'https://demo2.cybersoft.edu.vn/chitiet/100999999';
const LOGIN_URL = 'https://demo2.cybersoft.edu.vn/login';

test.describe('Kiểm tra nút Đăng ký khóa học', () => {

  test('1. Nếu chưa login → chuyển hướng trang login', async ({ page }) => {
    await page.goto(COURSE_URL);

    // Kiểm tra nút "Đăng nhập" có tồn tại
    const loginButton = page.getByRole('button', { name: 'Đăng nhập' });

    // Nếu có nút "Đăng nhập" => chưa login
    await expect(loginButton).toBeVisible();

    // Click đăng ký
    const registerButton = page.getByRole('button', { name: 'Đăng ký' });
    await registerButton.click();

    // Điều hướng sang trang login
    await expect(page).toHaveURL(/\/login/);
  });
})
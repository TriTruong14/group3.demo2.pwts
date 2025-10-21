import { test, expect } from '@playwright/test';

const BASE_URL = "https://demo2.cybersoft.edu.vn/"

//test.describe: tạo ra 1 group các test 
test.describe("Test function Navigation",()=>{

//chứa các test cases ở đây
  
test('Vào trang Backend thành công', async ({ page }) => {
  
  // 1. Đi đến trang login
  //await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.goto(BASE_URL), {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  };

  // 2. Hover vào menu "Danh mục" (li có class courseCate)
  const menuDanhMuc = page.locator('li.courseCate');
  await menuDanhMuc.hover();

  // 3. Click vào item "Backend" trong menu (giả sử là <a> chứa text "Backend")
  const backendLink = menuDanhMuc.locator('a', { hasText: 'Lập trình Backend' });
  await backendLink.click();
})
})

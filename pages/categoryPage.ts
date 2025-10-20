import { Page, Locator, expect } from '@playwright/test';

export class CategoryPage { 
    readonly page: Page;
    readonly danhMucMenu: Locator;
    readonly laptrinhBackendSection: Locator;
    readonly thietkeWebSection: Locator;
    readonly laptrinhDiDongSection: Locator;
    readonly laptrinhFrontEndSection: Locator;
    readonly laptrinhFullStackSection: Locator;
    readonly tuduylaptrinhSection: Locator;

    constructor(page: Page) {
        this.page = page;
        this.danhMucMenu = page.locator("//a[contains(text(),'Danh mục')]").first();

        // 'section:has(h2:has-text("Lập trình Backend"))'
        this.laptrinhBackendSection = page.locator("//ul[@class='courseCateList']//a[contains(text(),'Lập trình Backend')]");
        this.thietkeWebSection = page.locator("//ul[@class='courseCateList']//a[contains(text(),'Thiết kế Web')]");
        this.laptrinhDiDongSection = page.locator("//ul[@class='courseCateList']//a[contains(text(),'Lập trình di động')]");
        this.laptrinhFrontEndSection = page.locator("//ul[@class='courseCateList']//a[contains(text(),'Lập trình Front end')]");
        this.laptrinhFullStackSection = page.locator("//ul[@class='courseCateList']//a[contains(text(),'Lập trình Full Stack')]");
        this.tuduylaptrinhSection = page.locator("//ul[@class='courseCateList']//a[contains(text(),'Tư duy lập trình')]");
  }

   async openDanhMucMenu(): Promise<void> {
    await expect(this.danhMucMenu).toBeVisible({ timeout: 5000 });
    await this.danhMucMenu.click();
    await this.page.waitForSelector("//ul[@class='courseCateList']", { state: 'visible', timeout: 5000 });
  }

  // ====== Hàm chọn category cụ thể ======
  async selectBackendCategory(): Promise<void> {
    await this.openDanhMucMenu();
    await expect(this.laptrinhBackendSection).toBeVisible({ timeout: 5000 });
    await this.laptrinhBackendSection.click();
  }

  async selectWebDesignCategory(): Promise<void> {
    await expect(this.thietkeWebSection).toBeVisible();
    await this.thietkeWebSection.scrollIntoViewIfNeeded();
  }

  async selectMobileDevelopmentCategory(): Promise<void> {
    await expect(this.laptrinhDiDongSection).toBeVisible();
    await this.laptrinhDiDongSection.scrollIntoViewIfNeeded();
  }

  async selectFrontendCategory(): Promise<void> {
    await expect(this.laptrinhFrontEndSection).toBeVisible();
    await this.laptrinhFrontEndSection.scrollIntoViewIfNeeded();
  }

  async selectFullstackCategory(): Promise<void> {
    await expect(this.laptrinhFullStackSection).toBeVisible();
    await this.laptrinhFullStackSection.scrollIntoViewIfNeeded();
  }

  async selectProgrammingThinkingCategory(): Promise<void> {
    await expect(this.tuduylaptrinhSection).toBeVisible();
    await this.tuduylaptrinhSection.scrollIntoViewIfNeeded();
  }

  // 👉 Chọn ngẫu nhiên 1 khóa học trong danh mục backend
  async clickRandomCourseIn(): Promise<void> {
    const courseCards = this.page.locator('.course-card, .cardGlobal');
    const count = await courseCards.count();
    // if (count === 0) {
    //   throw new Error('❌ Không có khoá học nào trong danh mục Backend!');
    // }
    const randomIndex = Math.floor(Math.random() * count);
    const selectedCourse = courseCards.nth(randomIndex);
    const courseName = await selectedCourse.textContent();
    console.log(`🎯 Chọn ngẫu nhiên khoá học: ${courseName?.trim()}`);
    await selectedCourse.click();
  }

  // 👉 Verify đã đi đến trang chi tiết khóa học
  async verifyNavigatedToCourseDetail(): Promise<void> {
    await expect(this.page).toHaveURL(/chitiet/);
  }

  async clickDangKyButton(): Promise<void> {
  const dangKyButton = this.page.locator('button.btnGlobal.btnPreview').first();

  await expect(dangKyButton).toBeVisible({ timeout: 5000 });
  await dangKyButton.scrollIntoViewIfNeeded();
  await dangKyButton.click();

  console.log('✅ Click nút ĐĂNG KÝ thành công!');
}

}
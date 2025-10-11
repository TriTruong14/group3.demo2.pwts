import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    console.log(`🌐 Navigating to: ${url}`);
    await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  }
}
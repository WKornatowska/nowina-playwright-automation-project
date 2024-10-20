import { Locator, Page } from "@playwright/test";

export class ErrorPage {
  readonly page: Page;
  readonly errorMessage: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.errorMessage = page.getByRole("alert").locator("i");
  }

  async getErrorMessageByText(errorMessageText: string) {
    return this.page.getByText(errorMessageText);
  }
}

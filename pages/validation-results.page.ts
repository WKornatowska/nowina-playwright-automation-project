import { Locator, Page } from "@playwright/test";

export class ValidationResultsPage {
  readonly page: Page;
  readonly simpleReportTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.simpleReportTab = page.getByRole("tab", { name: "Simple Report" });
  }

  async openSimpleReport() {
    await this.simpleReportTab.click();
  }

  async getSignatureElement(signatureText: string) {
    return this.page.locator("#simple-report").getByText(signatureText);
  }

  async getSignatureDetailsElement(
    elementText: string,
    options?: { exact?: boolean }
  ) {
    return this.page.getByText(elementText, options);
  }
}

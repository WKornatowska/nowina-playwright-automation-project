import { Locator, Page } from "@playwright/test";
import path from "path";

export class ValidationPage {
  readonly page: Page;
  readonly uploadSignedFileButton: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uploadSignedFileButton = page.getByLabel("Signed file");
    this.submitButton = page.getByRole("button", { name: "Submit" });
  }

  async open() {
    await this.page.goto("/validation");
  }

  async uploadSignedFile(filePath: string) {
    await this.uploadSignedFileButton.click();
    await this.uploadSignedFileButton.setInputFiles(
      path.join(__dirname, filePath)
    );
  }

  async submitFile() {
    await this.submitButton.click();
  }
}

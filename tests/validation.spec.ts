import { test, expect } from "@playwright/test";
import { ValidationPage } from "../pages/validation.page";
import { ValidationResultsPage } from "../pages/validation-results.page";
import { ErrorPage } from "../pages/error.page";

test.describe("Signed documents validation", () => {
  let validationPage: ValidationPage,
    validationResultsPage: ValidationResultsPage,
    errorPage: ErrorPage;

  test.beforeEach(async ({ page }) => {
    validationPage = new ValidationPage(page);
    validationPage.open();
  });

  test("Test 1: Validation of a signed document", async ({ page }) => {
    validationResultsPage = new ValidationResultsPage(page);

    await validationPage.uploadSignedFile(
      "../test-data/test-valid-signature-signed-LTA.pdf"
    );
    await validationPage.submitFile();

    await expect(validationResultsPage.simpleReportTab).toBeVisible();
    await validationResultsPage.openSimpleReport();

    // Report should display: qualification, signature, and certificate details, document timestamp information
    await expect
      .soft(
        await validationResultsPage.getSignatureElement(
          "Signature SIGNATURE_Noé-"
        )
      )
      .toBeVisible();
    await expect
      .soft(
        await validationResultsPage.getSignatureDetailsElement(
          "Qualification: QESig"
        )
      )
      .toBeVisible();
    await expect
      .soft(
        await validationResultsPage.getSignatureDetailsElement(
          "Certificate Chain: Noé"
        )
      )
      .toBeVisible();
    await expect
      .soft(
        await validationResultsPage.getSignatureDetailsElement("Citizen CA", {
          exact: true,
        })
      )
      .toBeVisible();
    await expect
      .soft(
        await validationResultsPage.getSignatureDetailsElement(
          "Belgium Root CA4",
          {
            exact: true,
          }
        )
      )
      .toBeVisible();
    await expect
      .soft(
        await validationResultsPage.getSignatureDetailsElement(
          "Noé Colbach (Signature)",
          {
            exact: true,
          }
        )
      )
      .toBeVisible();

    await expect
      .soft(
        await validationResultsPage.getSignatureDetailsElement("Timestamps 2")
      )
      .toBeVisible();
  });

  test("Test 2: It should not be possible to validate an invalid file type", async ({
    page,
  }) => {
    errorPage = new ErrorPage(page);
    await validationPage.uploadSignedFile("../test-data/testPNG.png");
    await validationPage.submitFile();

    //An error message should notify the user that the document format is not recognised.
    await expect(errorPage.errorMessage).toBeVisible();
    expect(
      await errorPage.getErrorMessageByText(
        "Oops... An error occurred! Document format not recognized/handled"
      )
    ).toBeVisible();
  });
});

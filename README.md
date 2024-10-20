# nowina-playwright-automation-project
This is a small test automation project that includes two test cases for validating signed documents

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Reporting](#reporting)

## Overview
This test automation project is built to cover two test cases using Playwright, a robust framework for test automation. I chose Playwright because it works well with different browsers and can handle modern web applications. The project is set up to be easy to maintain and grow, making it simple to add or change tests in the future.

The design separates test data, page objects, and configuration files to keep everything organized. Only the page elements needed for the two test cases are included in the page object files, keeping the project simple and focused on the required tests.

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/en)
- [NPM] Node Package Manager 


## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/WKornatowska/nowina-playwright-automation-project.git
   cd nowina-playwright-automation-project
   ```
2. Install dependencies
    ```bash
    npm install
    ```
3. Install playwright browsers
    ```bash
    npx playwright install 
    ```

## Project structure

```plaintext
nowina-playwright-automation-project/
├── node_modules/                               # Automatically generated directory for installed packages
├── pages/                                      # Page object models
│   ├── error.page.ts                           # Page object for error handling
│   ├── validation.page.ts                      # Page object for validation actions
│   ├── validation-results.page.ts              # Page object for validation results
├── playwright-report/                          # Test report
│   ├── index.html                              # HTML report index
│   └── ...                                     # Other report files
├── test-data/                                  # Test data and files
│   ├── test-valid-signature-signed-LTA.pdf     # PDF file for testing
│   ├── testPNG.png                             # PNG file for testing
├── test-results/                               # Last test run status and screenshots
├── tests/                                      # Test cases
│   ├── validation.spec.ts                      # Main file with validation test cases
├── playwright.config.ts                        # Playwright configuration 
├── package.json                                # NPM package file
└── README.md                                   # Project documentation
```

## Running tests
To run the tests, execute the following command:
    ``` 
        npx playwright test
    ```

To run the tests using Playwright UI, execute following command:
    ```
    npx playwright test --ui
    ```
## Reporting
To open the HTML report after running your tests, execute the following command:
    ```
    npx playwright show-report
    ```

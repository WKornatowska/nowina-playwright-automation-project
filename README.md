# nowina-playwright-automation-project
This is a small test automation project that includes two test cases for validating signed documents

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)

## Overview
This project is an automation framework using [Playwright](https://playwright.dev/), a powerful browser automation tool that allows for end-to-end testing of web applications across multiple browsers. The framework is designed to facilitate testing across various scenarios, ensuring the reliability and performance of web applications.

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

## Running tests
To run the tests, execute the following command:
```bash 
    npx playwright test
```

To run the tests using Playwright UI, execute following command:
```bash
npx playwright test -ui
```
## Reporting
To open the HTML report after running your tests, execute the following command:
npx playwright show-report
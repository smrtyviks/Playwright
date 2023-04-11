# Playwright
Test Automation for Searching the Sets on LEGO.com and add them to the Shopping Bag. 
Using Playwright tool to perform the actions on the Application and verify the Bag.

# Tests
Tests are stored in the Tests directory

# Github Actions
Tests can be run on one browser or multiple browsers. By default tests are run in a headless manner meaning no browser window will be opened while running the tests and results will be seen in the terminal.

Tests will run on push or pull request on branches main/master. The workflow will install all dependencies, install Playwright and then run the tests. It will also create the HTML report.

#Viewing the HTML Report

Locally opening the report will not work as expected as you need a web server in order for everything to work correctly. First, extract the zip, preferably in a folder that already has Playwright installed. Using the command line change into the directory where the report is and use npx playwright show-report followed by the name of the extracted folder. This will serve up the report and enable you to view it in your browser.

npx playwright show-report name-of-my-extracted-playwright-report

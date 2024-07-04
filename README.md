<div align="center"> 
<img <img src="https://spin.atomicobject.com/wp-content/uploads/webdriverio.png" width="240"/>
 <h1>WebdriverIO framework</h1>
</div>

## ⚡️ Object for testing

Web site - [Redmime.org](https://www.redmine.org/)

## 📦 Setup

1. Install [node.js](https://nodejs.org/en/) - JavaScript runtime environment
2. Clone git repository `git clone https://github.com/OleksandrBaior/WebdriverIO_framework_TS.git`
3. Install project dependencies specified in the package.json `npm install`

## ⚙️ Running Tests

Run tests chrome:

```
npm run test:chrome
```

Run tests firefox:

```
npm run test:firefox
```

Run tests chromeHeadless:

```
npm run test:chromeHeadless
```

Run tests chromeHeadless:

```
npm run test:firefoxHedless
```

Running a single test file:

```
npx wdio run ./wdio.conf.js --spec "./**/**/*.spec.ts"
```

## 📜 Allure Report

For reporting used Allure Report - Automation Test Reporting Tool  
Learn more about Allure Report at [Allure](https://allurereport.org/)

To generate allure report:

```
npm run allure:generateReport
```

To open allure report:

```
npm run allure:openReport
```

## 🌏 Report on CI

[https://oleksandrbaior.github.io/WebdriverIO_framework_TS](https://oleksandrbaior.github.io/WebdriverIO_framework_TS)

## 🔑 License

[MIT license](https://github.com/OleksandrBaior/WebdriverIO_framework_TS?tab=MIT-1-ov-file)

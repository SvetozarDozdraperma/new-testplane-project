export default {
    gridUrl: "http://localhost:4444/wd/hub",
    baseUrl: "http://localhost",
    pageLoadTimeout: 0,
    httpTimeout: 60000,
    testTimeout: 90000,
    resetCursor: false,
    // automationProtocol: /*"webdriver"*/"devtools",
    windowSize: "1280x720"/*"maximizeWindow"*/,
    // sessionsPerBrowser: 10,
    // testsPerSession: 1,
    sets: {
        desktop: {
            files: [
                "testplane-tests/**/*.(t|j)s"
            ],
            browsers: [
                "chrome"
            ]
        }
    },
    browsers: {
        chrome: {
            // windowSize: {
            //     width: 500,
            //     height: 720
            // },
            automationProtocol: /*"webdriver"*/"devtools",
            headless: false,
            desiredCapabilities: {
                browserName: "chrome"
            }
        }
    },
    plugins: {
        "html-reporter/testplane": {
            // https://github.com/gemini-testing/html-reporter
            enabled: true,
            path: "testplane-report",
            defaultView: "all",
            diffMode: "3-up-scaled"
        },
        '@testplane/headless-chrome': {
            enabled: false,
            browserId: 'chrome',
            version: '126'
        }
    }
};

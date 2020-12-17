exports.config = {
    runner: 'local',
 
    specs: [
        "TC_001.js"
    ],

    capabilities: [
        {
            browserName: 'chrome'
        }
    ],
    hostname: 'localhost',
    port: 9515, 
    path: '//',

    // Mooca framework
    framework: 'mocha',
    mochaOtps: {
        ui: 'bdd',
    }
}
exports.config = {
    specs: [
        './src/setValue.js'
    ],
    capabilities: [
        {
            browserName: 'chrome'
        }
    ],
    runner: 'local',

    // declare server infomation
    hostname: 'localhost',
    port: 9515,
    path: '//',

    //test framework
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },

    // reporter config
    reporters: [
        ['junit', {
            outputDir: './reports',
        }]
    ]
}
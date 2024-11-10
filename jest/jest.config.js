/** @type {import('jest').Config} */

const config = {
    collectCoverageFrom: [
        '*.{js,jsx}',
    ],

    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/coverage/",
        "jest.config.js"
    ],

    collectCoverage: true,

    coverageDirectory: "coverage",
    
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
        },
    },
};

module.exports = config;
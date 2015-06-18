'use strict'

module.exports = {
    rules: {
        "some-unused-vars": require('./rules/some-unused-vars')
    },
    rulesConfig: {
        "some-unused-vars": 0
    }
};
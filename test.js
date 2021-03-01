'use strict';

const fs   = require('fs');
const axios = require("axios");
const yaml = require('js-yaml');
const assert = require('assert').strict;


const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const getDataFile = async (url) => {
    const response = await axios (url);
    return response.data
}

const getData = url => {
    return sleep(1000).then(v => getDataFile(url))
}

describe("Auto-update tests", () => {
    let dataFile = "data.yaml";
    // let masterDataUrl = `https://raw.githubusercontent.com/chadwcarlson/action-testing/master/${dataFile}`;


    // it("Data has changed on auto-update branch.", async () => {
    //     let masterDataFileContents = await getData(masterDataUrl)
    //     let masterData = yaml.load(masterDataFileContents)
    //     let branchData = yaml.load(fs.readFileSync(dataFile, 'utf8'))

    //     assert.ok(branchData.data.length > masterData.data.length)
    // })

    it("Dummy test - Data file is proper yaml.", async () => {
        let data = yaml.load(fs.readFileSync(dataFile, 'utf8'))
        assert.equal(data.name, 'GitHub Actions repository auto-updates test file')
    })

})

#!/usr/bin/env node
'use strict';

var common = require("./common.js");

var help = "Usage: app-frame create [App type]\n\nExample: \n\tapp-frame create electron"
var argv = process.argv;
if (argv.length !== 4 || argv[2] !== 'create') {
    console.log(help);
    return;
}

if (argv[3] === 'electron') {
    common.createElectronApp();
}


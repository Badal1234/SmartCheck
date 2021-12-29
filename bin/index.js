#! /usr/bin/env node
var program = require('commander');
var linedraw = require('../helper/draw.js')
linedraw.linedraw()
program.option('-h','--help','information of all the commands')
program.option('-c','--file', 'path to smart contract file')
program.parse(process.argv)
options = program.opts()
console.log(options)
if(!options.length) console.log(options)
if(options.help) console.log(options)




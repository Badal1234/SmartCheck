#! /usr/bin/env node
var program = require('commander');
var linedraw = require('../helper/draw.js')
var fs = require('fs')
const parser = require('@solidity-parser/parser');
const { stringify } = require('querystring');
const { exec, execSync } = require('child_process');
linedraw.linedraw()
program.option('-h','--help','information of all the commands')
program.option('-c','--analyze', 'path to smart contract file')
program.parse(process.argv)
options = program.opts()
console.log(options)
//if(!options.length) console.log(options)
//if(options.help) console.log(options)


const decompileEvm = (bytecode) =>{

    
}

const readFile = (source) => {
    fs.readFile(source, 'utf-8',(err,data)=>{
        if (err){
            console.log(err)
        }else{
            ast = parser.parse(data)
            ast.children.map(node=>{
                console.log('"\x1b[31m"',`type is ${node.type} ----  method name is ${node.name}`)
                console.log('"\x1b[35m"','List of nodes -->',stringify(node.subNodes))
            })
        }
    })

}

const checkVolunirbility = () =>{
    fs.readFile(source, 'utf-8',(err,data)=>{
        if (err){
            console.log(err)
        }else{
            ast = parser.parse(data)
            ast.children.map(node=>{
                
            })
        }
    })


}
console.log('smartcheck is Analyzing.........')
readFile('./test/example.sol')
a = execSync(`myth analyze --execution-timeout 10 test/example.sol`, { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }).toString()
console.log(a)




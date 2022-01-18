#! /usr/bin/env node
var program = require('commander');
var linedraw = require('../helper/draw.js')
var fs = require('fs')
const parser = require('@solidity-parser/parser');
const { stringify } = require('querystring');
const { exec } = require('child_process');
linedraw.linedraw()
program.option('-h','--help','information of all the commands')
program.option('-c','--file', 'path to smart contract file')
program.parse(process.argv)
options = program.opts()
console.log(options)
if(!options.length) console.log(options)
if(options.help) console.log(options)


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
exec(`docker run -v $(pwd):/tmp mythril/myth analyze /tmp/contract.sol`,(err,data)=>{
    if (err){
        console.log(err)
    }else{
        console.log(data)
    }
})

readFile('./test/example.sol')




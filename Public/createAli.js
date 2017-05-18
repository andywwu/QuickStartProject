const path = require('path');
const fs = require('fs');


const htmlTemp = `<!DOCTYPE html>
<html lang="en">

<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://api.alink.aliyun.com/sdk/v1/component.css">
    <link href="./style/main.css" rel="stylesheet">
</head>

<body>
    <!--开心的添加代码吧-->


    

    <script  src="https://api.alink.aliyun.com/sdk/v2/sdk.js"></script>
    <script src="https://api.alink.aliyun.com/sdk/v1/component.js"></script>
</body>
</html>
`;


const jsTemp = `require(['./main.js'],function(main){
    //code write here
    main.init();
});
`;

const mainTemp = `define(function(){
    var APP = {
        init:function(){
            this.getDeviceStatus();
            this.bindPushData();
            this.bindEvent();
        },
        getDeviceStatus:function(){

        },
        bindPushData:function(){

        },
        bindEvent:function(){
            
        }
    }
    return APP;
});
`;

const cssTemp = `
    
`;

let modelName;

exports.CreateAli = (model) => {
    console.log("==============================创建阿里项目模板=========================");
    modelName = model;
    fs.mkdir(path.dirname('./Public') + '/package', (res) => {
        createModelDir()
    });
}

function createModelDir(model) {
    fs.mkdir(`${path.resolve(`./package`)}/${modelName}`, () => {
        creatFiles();
    });
}

function creatFiles(){
    createHtml();
    createJS();
    createStyle();
}   

function createHtml(){
    fs.writeFile(`${path.resolve(`./package/${modelName}`)}/app.html`,htmlTemp,'utf-8',(err)=>{
        if(err){
            throw err;
        }
        console.log('>>创建app.html');
    });
}

function createJS(){
    fs.writeFile(`${path.resolve(`./package/${modelName}`)}/app.js`,jsTemp,'utf-8',(err)=>{
        if(err){
            throw err;
        }
        console.log('>>创建app.js');
    });
    fs.writeFile(`${path.resolve(`./package/${modelName}`)}/main.js`,mainTemp,'utf-8',(err)=>{
        if(err){
            throw err;
        }
        console.log('>>创建main.js');
    });
}

function createStyle(){
    fs.mkdir(`${path.resolve(`./package/${modelName}`)}/style`, () => {
        createStyleFile();
    });
}

function createStyleFile(){
    fs.writeFile(`${path.resolve(`./package/${modelName}`)}/style/main.css`,cssTemp,'utf-8',(err)=>{
        if(err){
            throw err;
        }
        console.log('>>创建main.css');
    });
}
const path = require('path');
const readline = require('readline');
const AliBuildObject = require('./Public/createAli');
const JDBuildProject = require('./Public/createJD');
console.log(`======================Quick Build Project=================`);

let ProjectType, ProjectModel;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('构建的项目类型：ali or jd \n', ans => {
    ProjectType = ans;

    switch (ProjectType) {
        case "ali":
            rl.question('选择的为阿里智能项目，请输入model \n', ans => {
                ProjectModel = ans;
                AliBuildObject.CreateAli(ProjectModel);
                rl.close();
            });
            break;

        case "jd":
            rl.question('选择的为京东微联项目，请输入model \n', ans => {
                ProjectModel = ans;
                JDBuildProject.CreateJD(ProjectModel);
                rl.close();
            });
            break;
    }
});
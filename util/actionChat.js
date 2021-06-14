// const helpTemplate = require('../postTemplates/help.json');
// const emailTypeTemplate = require('../postTemplates/emailTypes.json');
const  { postUserMessage } = require('./postMessage');
const path = require('path');
const fs = require('fs');
const templateDir = '../postTemplates/';
const requiredTemplates = {};

// Requrie all templates from postTemplates
fs.readdirSync(path.join(__dirname,templateDir))
  .filter(function (module) {
    return module.slice(module.length - 5) === '.json'})
  .forEach(function (module) {
      const moduleName = module.slice(0,module.length-5);
      requiredTemplates[moduleName] = require(templateDir + module);
  });



function actionChat(userId, text) {
    switch(text) {
        case 'email':
            text = 'emailTypes';
            postUserMessage(userId, requiredTemplates[text]);
            break;
        case 'checkin':
            postUserMessage(userId, helpTemplate)
            break;
        case 'clockout':
            postUserMessage(userId, helpTemplate)
            break;
        default:
            text = 'help'
            postUserMessage(userId, requiredTemplates[text]);
    }
}


exports.actionChat = actionChat
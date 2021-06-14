const  { postUserMessage } = require('./postMessage');
const { makeEmail } = require('./mailer');
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


//Match Button Value with Action
function matchAction(userId, actionValue, JSONBody) {
    switch(actionValue) {
        case 'help':
            postUserMessage(userId, requiredTemplates[actionValue]);
            break;
        case 'emailTypes':
            postUserMessage(userId, requiredTemplates[actionValue]);
            break;
        case 'clockIn':
            break;
        case 'clockOut':
            break;
        case 'cancel':
            break;
        case 'emailDaily':
            postUserMessage(userId, requiredTemplates[actionValue]);
            break;
        case 'emailWeekly':
            postUserMessage(userId, requiredTemplates[actionValue]);
            break;
        case 'emailCustom':
            break;    
        case 'sendDailyEmail':
            const emailContent = parseEmailContent(actionValue,JSONBody);
            if (emailContent==false) {
                postUserMessage(userId, requiredTemplates['notice'], "Empty Email Content");
            }
            makeEmail(actionValue,emailContent);
            break;
        case 'sendWeeklyEmail':
            parseEmailContent(actionValue,JSONBody);
            break;
        default:

    }
}
// const mockJSONBody = {
//     "state":{
//         "values":{
//             "whYU":{
//                 "sendDailyEmail":{
//                     "type":"plain_text_input",
//                     "value":"[SCU]awdfafas\n[DOC]asd\n\n[SCU]asdasdasd\nnothing\n[1999] lasss\n,maw,maw,[SCU]\n[SCU] Algolia"}}}}}

function parseEmailContent(actionValue, JSONBody) {
    if (JSONBody && JSONBody.state && JSONBody.state.values) {
        const values = JSONBody.state.values;
        const randomlyGeneratedKey = Object.keys(values) ? values[Object.keys(values)[0]] : {};
        if (randomlyGeneratedKey && randomlyGeneratedKey[actionValue] && randomlyGeneratedKey[actionValue].value) {
            const contentValue = randomlyGeneratedKey[actionValue].value
            return contentValue
        }
    }
    return false
}

exports.matchAction = matchAction

// parseEmailContent('sendDailyEmail',mockJSONBody)


// matchAction("U01R7JSQKCK",'sendDailyEmail',mockJSONBody)
const { responseModel } = require('./util/responseModel');
const path = require('path');
const fs = require('fs');
const slackApiDir = './slackapi/';
const requiredHandlers = {};

fs.readdirSync(slackApiDir)
  .filter(function (module) {
    return module.slice(module.length - 3) === '.js'})
  .forEach(function (module) {
      const modulePath = path.join('/',slackApiDir,module.slice(0,module.length-3));
      requiredHandlers[modulePath] = require(slackApiDir + module);
  });


exports.listener = async(request, context, callback) => {
    const urlPath = request["path"];
    let result = 'placeHolder';
    switch (urlPath) {
        case '/slackapi/sebastian':
            result = await requiredHandlers[urlPath].sebastian(request)
            break;
        case '/slackapi/interactivity':
            result = await requiredHandlers[urlPath].interactivity(request)
            break;
        default:
            result = "This is default response";
    }
    const response = new responseModel(result)
    callback(null, response);
};

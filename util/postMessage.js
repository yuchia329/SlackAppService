const request = require('request');
const { config } = require ('../config');

function postUserMessage(userId,template,text='') {
    template["channel"] = userId;
    if (text) {
      template["text"] = text
    }
    request({
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${config.SlackBotToken}`
        },
        uri: 'https://slack.com/api/chat.postMessage',
        body: JSON.stringify(template),
        method: 'POST'
      },
    (err, res, body) => {
        if(err) {
          console.log('err: ',err)
        }
      });
}
exports.postUserMessage = postUserMessage
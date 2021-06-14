const { methodParser } = require('../util/methodParser');
const { actionChat } = require('../util/actionChat');


exports.sebastian = async (request) => {
    // console.log('request:', request)
    const httpMethod = methodParser(request);
    let result = "placeHolder";
    switch (httpMethod) {
        case 'GET':
            result = get(request)
            break;
        case 'POST':
            result = post(request)
            break;
        default:
    }
    return result
}

function post(request) {
    const body = request["body"];
    const lambdaProxyBody = JSON.parse(body);
    if (lambdaProxyBody["challenge"]) {
        return lambdaProxyBody["challenge"]
    }
    const event = lambdaProxyBody["event"];
    const userID = event["user"] ? event["user"] : ""
    const text = event["text"] ? event["text"] : 'empty';
    
    // Post message back to user if text is not empty
    if (text!="empty") {
        actionChat(userID, text)
    }
    return text
}

function get(request) {
    return "slackapi/get"

}
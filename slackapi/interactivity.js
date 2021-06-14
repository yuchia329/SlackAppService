const { methodParser } = require('../util/methodParser');
const { matchAction } = require('../util/actionButton');

exports.interactivity = async (request) => {
    const httpMethod = methodParser(request);
    // console.log('request:', request)
    let result = "placeHolder";
    switch (httpMethod) {
        case 'GET':
            // result = get(request)
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
    const JSONBody = BodyJSONParse(body);
    const userId = parseUserId(JSONBody);
    const actionValue= parseActionButtonValue(JSONBody);
    if (userId!='empty' && actionValue!='empty') {
        matchAction(userId, actionValue, JSONBody);
    }
    return true
}

//Parse JSON body from string which start with payload=
function BodyJSONParse (requestBody) {
    const bodyDecoded = decodeURIComponent(requestBody);
    const sliceString = "payload=";
    let bodyPreSlice = bodyDecoded;
    if (bodyDecoded.includes(sliceString.charAt(0))) {
        bodyPreSlice = bodyDecoded.slice(sliceString.length,bodyPreSlice.length)
    }
    const JSONBody = JSON.parse(bodyPreSlice);
    // console.log('interactivity: ',JSON.stringify(JSONBody))
    return JSONBody
}

//Slack UserId
function parseUserId(JSONBody) {
    const user = JSONBody["user"] ? JSONBody["user"] : {};
    const userId = user["id"] ? user["id"] : 'empty'
    return userId
}

//Slack Interactivity Button Value
function parseActionButtonValue(JSONBody) {
    const actions = JSONBody["actions"] ? JSONBody["actions"] : [];
    const actionValue = actions[0]["value"] ? actions[0]["value"] : "empty";
    return actionValue
}

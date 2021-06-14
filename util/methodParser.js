function methodParser(request) {
    let httpMethod;
    if (request["httpMethod"]=="GET") {
        httpMethod = 'GET'
    } else if (request["httpMethod"]=="POST") {
        httpMethod = 'POST'
    } else if (request["httpMethod"]=="PUT") {
        httpMethod = 'PUT'
    } else if (request["httpMethod"]=="DELETE") {
        httpMethod = 'DELETE'
    } else {
        httpMethod = ""
    }
    return httpMethod
}

exports.methodParser = methodParser
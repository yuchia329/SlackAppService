class responseModel {
   constructor(response) {
       this.statusCode = 200,
       this.headers = { "my_header": "my_value" }
       this.body = this.bodyFormat(response)
       this.isBase64Encoded = false
    };
    
    bodyFormat(response) {
        if (typeof(response)=='string'){
            return response
        } else {
            return JSON.stringify(response)
        }
    }
}

module.exports = { responseModel }
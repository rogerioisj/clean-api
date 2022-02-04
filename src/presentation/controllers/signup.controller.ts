export class SignupController {
  handle (httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('missing param: name')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('missing param: email')
      }
    }

    if (!httpRequest.body.password) {
      return {
        statusCode: 400,
        body: new Error('missing param: password')
      }
    }

    if (!httpRequest.body.passWordConfirmation) {
      return {
        statusCode: 400,
        body: new Error('missing param: passWordConfirmation')
      }
    }
  }
}

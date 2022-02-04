import { SignupController } from './signup.controller'

describe('Signup Controle', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignupController()
    const httpRequest = {
      body: {
        email: 'any_email@test.com',
        password: 'any_password',
        passWordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('missing param: name'))
  })

  test('Should return 400 if no email is provided', () => {
    const sut = new SignupController()
    const httpRequest = {
      body: {
        name: 'Any Name',
        password: 'any_password',
        passWordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('missing param: email'))
  })

  test('Should return 400 if no password is provided', () => {
    const sut = new SignupController()
    const httpRequest = {
      body: {
        name: 'Any Name',
        email: 'any_email@test.com'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('missing param: password'))
  })

  test('Should return 400 if no password confirmation is provided', () => {
    const sut = new SignupController()
    const httpRequest = {
      body: {
        name: 'Any Name',
        email: 'any_email@test.com',
        password: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('missing param: passWordConfirmation'))
  })
})

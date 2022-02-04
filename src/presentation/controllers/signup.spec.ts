import { MissingParamError } from '../errors/missing-param.error'
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
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
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
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
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
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
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
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
})

const Joi = require('joi')

class Validate {
  static result = ({ value, error }) => {
    if (error) {
      console.error(error)
      return false
    }

    return true
  }
  static array = data => this.result(Joi.array().validate(data))
  static object = data => this.result(Joi.object().validate(data))
  static number = data => this.result(Joi.number().validate(data))
  static string = data => this.result(Joi.string().validate(data))
  static func = data => !!(data instanceof Function)
  static isLength = data => !!data.length
  static all = (a, ...rest) => {
    const values = [a, ...rest]
    return !!(values.length && values.length === values.filter(Boolean).length)
  }
}

module.exports = Validate

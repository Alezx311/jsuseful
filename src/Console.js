const chalk = require('chalk')
const gradient = require('gradient-string')
const { Random } = require('.')

const GRADIENTS = ['rainbow', 'vice', 'pastel']

class Console {
  static transform = data =>
    data
      .map(v => {
        if (typeof v === 'object') return `${JSON.stringify(v, null, '\t')}`
        else if (typeof v === 'array') return `${v.join('\n')}`
        else return `${v}`
      })
      .join('\n#####\n')
  static show = data => console.log(data)
  static showRandom = (data, ...values) =>
    console.log(gradient[Random.arrayElement(GRADIENTS)](this.transform([data, ...values])))
  static showCute = (data, ...values) => console.log(gradient.vice(this.transform([data, ...values])))
  static showError = (data, ...values) => console.log(chalk.red(this.transform([data, ...values])))
}

module.exports = Console
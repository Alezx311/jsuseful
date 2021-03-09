class Convert {
  static toString = data => {
    if (typeof data === 'object') return `${JSON.stringify(data, null, '\t')}`
    if (typeof data === 'array') return `${data.join('\n')}`
    else return data?.toString() ?? `${data}`
  }
}

module.exports = Convert

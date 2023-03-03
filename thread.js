module.exports = (message, ms) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(message)
      return resolve()
    }, ms)
  })
}

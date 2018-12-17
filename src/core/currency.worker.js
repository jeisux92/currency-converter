// eslint-disable-line no-restricted-globals
// eslint-disable-next-line
export default () => {
  const run = function () {
    setInterval(() => {
      getCurrency()
    }, 1000)
  }
  const getCurrency = () => {
    var req = new XMLHttpRequest()
    req.open(
      'GET',
      'http://data.fixer.io/api/latest?access_key=f58da7a8fdbfecd9cf7adf8b387a4cde&symbols=USD',
      true
    )
    req.onreadystatechange = function (aEvt) {
      if (req.readyState === 4) {
        if (req.status === 200) {
          var response = JSON.parse(req.response)
          postMessage(response.rates)
        }
      }
    }
    req.send(null)
  }
  run()
}

'use strict'

const { SugoAgentBase } = require('sugo-agent-base')
const co = require('co')

class YourCustomAgent extends SugoAgentBase() {
  constructor (url, options = {}) {
    super(url, options)
    /* ... */
  }

  doSomething (/* ... */) {
    const s = this
    let { request, url } = s
    return co(function * () {
      let { statusCode, body } = request.post(`${url}/hoge`, {
        data: {}
      })
      /* ... */
    })
  }
}

let agent = new YourCustomAgent()
/* ... */

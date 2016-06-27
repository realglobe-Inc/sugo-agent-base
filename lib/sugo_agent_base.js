/**
 * Base for sugo agent
 * @class SugoAgentBase
 */
'use strict'

const apRequest = require('apeman-brws-request')
const co = require('co')

/** @lends SugoAgentBase */
class SugoAgentBase {
  constructor (url, options = {}) {
    const s = this
    s.url = url
    s.request = apRequest.create({ jar: true })
  }

  /**
   * Send knock to the server.
   * @returns {Promise.<boolean>} - Server is available or not
   */
  knock () {
    const s = this
    let { request, url } = s
    return co(function * () {
      let { statusCode } = request.head(url)
      return parseInt(statusCode / 100) === 2
    })
  }
}

Object.assign(SugoAgentBase, {})

module.exports = SugoAgentBase

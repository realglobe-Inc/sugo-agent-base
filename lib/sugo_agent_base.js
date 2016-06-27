/**
 * Base for sugo agent
 * @class SugoAgentBase
 */
'use strict'

const apRequest = require('apeman-brws-request')
const co = require('co')
const { resolve } = require('url')

/** @lends SugoAgentBase */
class SugoAgentBase {
  constructor (url, options = {}) {
    const s = this
    s.url = url
    s.request = apRequest.create({ jar: true })
  }

  /**
   * Send knock to the server.
   * @param {string?} [pathname=''] - Pathname of url
   * @returns {Promise.<boolean>} - Server is available or not
   */
  knock (pathname = '') {
    const s = this
    let { request, url } = s
    if (pathname) {
      url = resolve(url, pathname)
    }
    return co(function * () {
      let { statusCode } = yield request.get(url)
      return parseInt(statusCode / 100) === 2
    })
  }
}

Object.assign(SugoAgentBase, {})

module.exports = SugoAgentBase

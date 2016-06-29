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
   * Resolve a pathname
   * @param {string} pathname
   */
  resolve (pathname) {
    const s = this
    let { url } = s
    if (!pathname) {
      return url
    }
    if (!/\/$/.test(url)) {
      url = url + '/'
    }
    return resolve(url, pathname)
  }

  /**
   * Send knock to the server.
   * @param {string?} [pathname=''] - Pathname of url
   * @returns {Promise.<boolean>} - Server is available or not
   */
  knock (pathname = '') {
    const s = this
    let { request } = s
    return co(function * () {
      let { statusCode } = yield request.head(s.resolve(pathname))
      return parseInt(statusCode / 100) === 2
    })
  }
}

Object.assign(SugoAgentBase, {})

module.exports = SugoAgentBase

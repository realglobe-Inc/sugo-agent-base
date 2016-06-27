/**
 * Base for sugo agent
 * @class SugoAgentBase
 */
'use strict'

const apRequest = require('apeman-brws-request')

/** @lends SugoAgentBase */
class SugoAgentBase {
  constructor (url, options = {}) {
    const s = this
    s.url = url
    s.request = apRequest.create({ jar: true })
  }
}

Object.assign(SugoAgentBase, {})

module.exports = SugoAgentBase

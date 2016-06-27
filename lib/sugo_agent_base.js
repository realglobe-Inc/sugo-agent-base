/**
 * Base for sug agent
 * @class SugAgentBase
 */
'use strict'

const apRequest = require('apeman-brws-request')

/** @lends SugAgentBase */
class SugAgentBase {
  constructor (url, options = {}) {
    const s = this
    s.url = url
    s.request = apRequest.create({ jar: true })
  }
}

Object.assign(SugAgentBase, {})

module.exports = SugAgentBase

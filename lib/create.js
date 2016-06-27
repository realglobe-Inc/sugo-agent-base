/**
 * @function create
 * @returns {SugAgentBase}
 */
'use strict'

const SugAgentBase = require('./sugo_agent_base')

/** @lends create */
function create (...args) {
  return new SugAgentBase(...args)
}

module.exports = create

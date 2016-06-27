/**
 * @function create
 * @returns {SugoAgentBase}
 */
'use strict'

const SugoAgentBase = require('./sugo_agent_base')

/** @lends create */
function create (...args) {
  return new SugoAgentBase(...args)
}

module.exports = create

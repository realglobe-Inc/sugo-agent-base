/**
 * Base of sugo agents
 * @module sugo-agent-base
 */

'use strict'

const create = require('./create')
const SugoAgentBase = require('./sugo_agent_base')

let lib = create.bind(this)

Object.assign(lib, SugoAgentBase, {
  create,
  SugoAgentBase
})

module.exports = lib

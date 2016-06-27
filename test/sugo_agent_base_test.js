/**
 * Test case for sugoAgentBase.
 * Runs with mocha.
 */
'use strict'

const SugoAgentBase = require('../lib/sugo_agent_base.js')
const assert = require('assert')
const co = require('co')

describe('sugo-agent-base', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Sugo agent base', () => co(function * () {
    let agent = new SugoAgentBase('http://example.com')
    assert.ok(agent)
    assert.equal(agent.url, 'http://example.com')
  }))
})

/* global describe, before, after, it */

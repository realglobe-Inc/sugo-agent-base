/**
 * Test case for sugoAgentBase.
 * Runs with mocha.
 */
'use strict'

const SugoAgentBase = require('../lib/sugo_agent_base.js')
const assert = require('assert')
const sgServer = require('sg-server')
const { freeport } = sgServer
const co = require('co')

describe('sugo-agent-base', function () {
  this.timeout(3000)
  let server, port
  before(() => co(function * () {
    port = yield freeport()
    server = sgServer({
      endpoints: {
        '/api/foo': {
          'HEAD': (ctx) => {
            ctx.set('foo', 'This is foo')
            ctx.body = null
          }
        }
      }
    })

    yield server.listen(port)
  }))

  after(() => co(function * () {
    yield server.close()
  }))

  it('Sugo agent base', () => co(function * () {
    let agent = new SugoAgentBase(`http://localhost:${port}`)
    assert.ok(agent)
    let ok = yield agent.knock('/api/foo')
    assert.ok(ok)
  }))
})

/* global describe, before, after, it */

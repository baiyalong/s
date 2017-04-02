var async = require('async')
var redis = require('./redis')
var server = require('./server')

async.series([
    c => redis.init(c),
    c => server.init(c)
], err => err
    ? console.error(err)
    : console.info('service start.'))
var redis = require('redis')
var config = require('../config')

var client

exports.init = c => {
    client = redis.createClient({host: config.redis})
    client.on('ready', () => console.log('redis ready') || c())
    client.on('connect', () => console.log('redis connect'))
    client.on('reconnecting', () => console.log('redis reconnecting'))
    client.on('error', err => console.log('redis error', err))
    client.on('warning', () => console.log('redis warning'))
    client.on('end', () => console.log('redis end'))
}

exports.client = () => client
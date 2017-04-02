var admin = require('./admin')
var user = require('./user')
var idea = require('./idea')

module.exports = socket => {

    socket.on('admin.connect', () => {})
    socket.on('admin.disconnect', () => {})
    socket.on('admin.login', () => {})
    socket.on('admin.logout', () => {})

    socket.on('user.connect', () => {})
    socket.on('user.disconnect', () => {})
    socket.on('user.rand', () => {})
    socket.on('user.score', () => {})

    socket.on('idea.get', () => {})
    socket.on('idea.insert', () => {})
    socket.on('idea.remove', () => {})
    socket.on('idea.update', () => {})

}
const { combineReducers } = require('redux')
const { reducer: shows } = require('./shows')

module.exports = combineReducers({
	shows
})

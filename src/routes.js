const React = require('react')
const { Router, Route, IndexRoute, browserHistory } = require('react-router')
const App = require('./components/App/app.js')
const Shows = require('./components/Shows/shows.js')
const Show = require('./components/Show/show.js')

module.exports = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Shows} />
			<Route path="shows" component={Shows}>
				<Route path=":id" component={Show} />
			</Route>
		</Route>
	</Router>
)

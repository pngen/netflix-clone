const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const shows = require('../../shows.json')
const { fetchShows } = require('modules/shows.js')
const styles = require('./shows.css')

class Shows extends React.Component {
	componentDidMount() {
		fetch('/src/shows.json', { method: 'GET' })
			.then(response => {
				return response.json()
			})
			.then(shows => {
				this.props.fetchShows(shows)
			})
	}
	render() {
		const { children, shows = [], params = {} } = this.props

		return (
			<div className={styles.shows}>
				<div className={params.id ? styles.listHidden : styles.list}>
					{shows.map((show, index) => (
						<Link key={index} to={`/shows/${index + 1}`}>
							<div
								className={styles.show}
								style={{ backgroundImage: `url(${show.cover})` }}
							/>
						</Link>
					))}
				</div>
				{children}
			</div>
		)
	}
}

module.exports = connect(
	({ shows }) => ({
		shows: shows.all
	}),
	{
		fetchShows: fetchShows
	}
)(Shows)

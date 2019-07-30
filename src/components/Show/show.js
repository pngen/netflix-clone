const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const { fetchShow } = require('modules/shows.js')
const styles = require('./show.css')

class Show extends React.Component {
	componentWillMount() {
		this.props.fetchShow(this.props.params.id)
	}
	componentWillUpdate(next) {
		if (this.props.params.id !== next.params.id) {
			this.props.fetchShow(next.params.id)
		}
	}

	render() {
		const { show = { starring: [] } } = this.props

		return (
			<div
				className={styles.show}
				style={{
					backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${
						show.cover
					})`
				}}
			>
				<div
					className={styles.cover}
					style={{ backgroundImage: `url(${show.cover})` }}
				/>
				<div className={styles.description}>
					<div className={styles.title}>{show.title}</div>
					<div className={styles.year}>{show.year}</div>
					<div className={styles.starring}>
						{show.starring.map((actor = {}, index) => (
							<div key={index} className={styles.actor}>
								{actor.name}
							</div>
						))}
					</div>
				</div>
				<Link className={styles.closeButton} to="/shows">
					Back
				</Link>
			</div>
		)
	}
}

module.exports = connect(
	({ shows }) => ({
		show: shows.current
	}),
	{
		fetchShow: fetchShow
	}
)(Show)

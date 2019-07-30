const { handleActions } = require('redux-actions')

const FETCH_SHOWS = 'shows/FETCH_SHOWS'
const FETCH_SHOW = 'shows/FETCH_SHOW'

module.exports = {
	fetchShows: shows => ({
		type: FETCH_SHOWS,
		shows
	}),
	fetchShow: index => ({
		type: FETCH_SHOW,
		index
	}),
	reducer: handleActions(
		{
			[FETCH_SHOWS]: (state, action) => ({
				...state,
				all: action.shows
			}),
			[FETCH_SHOW]: (state, action) => ({
				...state,
				current: state.all[action.index - 1]
			})
		},
		{
			shows: [],
			show: {}
		}
	)
}

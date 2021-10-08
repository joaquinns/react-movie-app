import { useState, useEffect } from 'react'

// Services
import API from '../services/api'

// Helpers
import { isPersistedState } from '../helper'

export const useMovieFetch = movieId => {
	const [state, setState] = useState({})
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		const fetchMovie = async () => {
			try {
				setLoading(true)
				setError(false)

				const credits = await API.fetchCredits(movieId)
				const movie = await API.fetchMovie(movieId)
				// Directors
				const directors = credits.crew.filter(
					member => member.job === 'Director'
				)

				setState({
					...movie,
					actors: credits.cast,
					directors
				})
				setLoading(false)
			} catch (e) {
				setError(true)
				sessionStorage.removeItem(movieId)
			}
		}

		const sessionState = isPersistedState(movieId)

		if (sessionState) {
			setState(sessionState)
			setLoading(false)
			return
		}

		fetchMovie()
	}, [movieId])

	// Write to session storage
	useEffect(() => {
		sessionStorage.setItem(movieId, JSON.stringify(state))
	}, [movieId, state])

	return { state, loading, error }
}
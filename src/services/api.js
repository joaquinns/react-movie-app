import axios from 'axios'

import { API_KEY, API_URL, SEARCH_BASE_URL, POPULAR_BASE_URL } from '../config'


const api = {
	fetchMovies: async (searchTerm, page) => {
		try {
			const endpoint = searchTerm
				? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
				: `${POPULAR_BASE_URL}&page=${page}`

			const response = await axios.get(endpoint)
			return response.data
		} catch (e) { console.log(e) }
	},

	fetchMovie: async (movieId) => {
		try {
			const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
			const response = await axios.get(endpoint)
			return response.data
		} catch (e) { console.log(e) }
	},

	fetchCredits: async (movieId) => {
		try {
			const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
			const response = await axios.get(creditsEndpoint)
			return response.data
		} catch (e) { console.log(e) }
	}

}

export default api

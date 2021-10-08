import PropTypes from 'prop-types'

// Components
import { Thumb } from '../Thumb'

// Config 
import { POSTER_SIZE, IMAGE_BASE_URL } from '../../config'

// No image

// Styles
import { Wrapper, Content, Text } from './MovieInfo.styles'

export const MovieInfo = ({ movie }) => {
	return (

		<Wrapper backdrop={movie.backdrop_path}>
			<Content>
				<Thumb
					image={
						movie.poster_path
							? `${IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path}`
							: 'No image :(('
					}
					clickable={false}
				/>
				<Text>
					<h1>{movie.title}</h1>
					<h3>PLOT</h3>
					<p>{movie.overview}</p>

					<div className="rating-directors">
						<div>
							<h3>Rating</h3>
							<div className="score">{movie.vote_average}</div>
						</div>
						<div className="directors">
							<h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''} </h3>
							{movie.directors.map(director => (
								<p key={director.credit_id}>{director.name}</p>
							))}
						</div>
					</div>
				</Text>
			</Content>
		</Wrapper>

	)
}

MovieInfo.propTypes = {
	movie: PropTypes.object
}
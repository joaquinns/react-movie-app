import { useParams } from 'react-router-dom'
// Config 
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'

// Components
import { Grid } from './Grid'
import Spinner from './Spinner'
import { BreadCrumb } from './BreadCrumb'
import { MovieInfo } from '../components/MovieInfo'
import { MovieInfoBar } from './MovieInfoBar'
import { Actor } from './Actor'
import { NotFound } from './NotFound'

// Hooks
import { useMovieFetch } from '../hooks/useMovieFetch'

// No image
import noImage from '../images/no-image.jpg'

export const Movie = () => {
	const { movieId } = useParams()
	// state is setted to movie
	const { state: movie, loading, error } = useMovieFetch(movieId)

	if (error) return <NotFound />

	return (
		<>
			{loading ? <Spinner /> :
				<div>
					<BreadCrumb movieTitle={movie.original_title} />
					<MovieInfo movie={movie} />
					<MovieInfoBar
						time={movie.runtime}
						budget={movie.budget}
						revenue={movie.revenue}
					/>
					{console.log(movie)}
					<Grid header='Actors'>
						{movie && movie.actors.map(actor => (
							<Actor
								key={actor.credit_id}
								name={actor.name}
								character={actor.character}
								imgUrl={actor.profile_path
									? `${IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path}`
									: noImage
								}
							/>
						))}
					</Grid>
				</div>
			}
		</>
	)
}
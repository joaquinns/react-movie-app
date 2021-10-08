// Components
import { HeroImage } from '../HeroImage'
import { Grid } from '../Grid'
import { Thumb } from '../Thumb'
import Spinner from '../Spinner'
import { SearchBar } from '../SearchBar'
import { Button } from '../Button'

// Hooks
import { useHomeFetch } from '../../hooks/useHomeFetch'

// Config
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config'

// No image
import noImage from '../../images/no-image.jpg'

export const Home = () => {
	const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch()

	if (error) return <div>Something bad happened..</div>

	return (
		<>
			{state.results[0]
				? <HeroImage
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
					title={`${state.results[0].original_title}`}
					text={`${state.results[0].overview}`}
				/>
				: null
			}
			<SearchBar setSearchTerm={setSearchTerm} />
			<Grid header={searchTerm ? 'Search results' : 'Popular Movies'}>
				{state.results.map(movie => (
					<Thumb
						key={movie.id}
						clickable={true}
						image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : noImage}
						movieId={movie.id}
					/>
				))}
			</Grid>
			{loading && <Spinner />}
			{state.page < state.total_pages && !loading && (
				<Button text='Load More' callback={() => setIsLoadingMore(true)} />
			)}
		</>
	)
}
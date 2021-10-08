import PropTypes from 'prop-types'

import { useState, useEffect, useRef } from 'react'

// SVG image
import searchIcon from '../../images/search-icon.svg'

// Styles
import { Wrapper, Content } from './SearchBar.styles'

export const SearchBar = ({ setSearchTerm }) => {

	const [search, setSearch] = useState('')
	const initial = useRef(true)

	useEffect(() => {

		if (initial.current) {
			initial.current = false
			return
		}

		const timer = setTimeout(() => {
			setSearchTerm(search)
		}, 500)

		return () => clearTimeout(timer)
	}, [setSearchTerm, search])

	return (
		<Wrapper>
			<Content>
				<img src={searchIcon} alt="search icon" />
				<input
					type="text"
					placeholder='Search movie...'
					onChange={e => setSearch(e.currentTarget.value)}
					value={search}
				/>
			</Content>
		</Wrapper>
	)
}

SearchBar.propTypes = {
	setSearchTerm: PropTypes.func
}
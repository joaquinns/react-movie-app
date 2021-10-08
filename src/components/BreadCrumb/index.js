import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// Styles 
import { Content, Wrapper } from './BreadCrumb.styles'

export const BreadCrumb = ({ movieTitle }) => {
	return (
		<Wrapper>
			<Content>
				<Link to='/'>
					<span>Home</span>
				</Link>
				<span>|</span>
				<span>{movieTitle}</span>
			</Content>
		</Wrapper>
	)
}

BreadCrumb.propTypes = {
	movieTitle: PropTypes.string
}
import PropTypes from 'prop-types'

// Styles
import { Wrapper, Content } from './Grid.styles'

export const Grid = ({ header, children }) => {
	return (
		<Wrapper>
			<h1>{header}</h1>
			<Content>{children}</Content>
		</Wrapper>
	)
}

Grid.propTypes = {
	header: PropTypes.string
}
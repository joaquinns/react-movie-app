import { Link } from 'react-router-dom'

import { Wrapper, Content } from './Header.styles'

export const Header = () => {
	return (
		<Wrapper>
			<Content>
				<Link to='/'>
					<h1>MovieApp</h1>
				</Link>
			</Content>
		</Wrapper>
	)
}
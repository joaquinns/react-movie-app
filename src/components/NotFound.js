import styled from 'styled-components'

const Wrapper = styled.div`
	margin: 2rem auto;
`

const Content = styled.div`
	text-align: center;
	h1 {
		color: var(--dark-grey);
	}
`

export const NotFound = () => {
	return (
		<Wrapper>
			<Content>
				<h1>404 Not Found...</h1>
			</Content>
		</Wrapper>
	)
}
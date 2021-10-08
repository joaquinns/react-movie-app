import styled from 'styled-components'

export const Wrapper = styled.div`
	max-width: var(--max-width);
	margin: 0 auto;
	padding: 1rem 1.5rem;

	h1 {
		padding: 1rem 0;
		color: var(--mid-grey);

		@media screen and (max-width: 768px) {
			font-size: var(--font-big);
		}
	}
`

export const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 2rem;
`
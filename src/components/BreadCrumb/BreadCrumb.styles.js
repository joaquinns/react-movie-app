import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	width: 100%;
	height: 70px;
	background-color: var(--mid-grey);
	color: var(--white);

	a {
		text-decoration: none;
	}
`

export const Content = styled.div`
	display: flex;
	width: 100%;
	max-width: var(--max-width);
	padding: 0 20px;

	span {
		font-size: var(--font-med);
		color: var(--white);
		padding-right: 10px;

		@media screen and (max-width: 768px) {
			font-size: var(--font-small);
		}
	}
`
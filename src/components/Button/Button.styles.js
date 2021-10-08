import styled from 'styled-components'

export const Wrapper = styled.button`
	display: block;
	background-color: var(--dark-grey);
	color: var(--white);
	padding: 1rem 5rem;
	border-radius: 1.8rem;
	border: none;
	margin: .5rem auto;
	font-size: var(--font-med);
	transition: all .3s;
	outline: none;
	cursor: pointer;

	:hover {
		opacity: 0.8;
	}
`
import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	height: 5rem;
	background-color: var(--dark-grey);
	padding: 0 1.5rem;
`

export const Content = styled.div`
	position: relative;
	max-width: var(--max-width);
	width: 100%;
	height: 55px;
	background-color: var(--mid-grey);
	margin: auto auto;
	border-radius: 40px;
	color: var(--white);

	img {
		position: absolute;
		left: 15px;
		top: 14px;
		width: 30px;
	}

	input {
		position: absolute;
		font-size: var(--font-big);
		left: 0;
		margin: .5rem;
		padding: 0 0 0 60px;
		border: 0;
		width: 95%;
		background: transparent;
		color: var(--white);
		height: 40px;

		:focus {
			outline: none;
		}
	}
`
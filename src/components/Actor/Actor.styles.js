import styled from 'styled-components'

export const Wrapper = styled.div`
	background-color: var(--dark-grey);
	color: var(--white);
	border-radius: 20px;
	padding: 5px;
	text-align: center;

	h3 {
		margin: 10px 0 0 0;
	}

	p {
		margin: 5px 0;
	}
`

export const Image = styled.img`
	display: block;
	width: 100%;
	height: 200px;
	object-fit: cover;
	object-position: center;
	//border-bottom: 2px solid var(--white);
	border-radius: 15px;
`
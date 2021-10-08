import styled from 'styled-components'

export const Image = styled.img`
	width: 100%;
	transition: all .3s;
	object-fit: cover;
	border-radius: 1.5rem;
	animation: animateThumb .5s;

	:hover {
		opacity: 0.8;
	}

	@keyframes  animateThumb {
		from {
			opacity: 0;
		} 

		to {
			opacity: 1;
		}
	}
`

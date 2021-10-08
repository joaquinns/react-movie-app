import styled from 'styled-components'

export const Wrapper = styled.div`
	background: linear-gradient(
		to bottom, rgba(0, 0, 0, 0)
		41%, rgba(0, 0, 0, 0.9)
		100%, rgba(0, 0, 0, 0.68)
	),
		url(${({ image }) => image}), var(--dark-grey);
	background-size: 100%, cover;
	background-position: center;
	height: 600px;
	position: relative;
	animation: animateHeroImage 500ms;

 	@media screen and (max-width: 720px) {
	background: linear-gradient(
		to bottom, rgba(0, 0, 0, 0.2)
		41%, rgba(0, 0, 0, 0.9)
		100%, rgba(0, 0, 0, 0.68)
	),
		url(${({ image }) => image}), var(--dark-grey);
	background-size: 100%, cover;
	background-position: center;
	height: 600px;
	position: relative;
	animation: animateHeroImage 500ms;
	}

	@keyframes animateHeroImage {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
`

export const Content = styled.div`
	padding: 20px;
	max-width: var(--max-width);
	margin: 0 auto;

`

export const Text = styled.div`
	z-index: 3;
	max-width: 700px;
	position: absolute;
	bottom: 40px;
	margin-right: 20px;
	min-height: 100px;
	color: var(--white);

	h1 {
		font-size: var(--font-superBig);

		@media screen and (max-width: 720px) {
			font-size: var(--font-big);
		}
	}

	p {
		font-size: var(--font-med);

		@media screen and (max-width: 720px) {
			font-size: var(--font-small);
		}
	}

	@media screen and (max-width: 720px) {
		max-width: 100%;	
	}
`
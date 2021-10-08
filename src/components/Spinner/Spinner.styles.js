import styled from 'styled-components'

export const Spinner = styled.div`
	border: 5px solid var(--light-grey);
	border-top: 5px solid var(--mid-grey);
	border-radius: 50%;
	width: 2.5rem;
	height: 2.5rem;
	margin: 1.5rem auto;
	animation: spin .8s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
`

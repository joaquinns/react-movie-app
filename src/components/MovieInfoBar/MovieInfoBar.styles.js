import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	background-color: var(--dark-grey);
	min-height: 100px;
	color: var(--white);
	padding: 0 20px;
`

export const Content = styled.div`
	display: flex;
	max-width: var(--max-width);
	width: 100%;
	margin: 0 auto;

	.column {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--mid-grey);
		padding: 1rem;
		border-radius: 20px;
		margin: 0 20px;
		flex: 1;

		::first-child {
			margin-left: 0;
		}

		::last-child {
			margin-right: 0;
		}
	}

	@media screen and (max-width: 768px) {
		display: block;

		.column {
			margin: 20px 0;
		}
	}
`
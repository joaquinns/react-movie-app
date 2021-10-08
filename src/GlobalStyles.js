import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	:root {
		--max-width: 1250px;
		--white: #fff;
		--light-grey: #eee;
		--mid-grey: #353535;
		--dark-grey: #1c1c1c;
		--font-superBig: 2.5rem;
		--font-big: 1.5rem;
		--font-med: 1.2rem;
		--font-small: 1rem;

	}

	* {
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
		margin: 0;
		padding: 0;
	}

	body {
		overflow-x: hidden;
		
		h1 {
			font-size: 2rem;
			font-weight: 600;
			color: var(--white)
		}

		h3 {
			font-size: 1.1rem;
			font-weight: 600;
		}

		p {
			font-size: 1rem;
			color: var(--white);
		}
	}
`
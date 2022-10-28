import { Global, css } from "@emotion/react";
import reset from "emotion-reset";

const GlobalStyle = () => (
  <Global
    styles={css`
			${reset}

			* {
				box-sizing: border-box;
			}

			body {
				width: 100%;
				overflow-x: hidden;
			}

			html {
				font-size: 16px;
				scroll-behavior: smooth;
				width: 100%;
			}

			div,
			section,
			header,
			footer {
				display: flex;
			}

			button {
				border: none;
				outline: none;
				background: none;
				box-shadow: none;
				cursor: pointer;
			}

			a {
				text-decoration: none;
			}

			input {
				border: none;
				outline: none;
				:focus-visible {
					outline: none;
				}
			}
		`}
  />
);

export default GlobalStyle
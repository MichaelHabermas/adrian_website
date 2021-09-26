import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<NavStyle>
			<nav>
				<Link to="/">
					<h2>VanderLust</h2>
				</Link>
				<div className="nav-links">
					<a className="link-text" href="/commissions">
						Commissions
					</a>

					<a className="link-text" href="/">
						Art
					</a>
				</div>
			</nav>
		</NavStyle>
	);
};

export default Nav;

const NavStyle = styled.div`
	position: absolute;
	top: 3%;
	width: 100%;
	*,
	*::before,
	*::after {
		z-index: 1;
		color: #333333;
	}

	.link-text {
		font-size: 1.5rem;
		margin-left: 2rem;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: "Poppins", sans-serif;
		background: transparent;
		width: 90%;
		margin: auto;
	}

	nav h2 {
		font-family: "Lobster", cursive, sans-serif;
		font-weight: 1.5rem;
		font-size: 2.5rem;
	}

	.nav-links {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: bold;
	}

	.link-text {
		text-decoration: none;
		font-weight: bold;
		height: 100%;
	}

	// OLD MEDIA QUERIES
	@media screen and (min-width: 480px) {
	}
	@media screen and (min-width: 768px) {
	}
	@media screen and (min-width: 1024px) {
	}
	@media screen and (min-width: 1200px) {
	}
	@media screen and (min-width: 1300px) {
		nav {
			width: 80%;
		}
	}
	@media screen and (min-width: 1400px) {
	}
	@media screen and (min-width: 1550px) {
	}
`;

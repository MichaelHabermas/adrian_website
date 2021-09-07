import React from "react";
import styled from "styled-components";

import { lead_chars, top_chars, body_chars, wide_chars } from "../assets/index";

export default function Home() {
	if (!body_chars || !top_chars || !lead_chars || !wide_chars) {
		return <h1>Loading...</h1>;
	}

	return (
		<StyledHome>
			<section className="landing">
				<h1>Take a Valk on the Vild Side</h1>
				<h3>From the Mind and Hand of Adrian van der Valk</h3>
				<section className="lead_pics">
					{lead_chars.map(card => {
						return <img className="card" src={card} alt="card_pic" />;
					})}
				</section>
			</section>

			<section className="gallery">
				<section className="top_pics">
					{top_chars.map(card => {
						return <img className="card" src={card} alt="card_pic" />;
					})}
				</section>

				<section className="mermaid">
					<img className="card_wide" src={wide_chars.mermaid} alt="card_pic" />;
				</section>

				<section className="body_of_images">
					{body_chars.map(card => {
						return <img className="card" src={card} alt="card_pic" />;
					})}
				</section>

				<section className="final_img">
					<img
						className="card_wide"
						src={wide_chars.breakfast_club}
						alt="card_pic"
					/>
				</section>
			</section>
			<footer>Copyright &copy; 2021 Adrian van der Valk</footer>
		</StyledHome>
	);
}

const StyledHome = styled.div`
	width: 90%;
	margin: 0 auto;

	// Landing Section
	.lead_pics {
	}
	// BODY Section
	.gallery {
	}
	.top_pics,
	.body_of_images {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}
	.mermaid {
	}
	.final_img {
	}
	.card,
	.card_wide {
		width: 100%;
		margin-bottom: 1rem;
	}

	// FOOTER
	footer {
	}

	// MEDIA QUERIES
	@media screen and (min-width: 480px) {
		.card {
			width: 49%;
		}
	}
	@media screen and (min-width: 768px) {
	}
	@media screen and (min-width: 1024px) {
	}
	@media screen and (min-width: 1200px) {
	}
	@media screen and (min-width: 1300px) {
	}
	@media screen and (min-width: 1400px) {
	}
	@media screen and (min-width: 1550px) {
	}
`;

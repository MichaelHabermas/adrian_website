import React from "react";
import styled from "styled-components";

import {
	hero_img,
	lead_chars,
	top_chars,
	body_chars,
	wide_chars,
} from "../assets/index";
import gallery_background from "../assets/gallery_background.png";

export default function Home() {
	if (!body_chars || !top_chars || !lead_chars || !wide_chars) {
		return <h1>Loading...</h1>;
	}

	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty("--vh", `${vh}px`);

	return (
		<StyledHome>
			<section className="landing">
				<section className="landing_content">
					<section className="landing_text">
						<h1>Take a Valk on the Vild Side</h1>
						<h3>From the Mind and Hand of Adrian van der Valk</h3>
					</section>

					<section className="landing_images">
						<img className="hero" src={hero_img} alt="card_pic" />
						<section className="lead_pics">
							{lead_chars.map(card => {
								return <img className="lead_card" src={card} alt="card_pic" />;
							})}
						</section>
					</section>

					<section className="socials_container">
						<div className="social_links">
							<a href="#" className="icon instaIcon">
								<i className="fab fa-instagram"></i>
							</a>
							<a href="#" className="icon youtubeIcon">
								<i className="fab fa-youtube"></i>
							</a>
							<a href="#" className="icon linkedinIcon">
								<i className="fab fa-linkedin"></i>
							</a>
							<a href="#" className="icon facebookIcon">
								<i className="fab fa-facebook-square"></i>
							</a>
							<a href="#" className="icon twitterIcon">
								<i className="fab fa-twitter-square"></i>
							</a>
						</div>
					</section>
				</section>
			</section>

			<section className="gallery">
				<section className="gallery_container">
					<h2>Gallery</h2>
					<section className="top_pics">
						{top_chars.map(card => {
							return <img className="card" src={card} alt="card_pic" />;
						})}
					</section>

					<section className="mermaid">
						<img
							className="card_wide"
							src={wide_chars.mermaid}
							alt="card_pic"
						/>
						;
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
			</section>
			<footer>Copyright &copy; 2021 Adrian van der Valk</footer>
		</StyledHome>
	);
}

const StyledHome = styled.div`
	h1 {
		font-family: "Lobster", cursive;
	}

	.landing,
	.gallery_container,
	footer {
		width: 90%;
		margin: 0 auto;
	}

	// Landing Section
	.landing {
		display: flex;
		align-items: center;
		/* border: 1px solid black; */
		height: 100vh; /* Fallback for browsers that do not support Custom Properties */
		height: calc(var(--vh, 1vh) * 100);
	}
    .landing_content{
        display: flex;
		flex-direction: column;
        align-items: center;
		justify-content: space-between;
        height: 80%;
        
		border: 1px solid black;
    }
	.landing_text {
		margin: 10% 0 5%;
	}
	.landing_text h1 {
		text-align: left;
	}
	.landing_text h3 {
		text-align: left;
	}

	.landing_images {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: space-evenly;
		border: 1px solid red;
	}
	.hero {
		object-fit: cover;
		width: 60%;
		height: 100%;
	}
	.lead_pics {
		display: flex;
		flex-direction: column;
		width: 20%;
		height: 100%;
		align-items: center;
		justify-content: space-between;
		border: 1px solid blue;
	}
	.lead_card {
		object-fit: cover;
		width: 100%;
		height: auto;
	}
	.socials_container,
	.social_links,
	.icon,
	.instaIcon,
	.youtubeIcon,
	.linkedinIcon,
	.facebookIcon,
	.twitterIcon {border: 1px solid green;}
	}
	.socials_container {
		display: flex;
        align-items: center;
        justify-content: center;
	}
	.social_links {
	}
	.icon {
		width: 50px;
		height: 50px;
	}

	// BODY Section
	.gallery {
		background-image: url(${gallery_background});
	}
	.gallery,
	.gallery_container,
	.top_pics,
	.body_of_images,
	.mermaid,
	.final_img {
		overflow: visible;
	}

	.gallery_container h2 {
		font-family: "Lobster", cursive;
		text-align: center;
		font-size: 6rem;
		padding: 2rem;
	}

	.card,
	.card_wide {
		width: 100%;
		margin-bottom: 1rem;
		border-radius: 4rem;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
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

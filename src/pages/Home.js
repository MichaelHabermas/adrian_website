import React from "react";
import styled from "styled-components";

import {
	hero_img,
	lead_chars,
	top_chars,
	body_chars,
	wide_chars,
	social_icons,
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
							{lead_chars.map((card, idx) => {
								return (
									<img
										key={idx}
										className="lead_card"
										src={card}
										alt="card_pic"
									/>
								);
							})}
						</section>
					</section>

					<section className="socials_container">
						<div className="social_links">
							<a
								href="https://www.instagram.com/riddlemeanade/"
								className="icon instaIcon"
								target="_blank"
								rel="noreferrer"
							>
								<img src={social_icons.instagram} alt="facebook" />
							</a>
							<a
								href="https://www.youtube.com/channel/UCAVKC66zJeJZ0MzWfCl0U6A/featured"
								className="icon youtubeIcon"
								target="_blank"
								rel="noreferrer"
							>
								<img src={social_icons.youtube} alt="youtube" />
							</a>
							<a
								href="https://www.linkedin.com/in/adrian-van-der-valk-40a387b8/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABj43YoB7LoxDTJ_jktvbhwCGZDalV6zCe0"
								className="icon linkedinIcon"
								target="_blank"
								rel="noreferrer"
							>
								<img src={social_icons.linkedin} alt="linkedin" />
							</a>
							<a
								href="https://www.facebook.com/adrian.vandervalk"
								className="icon facebookIcon"
								target="_blank"
								rel="noreferrer"
							>
								<img src={social_icons.facebook} alt="facebook" />
							</a>
							<a
								href="https://www.instagram.com/riddlemeanade/"
								className="icon twitterIcon"
								target="_blank"
								rel="noreferrer"
							>
								<img src={social_icons.twitter} alt="twitter" />
							</a>
						</div>
					</section>
				</section>
			</section>

			<section className="gallery">
				<section className="gallery_container">
					<h2>Gallery</h2>
					<section className="top_pics">
						{top_chars.map((card, idx) => {
							return (
								<img key={idx} className="card" src={card} alt="card_pic" />
							);
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
						{body_chars.map((card, idx) => {
							return (
								<img key={idx} className="card" src={card} alt="card_pic" />
							);
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
			</section>
		</StyledHome>
	);
}

const StyledHome = styled.div`
	.landing,
	.gallery_container,
	footer {
		width: 90%;
		margin: 0 auto;
	}
	* {
		overflow: visible;
	}

	// Landing Section
	.landing {
		display: flex;
		align-items: center;
		height: 100vh; /* Fallback for browsers that do not support Custom Properties */
		height: calc(var(--vh, 1vh) * 100);
		border: 1px solid red;
	}
	.landing_content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 85%;
		border: 1px solid red;
		margin-top: 8%;
	}
	.landing_text {
		width: 80%;
	}
	.landing_text h1 {
		font-family: "Lobster", cursive;
		text-align: left;
		font-size: 5rem;
	}
	.landing_text h3 {
		font-size: 2rem;
		text-align: left;
		width: 80%;
	}

	.landing_images {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: space-between;
		height: 50%;
	}
	.hero {
		object-fit: cover;
		height: 100%;
		border-radius: 5%;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	}
	.lead_pics {
		display: flex;
		flex-direction: column-reverse;
		height: 100%;
		width: 20%;
		align-items: center;
		justify-content: space-between;
	}
	.lead_card {
		height: 32%;
		border-radius: 5%;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	}

	.socials_container,
	.social_links {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
	.icon {
		margin: 0 2%;
	}

	.icon img {
		width: 100%;
	}

	// BODY Section
	.gallery {
		background-image: url(${gallery_background});
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
		text-align: right;
		padding: 2% 0;
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

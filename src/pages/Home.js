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
import gallery_background_wide from "../assets/gallery_background_wide.png";
// import gallery_sign from "../assets/sub_t_gallery.png";
import gallery_sign from "../assets/sub_t_revelry.png";

export default function Home() {
	if (!body_chars || !top_chars || !lead_chars || !wide_chars) {
		return <h1>Loading...</h1>;
	}

	// For iOS mobile sizings:
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty("--vh", `${vh}px`);

	return (
		<StyledHome>
			<div className="landing">
				<div className="mobile">
					<section className="landing_text">
						<h1>
							Take a Valk on
							<br />
							the <span>Vild</span> Side
						</h1>
					</section>
					<section className="landing_text">
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
				</div>

				<div className="desktop">
					<section className="dt_landing">
						<section className="left_landing">
							<div className="dt_title">
								<h1>
									Take a Valk on
									<br />
									the <span>Vild</span> Side
								</h1>
							</div>
							<div className="dt_sub_title">
								<h3>From the Mind and Hand of Adrian van der Valk</h3>
							</div>
							<div className="dt_sub_imgs_container">
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
							</div>
						</section>
						<section className="right_landing">
							<div className="dt_hero_img_container">
								<img className="hero" src={hero_img} alt="card_pic" />
							</div>
						</section>
					</section>
				</div>

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
			</div>

			<section className="gallery">
				<section className="gallery_container">
					<div className="gallery_sign_container">
						<img
							className="gallery_sign"
							src={gallery_sign}
							alt="gallery_sign"
						/>
					</div>
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
	.landing {
		/* border: 1px solid red; */
	}
	/* .socials_container, */
	/* .social_links, */
	/* .mobile, */
	/* .mobile *, */
	.desktop,
	/* .desktop *, */
	.dt_landing *,
	.left_landing *,
	.right_landing * {
		/* border: 1px solid blue; */
	}

	// Landing Section
	.landing {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		height: 100vh; /* Fallback for browsers that do not support Custom Properties */
		height: calc(var(--vh, 1vh) * 100);
	}
	.mobile {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 90%;
	}
	.desktop {
		display: none;
	}

	.landing_text {
		width: 100%;
	}
	.landing_text h1,
	h1 span,
	.dt_title {
		font-family: "Lobster", cursive, sans-serif;
		font-size: 4.5rem;
	}
	.landing_text h1 {
		text-align: left;
		line-height: 1;
		padding-left: 1%;
		margin-top: 25%;
	}
	h1 span {
		padding: 0 3.5px 0 1px;
		background-image: linear-gradient(160deg, #ff5cc8, #aa44fa, #4a2dff);
		background-size: 100%;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
	}
	.landing_text h3 {
		font-size: 1.5rem;
		text-align: left;
		width: 60%;
		line-height: 1.3;
	}

	.landing_images,
	.lead_pics {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.landing_images {
		flex-direction: row-reverse;
		width: 100%;
		height: 54%;
	}
	.lead_pics {
		flex-direction: column-reverse;
		height: 100%;
		width: 20%;
	}
	.hero,
	.lead_card {
		border-radius: 5%;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	}
	.hero {
		object-fit: cover;
		height: 100%;
	}
	.lead_card {
		height: 32%;
	}

	.socials_container,
	.social_links {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 70%;
		margin: 0 auto;
	}
	.socials_container {
		width: 100%;
		height: 10%;
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
	.gallery_sign_container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.gallery_sign {
		width: 70%;
		margin: 1.5rem 0 2rem;
		border-radius: 100px;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
	}

	.card,
	.card_wide {
		width: 100%;
		margin-bottom: 2rem;
		border-radius: 4rem;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	}

	.top_pics,
	.body_of_images {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		overflow: visible;
	}

	// FOOTER
	footer {
		text-align: right;
		padding-bottom: 3%;
		font-size: 1.3rem;
	}

	// MEDIA QUERIES
	@media screen and (min-width: 480px) {
		.landing {
			justify-content: center;
		}
		.mobile {
			display: none;
		}
		.desktop {
			display: flex;
			align-items: flex-end;
		}
		.dt_landing {
			display: flex;
			justify-content: space-between;
			height: 87%;
		}
		.left_landing {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 60%;
			height: 100%;
		}

		.dt_title h1,
		.dt_title h1 span {
			font-size: 6.5rem;
		}
		.dt_sub_title {
			font-size: 3.5rem;
		}
		.dt_sub_imgs_container {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.lead_card {
			width: 30%;
			height: 100%;
		}
		.right_landing {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			width: 40%;
		}
		.dt_hero_img_container {
			height: 100%;
		}
		.hero {
			width: 100%;
		}

		.socials_container,
		.social_links {
			width: 100%;
			height: 20%;
		}
		.socials_container {
		}
		.social_links {
			width: 50%;
			height: 100%;
		}
		.icon {
			margin: 0 5%;
		}

		.card {
			width: 49%;
		}
		.gallery {
			background-image: url(${gallery_background_wide});
		}
	}
	@media screen and (orientation: landscape) and (max-device-width: 850px) {
		.landing,
		.desktop {
			height: 100vh; /* Fallback for browsers that do not support Custom Properties */
			height: calc(var(--vh, 1vh) * 80);
		}
		.left_landing {
			width: 50%;
		}
		.right_landing {
			width: 35%;
		}
		.landing_text h1 {
			margin-top: 0%;
		}
		.dt_landing {
			height: 100%;
		}
		.dt_title h1,
		.dt_title h1 span {
			font-size: 3rem;
		}
		.dt_sub_title {
			font-size: 2rem;
		}
		.hero {
			/* height: 100%; */
		}
	}
	@media screen and (min-width: 768px) {
		.landing {
			height: 100vh; /* Fallback for browsers that do not support Custom Properties */
			height: calc(var(--vh, 1vh) * 100);
		}
	}
	@media screen and (min-width: 1024px) {
	}
	@media screen and (min-width: 1200px) {
	}
	@media screen and (min-width: 1300px) {
		.landing,
		.gallery_container,
		footer {
			width: 80%;
		}
		.dt_title h1,
		.dt_title h1 span {
			font-size: 8rem;
		}
		.dt_sub_title {
			font-size: 5rem;
		}
	}
	@media screen and (min-width: 1400px) {
	}
	@media screen and (min-width: 1550px) {
	}
`;

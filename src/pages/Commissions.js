import React from "react";

// pages
import commissions_body_mobile from "../assets/commissions_body_mobile.png";
import commissions_body_desktop from "../assets/commissions_body_desktop.png";

export default function Commissions() {
	return (
		<div>
			<header>
				<h1>Commissions</h1>
				<div>
					<h3>Contact: avdv@email.com </h3>
					<h3>Insta: @riddlemeanade</h3>
				</div>
			</header>
			<section>
				<img
					className="commissions_mobile"
					style={{ width: "100%" }}
					src={commissions_body_mobile}
					alt="commission info"
				/>
				<img
					className="commissions_desktop"
					style={{ width: "100%" }}
					src={commissions_body_desktop}
					alt="commission info"
				/>
			</section>
		</div>
	);
}

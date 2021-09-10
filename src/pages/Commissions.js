import React from "react";
import styled from "styled-components";

// pages
import commissions_page_mobile from "../assets/commission_page/commissions_page_mobile.png";
import commissions_page_desktop from "../assets/commission_page/commissions_page_desktop.png";
import commissions_page_desktop_wide from "../assets/commission_page/commissions_page_desktop_wide.png";

export default function Commissions() {
	return (
		<StyledCommissions>
			<section>
				<img
					className="commissions_mobile"
					src={commissions_page_mobile}
					alt="commission info"
				/>
				<img
					className="commissions_desktop"
					src={commissions_page_desktop}
					alt="commission info"
				/>
				<img
					className="commissions_desktop_wide"
					src={commissions_page_desktop_wide}
					alt="commission info"
				/>
			</section>
		</StyledCommissions>
	);
}

const StyledCommissions = styled.div`
	.contact_info {
		text-align: center;
		font-size: 2rem;
	}
	.commissions_desktop_wide,
	.commissions_desktop,
	.commissions_mobile {
		width: 100%;
	}
	.commissions_desktop,
	.commissions_desktop_wide {
		display: none;
	}
	@media screen and (min-width: 480px) {
	}
	@media screen and (min-width: 768px) {
		.commissions_mobile {
			display: none;
		}
		.commissions_desktop {
			display: block;
		}
	}
	@media screen and (min-width: 1024px) {
	}
	@media screen and (min-width: 1200px) {
	}
	@media screen and (min-width: 1300px) {
	}
	@media screen and (min-width: 1400px) {
		.commissions_desktop {
			display: none;
		}
		.commissions_desktop_wide {
			display: block;
		}
	}
	@media screen and (min-width: 1550px) {
	}
`;

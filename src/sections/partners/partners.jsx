import React from 'react';

import CoderkinLogo from '../../images/coderkin_logo.svg';
import RecLogo from '../../images/rec_logo.svg';
import VisualLogo from '../../images/visual_logo.svg';

import './partners.styles.scss';

const PartnersSection = () => {
	return (
		<section id="partners" className="container">
			<h2 className="heading">Partneri</h2>
			<div className="partners__container">
				<CoderkinLogo />
				<RecLogo />
				<VisualLogo />
			</div>
			<a
				href="https://www.patreon.com/checkvidio"
				target="_blank"
				rel="noopener noreferrer"
				className="support-us__link"
			>
				Chcem podporiť aj ja!
			</a>
		</section>
	);
};

export default PartnersSection;

import React from 'react';
import CrossPlatform from '../../images/cross_platform.svg';
import EasyToUse from '../../images/easy_to_use.svg';
import EmailNotificationSystem from '../../images/email_notification.svg';
import './features.styles.scss';

const FeaturesSection = () => {
	return (
		<section id="features" className="container">
			<h2 className="heading">Zvýš svoju efektivitu pri práci</h2>
			<div className="feature">
				<div className="feature__container">
					<h3 className="sub-heading">Multy platformova aplikácia</h3>
					<p>CheckVid.io funguje na každom zariadení!</p>
					<p>Maj pod kontrolou prácu s klientom pohodlne ako na PC tak na telefóne.</p>
				</div>
				<CrossPlatform className="illustration" />
			</div>
			<div className="feature">
				<div className="feature__container reverse">
					<h3 className="sub-heading">Emailový notifikačný systém</h3>
					<p>Pohodlne odosielajte emaily vaším klientom a informujte ich v akom stave je ich zákazka.</p>
				</div>
				<EmailNotificationSystem className="illustration" />
			</div>
			<div className="feature">
				<div className="feature__container">
					<h3 className="sub-heading">Jednoduchý na používanie</h3>
					<p>CheckVid.io funguje na každom zariadení!</p>
					<p>Moderný jednoduchý design zaručuje prehľadné ovládanie.</p>
				</div>
				<EasyToUse className="illustration" />
			</div>
		</section>
	);
};

export default FeaturesSection;

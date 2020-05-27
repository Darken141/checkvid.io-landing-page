import React from 'react';

import './pricing.styles.scss';

const PricingSection = () => {
	return (
		<section id="pricing" className="container">
			<h2 className="heading">Cenník</h2>

			<div className="pricing">
				<div className="pricing__container">
					<h3 className="pricing__container--title">Freelance</h3>
					<p className="pricing__container--price">??-€</p>
					<ul className="pricing__container--benefits">
						<li>Free</li>
						<li>Free</li>
						<li>Free</li>
					</ul>
				</div>

				<div className="pricing__container active">
					<h3 className="pricing__container--title">Vyskúšaj teraz</h3>
					<p className="pricing__container--price">Zadarmo</p>
					<ul className="pricing__container--benefits">
						<li>Posielaj e-maily</li>
						<li>Zbieraj feedback</li>
						<li>Ušetrí čas</li>
						<li>Z efektívni si robotu</li>
					</ul>

					<a href="https://www.app.checkvid.io/login" target="_blank" rel="noopener noreferrer">
						Vyskúšať
					</a>
				</div>
				<div className="pricing__container ">
					<h3 className="pricing__container--title">Biznis!</h3>
					<p className="pricing__container--price">??-€</p>
					<ul className="pricing__container--benefits">
						<li>Free</li>
						<li>Free</li>
						<li>Free</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default PricingSection;

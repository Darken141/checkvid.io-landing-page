import React, { useState, useContext } from 'react';
import { HeroSectionContext } from '../context/Hero-section';
import EmailValidator from 'email-validator';

import { addEmailToList } from '../firebase/firebase.utils';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroIllu from '../images/hero_illu.svg';
import CustomInput from '../components/custom-input/custom-input';
import PartnersSection from '../sections/partners/partners';
import FeaturesSection from '../sections/features/features';

const IndexPage = () => {
	const [ email, setEmail ] = useState('');
	const { SEOTitle, heading, subHeading, CTA } = useContext(HeroSectionContext);

	const emailInput = {
		label: 'Váš email: (*)',
		name: 'email',
		type: 'email',
		placeholder: 'example@email.com',
		value: email,
		handleChange: (e) => setEmail(e.target.value),
		isRequired: true
	};

	const handleSendEmail = (e) => {
		e.preventDefault();
		if (EmailValidator.validate(email)) addEmailToList(email);
		setEmail('');
	};

	return (
		<Layout>
			<SEO title={SEOTitle} />
			<section id="hero" className="container">
				<div className="content">
					<h1>{heading}</h1>
					<p>{subHeading}</p>
					<div>
						<CustomInput {...emailInput} />
						<button className="cta" onClick={(e) => handleSendEmail(e)}>
							{CTA}
						</button>
					</div>
				</div>
				<div className="illustration">
					<HeroIllu />
				</div>
			</section>
			<PartnersSection />
			<FeaturesSection />
		</Layout>
	);
};

export default IndexPage;

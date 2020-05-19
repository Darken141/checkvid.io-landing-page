import React, { useState } from 'react';
import { Link } from 'gatsby';
import EmailValidator from 'email-validator';

import { addEmailToList } from '../firebase/firebase.utils';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroIllu from '../images/hero_illu.svg';
import CustomInput from '../components/custom-input/custom-input';
import { store } from 'react-notifications-component';

const IndexPage = () => {
	const [ email, setEmail ] = useState('');

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
			<SEO title="Domovská stránka" />
			<section id="hero" className="container">
				<div className="content">
					<h1>Video software pre zber odozvy.</h1>
					<p>
						Checkvid.io ti umožní efektivne zberať feedback od tvojich klientov a tým ti zjednodušiť prácu.
					</p>
					<div>
						<CustomInput {...emailInput} />
						<div className="cta" onClick={(e) => handleSendEmail(e)}>
							CHCEM BYŤ INFORMOVANÝ
						</div>
					</div>
				</div>
				<div className="illustration">
					<HeroIllu />
				</div>
			</section>
		</Layout>
	);
};

export default IndexPage;

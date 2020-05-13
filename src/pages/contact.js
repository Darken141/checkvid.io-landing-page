import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import CustomInput from '../components/custom-input/custom-input';
import CustomTextarea from '../components/custom-textarea/custom-textarea';
import CustomButton from '../components/custom-button/custom-button';

import Mailbox from '../images/mailbox.svg';

import '../styles/contact.styles.scss';

const Contact = () => {
	const [ email, setEmail ] = useState('');
	const [ subject, setSubject ] = useState('');
	const [ messsage, setMesssage ] = useState('');

	const emailInput = {
		label: 'Váš email: (*)',
		name: 'email',
		type: 'email',
		placeholder: 'example@email.com',
		value: email,
		handleChange: (e) => setEmail(e.target.value),
		isRequired: true
	};

	const subjectInput = {
		label: 'Váš predmet: (*)',
		name: 'subject',
		type: 'text',
		placeholder: 'Predmet',
		value: subject,
		handleChange: (e) => setSubject(e.target.value),
		isRequired: true
	};

	const messageTextarea = {
		label: 'Váša správa: (*)',
		name: 'message',
		rows: '8',
		placeholder: 'Dobrý deň, ...',
		value: messsage,
		handleChange: (e) => setMesssage(e.target.value),
		isRequired: true
	};

	return (
		<Layout>
			<SEO title="Kontaktuj nás" />
			<section id="contact" className="container">
				<h1>Máš otázky? Neváhaj nás kontaktovať, radi ich zodpovieme.</h1>
				<div className="flex">
					<form
						className="contact-form shadow"
						name="contact"
						method="post"
						data-netlify="true"
						data-netlify-honeypot="bot-field"
					>
						<input type="hidden" name="form-name" value="contact" />
						<CustomInput {...emailInput} />
						<CustomInput {...subjectInput} />
						<CustomTextarea {...messageTextarea} />
						<CustomButton />
					</form>

					<div className="illustration">
						<Mailbox />
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Contact;

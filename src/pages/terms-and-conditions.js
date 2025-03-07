import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const TermAndConditions = () => {
	return (
		<Layout>
			<SEO title="Terms & Conditions" />
			<section id="terms-and-conditions" className="container">
				<h1>Terms and Conditions ("Terms")</h1>

				<p>Last updated: May 12 2020</p>

				<p>
					Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the
					https://www.CheckVid.io website (the "Service") operated by CheckVid.io ("us", "we", or "our").
				</p>

				<p>
					Your access to and use of the Service is conditioned on your acceptance of and compliance with these
					Terms. These Terms apply to all visitors, users and others who access or use the Service.
				</p>

				<p>
					By accessing or using the Service you agree to be bound by these Terms. If you disagree with any
					part of the terms then you may not access the Service.
				</p>

				<h2>Links To Other Web Sites</h2>

				<p>
					Our Service may contain links to third-party web sites or services that are not owned or controlled
					by CheckVid.io.
				</p>
				<p>
					CheckVid.io has no control over, and assumes no responsibility for, the content, privacy policies,
					or practices of any third party web sites or services. You further acknowledge and agree that
					CheckVid.io shall not be responsible or liable, directly or indirectly, for any damage or loss
					caused or alleged to be caused by or in connection with use of or reliance on any such content,
					goods or services available on or through any such web sites or services.
				</p>
				<h2>Termination</h2>

				<p>
					We may terminate or suspend access to our Service immediately, without prior notice or liability,
					for any reason whatsoever, including without limitation if you breach the Terms.
				</p>

				<p>
					All provisions of the Terms which by their nature should survive termination shall survive
					termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity
					and limitations of liability.
				</p>

				<h2>Changes</h2>

				<p>
					We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
					revision is material we will try to provide at least 30 days' notice prior to any new terms taking
					effect. What constitutes a material change will be determined at our sole discretion.
				</p>

				<h2>Contact Us</h2>
				<p>If you have any questions about these Terms, please contact us.</p>
			</section>
		</Layout>
	);
};

export default TermAndConditions;

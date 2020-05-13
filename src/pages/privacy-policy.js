import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PrivacyPolicy = () => {
	return (
		<Layout>
			<SEO title="Privacy policy & GDPR" />
			<section id="privacy-policy-and-grdp" className="container">
				<h1>GDPR Privacy Policy of CheckVid.io</h1>

				<p>Last updated: May 12, 2020</p>

				<h2>Definitions</h2>
				<ul>
					<li>
						CheckVid.io
						<ul>
							<li>CheckVid.io means My Company</li>
						</ul>
					</li>

					<li>
						GDPR
						<ul>
							<li>General Data Protection Regulation Act.</li>
						</ul>
					</li>

					<li>
						Data Controller
						<ul>
							<li>
								Data Controller means the natural or legal person who (either alone or jointly or in
								common with other persons) determines the purposes for which and the manner in which any
								personal information are, or are to be, processed.
							</li>
						</ul>
					</li>

					<li>
						Data Processor
						<ul>
							<li>
								Data Processor means any natural or legal person who processes the data on behalf of the
								Data Controller.
							</li>
						</ul>
					</li>

					<li>
						Data Subject
						<ul>
							<li>
								Data Subject is any living individual who is using our Service and is the subject of
								Personal Data.
							</li>
						</ul>
					</li>
				</ul>

				<h2>1. Principles for processing personal data</h2>

				<p>Our principles for processing personal data are:</p>

				<ul>
					<li>
						Fairness and lawfulness. When we process personal data, the individual rights of the Data
						Subjects must be protected. All personal data must be collected and processed in a legal and
						fair manner.
					</li>
					<li>
						Restricted to a specific purpose. The personal data of Data Subject must be processed only for
						specific purposes.
					</li>
					<li>
						Transparency. The Data Subject must be informed of how his/her data is being collected,
						processed and used.
					</li>
				</ul>

				<h2>2. What personal data we collect and process</h2>

				<p>
					CheckVid.io collects several different types of personal data for various purposes. Personal Data
					may include, but is not limited to:
				</p>

				<ul>
					<li>Email address</li>
					<li>First name and last name</li>
					<li>Phone number</li>
					<li>Address, State, Province, ZIP/Postal code, City</li>
				</ul>

				<h2>3. How we use the personal data</h2>

				<p>CheckVid.io uses the collected personal data for various purposes:</p>

				<ul>
					<li>To provide you with services</li>
					<li>To notify you about changes to our services and/or products</li>
					<li>To provide customer support</li>
					<li>To gather analysis or valuable information so that we can improve our services</li>
					<li>To detect, prevent and address technical issues</li>
				</ul>

				<h2>4. Legal basis for collecting and processing personal data</h2>

				<p>
					CheckVid.io legal basis for collecting and using the personal data described in this Data Protection
					Policy depends on the personal data we collect and the specific context in which we collect the
					information:
				</p>

				<ul>
					<li>CheckVid.io needs to perform a contract with you</li>
					<li>You have given CheckVid.io permission to do so</li>
					<li>Processing your personal data is in CheckVid.io legitimate interests</li>
					<li>CheckVid.io needs to comply with the law</li>
				</ul>

				<h2>5. Retention of personal data</h2>

				<p>
					CheckVid.io will retain your personal information only for as long as is necessary for the purposes
					set out in this Data Protection Policy.
				</p>
				<p>
					CheckVid.io will retain and use your information to the extent necessary to comply with our legal
					obligations, resolve disputes, and enforce our policies.
				</p>

				<h2>6. Data protection rights</h2>

				<p>
					If you are a resident of the European Economic Area (EEA), you have certain data protection rights.
					If you wish to be informed what personal data we hold about you and if you want it to be removed
					from our systems, please contact us.
				</p>

				<p>In certain circumstances, you have the following data protection rights:</p>

				<ul>
					<li>The right to access, update or to delete the information we have on you</li>
					<li>The right of rectification</li>
					<li>The right to object</li>
					<li>The right of restriction</li>
					<li>The right to data portability</li>
					<li>The right to withdraw consent</li>
				</ul>
			</section>
		</Layout>
	);
};

export default PrivacyPolicy;

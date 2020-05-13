import React from 'react';
import { Link } from 'gatsby';

import './footer.styles.scss';

const Footer = () => {
	return (
		<footer id="footer">
			<div className="container flex">
				<div className="sitemap">
					<p>Sitemap</p>
					<ul>
						<li>
							<Link to="/">Domov</Link>
						</li>
						<li>
							<Link to="/contact">Kontakt</Link>
						</li>

						<li>
							<Link to="/privacy-policy">Privacy policy & GDPR</Link>
						</li>

						<li>
							<Link to="/terms-and-conditions">Terms & conditions</Link>
						</li>
					</ul>
				</div>
				<div>
					© {new Date().getFullYear()}{' '}
					<a id="coderkin" href="https://www.coderkin.com">
						CODERKIN
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

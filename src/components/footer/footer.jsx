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

				<div className="social-media-container">
					<p>
						Sleduj novinky na:{' '}
						<a
							href="https://www.facebook.com/CheckVidio-102042618125958"
							target="_blank"
							rel="noopener noreferrer"
						>
							Facebook-u
						</a>{' '}
						a{' '}
						<a href="https://www.instagram.com/checkvid.io/" target="_blank" rel="noopener noreferrer">
							Instagram-e
						</a>
					</p>
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

import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroIllu from '../images/hero_illu.svg';

const IndexPage = () => (
	<Layout>
		<SEO title="Domovská stránka" />
		<section id="hero" className="container">
			<div className="content">
				<h1>Stránka je aktuálne vo výstavbe</h1>
				<p>Software ktorý ti umožní efektivne zberať odozvu od tvojich klientov.</p>
				<p>Máš záujem?</p>
				<Link className="cta" to="/contact">
					Napiš nám
				</Link>
				<div className="social-media-container">
					<p>
						alebo sleduj novinky na{' '}
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
			</div>
			<div className="illustration">
				<HeroIllu />
			</div>
		</section>
	</Layout>
);

export default IndexPage;

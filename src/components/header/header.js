import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './header.styles.scss';

const Header = ({ siteTitle }) => (
	<header className="header">
		<div className="flex-container">
			<div className="logo-container">
				<Link to="/" className="logo">
					{siteTitle}
				</Link>
			</div>

			<nav className="navbar">
				<ul className="navbar-nav">
					<li className="navbar-nav__item">
						<Link to="/contact" className="cta">
							Kontakt
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;

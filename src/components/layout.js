/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { HeroSectionProvider } from '../context/Hero-section';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import ReactNotification from 'react-notifications-component';

import Header from './header/header';
import Footer from './footer/footer';
import './layout.scss';
import 'react-notifications-component/dist/theme.css';

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<HeroSectionProvider>
			<div className="content-container">
				<Header siteTitle={data.site.siteMetadata.title} />
				<main>{children}</main>
				<Footer />

				<ReactNotification />
			</div>
		</HeroSectionProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;

import React, { createContext } from 'react';

export const HeroSectionContext = createContext({
	lang: 'sk',
	SEOTitle: 'Domovská stránka',
	heading: 'Video kolaborácia a zber odozvy.',
	subHeading: 'Checkvid.io ti umožní efektivne zberať feedback od tvojich klientov a tým ti zjednodušiť prácu.',
	CTA: 'CHCEM BYŤ INFORMOVANÝ'
});

export const HeroSectionProvider = ({ children }) => {
	return <HeroSectionContext.Provider value={{}}>{children}</HeroSectionContext.Provider>;
};

import firebase from 'firebase/app';
import 'firebase/firestore';
import { store } from 'react-notifications-component';

import {
	apiKey,
	appId,
	authDomain,
	databaseURL,
	measurementId,
	messagingSenderId,
	projectId,
	storageBucket
} from '../../env/index';

// console.log(process.env.GATSBY_API_KEY);

// const firebaseConfig = {
// 	apiKey: process.env.GATSBY_API_KEY,
// 	authDomain: process.env.GATSBY_AUTH_DOMAIN,
// 	databaseURL: process.env.GATSBY_DATABASE_URL,
// 	projectId: process.env.GATSBY_PROJECT_ID,
// 	storageBucket: process.env.GATSBY_STORAGE_BUCKET,
// 	messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
// 	appId: process.env.GATSBY_APP_ID,
// 	measurementId: process.env.GATSBY_MEASUREMENT_ID
// };

const firebaseConfig = {
	apiKey: apiKey,
	authDomain: authDomain,
	databaseURL: databaseURL,
	projectId: projectId,
	storageBucket: storageBucket,
	messagingSenderId: messagingSenderId,
	appId: appId,
	measurementId: measurementId
};

export const addEmailToList = async (email) => {
	if (!email) return;
	const emailRef = firestore.doc(`email-list/${email}`);
	const emailSnapshot = await emailRef.get();
	if (emailSnapshot.exists) {
		return store.addNotification({
			title: 'Chyba',
			message: 'Váš email už je zaregistrovaný',
			type: 'warning',
			insert: 'top',
			container: 'bottom-right',
			animationIn: [ 'animated', 'fadeIn' ],
			animationOut: [ 'animated', 'fadeOut' ],
			dismiss: {
				duration: 5000,
				onScreen: true
			}
		});
	}
	try {
		await emailRef.set({
			email,
			createAt: new Date()
		});
		store.addNotification({
			title: 'Úspešne',
			message: 'Váš email bol úspešne odoslaný',
			type: 'success',
			insert: 'top',
			container: 'bottom-right',
			animationIn: [ 'animated', 'fadeIn' ],
			animationOut: [ 'animated', 'fadeOut' ],
			dismiss: {
				duration: 5000,
				onScreen: true
			}
		});
	} catch (error) {
		console.log(error);
	}
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

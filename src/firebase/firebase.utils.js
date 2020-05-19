import firebase from 'firebase/app';
import 'firebase/firestore';

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
	try {
		await emailRef.set({
			email,
			createAt: new Date()
		});
	} catch (error) {
		console.log(error);
	}
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

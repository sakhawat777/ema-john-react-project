// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBGfail5Zg0Dlm4pliq9mE3l0aLWSB8zxc',
	authDomain: 'ema-john-project-firebase-auth.firebaseapp.com',
	projectId: 'ema-john-project-firebase-auth',
	storageBucket: 'ema-john-project-firebase-auth.appspot.com',
	messagingSenderId: '5693960101',
	appId: '1:5693960101:web:238a90f0a736a721b3424c',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const FirebaseApp = () => {
	initializeApp(firebaseConfig);
};
export default FirebaseApp;

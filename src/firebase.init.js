import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYMR1JwnAvv4VECmK5ybVRxD2OFOeMmUc",
  authDomain: "manufacture-website-1a55c.firebaseapp.com",
  projectId: "manufacture-website-1a55c",
  storageBucket: "manufacture-website-1a55c.appspot.com",
  messagingSenderId: "935165087667",
  appId: "1:935165087667:web:c06660e02a4694eb6505c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
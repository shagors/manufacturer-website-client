import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_api_Key,
//   authDomain: process.env.REACT_APP_auth_Domain,
//   projectId: process.env.REACT_APP_project_Id,
//   storageBucket: process.env.REACT_APP_storage_Bucket,
//   messagingSenderId: process.env.REACT_APP_messaging_Sender_Id,
//   appId: process.env.REACT_APP_app_Id,
// };

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

const auth = getAuth(app);

export default auth;
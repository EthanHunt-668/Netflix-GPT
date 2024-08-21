import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGXvTJdUVvxRQj-2clxGehs1eYNk0zTgU",
  authDomain: "netflixgpt-93466.firebaseapp.com",
  projectId: "netflixgpt-93466",
  storageBucket: "netflixgpt-93466.appspot.com",
  messagingSenderId: "861991355868",
  appId: "1:861991355868:web:9e53f8ba16be107a5d3b19",
  measurementId: "G-FTFN9TT8PK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
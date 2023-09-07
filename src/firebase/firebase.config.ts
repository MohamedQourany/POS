import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjoiaoZ4MZ2DfnIa6C2BkCEdwm5KDRaog",
  authDomain: "benei-pos.firebaseapp.com",
  projectId: "benei-pos",
  storageBucket: "benei-pos.appspot.com",
  messagingSenderId: "804638688229",
  appId: "1:804638688229:web:ca6b7cc224e6b579f6250c",
  measurementId: "G-9J92PXQMR4",
};
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfb_wCiMh4UXHCp0F24iLNN3dyHZOxZAM",
  authDomain: "giggy-live.firebaseapp.com",
  projectId: "giggy-live",
  storageBucket: "giggy-live.appspot.com",
  messagingSenderId: "137323767299",
  appId: "1:137323767299:web:33580ad779d2f225e41036",
  measurementId: "G-D91DP36CZ3",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcNE8gyUquvKe9qk4-ohW8niE29tRuJJQ",
  authDomain: "testapp-65d5d.firebaseapp.com",
  projectId: "testapp-65d5d",
  storageBucket: "testapp-65d5d.firebasestorage.app",
  messagingSenderId: "319043710187",
  appId: "1:319043710187:web:4f9cfe5ed4a7caff0ae2ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export default app
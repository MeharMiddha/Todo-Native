import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCdyOmxEUO9yesH8gm5OImI2r27Rhys9T0",
    authDomain: "firestreamtodo.firebaseapp.com",
    projectId: "firestreamtodo",
    storageBucket: "firestreamtodo.appspot.com",
    messagingSenderId: "923401143801",
    appId: "1:923401143801:web:85f6919c691116b9312928"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

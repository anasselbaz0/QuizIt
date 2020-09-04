import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC3KXxaw5r6UnGfOeFIlTzqRXVgj_8EsE4',
  authDomain: 'passthequiz.firebaseapp.com',
  databaseURL: 'https://passthequiz.firebaseio.com',
  projectId: 'passthequiz',
  storageBucket: 'passthequiz.appspot.com',
  messagingSenderId: '61831380077',
  appId: '1:61831380077:web:506ab12f81a93b354a1364',
  measurementId: 'G-PL5SP66GB8',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const quizzesCollection = firebase.database().ref("quizzes");

// Firebase functions
export const fbSignup = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const fbLogin = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const addQuizToCollection = (quiz) =>
  quizzesCollection.push(quiz);

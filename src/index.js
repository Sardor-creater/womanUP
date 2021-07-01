import React, {createContext} from 'react';
import {render} from 'react-dom';
import './index.css';
import {App} from './App';

import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';


/**
 * Firebase app config object.
 * All property values come from Firebase.
 * @property {string} apiKey
 * @property {string} authDomain
 * @property {string} databaseURL
 * @property {string} projectId
 * @property {string} storageBucket
 * @property {string} messagingSenderId
 * @property {string} appId
 * @property {string} measurementId
 */

firebase.initializeApp({
  apiKey: "AIzaSyDgxtaXsdHZKKjEwWAdCWnKDtC-uVsm6UA",
  authDomain: "womanup-8d3cf.firebaseapp.com",
  projectId: "womanup-8d3cf",
  storageBucket: "womanup-8d3cf.appspot.com",
  messagingSenderId: "604194583031",
  appId: "1:604194583031:web:981e893885051b31b13ef2",
  measurementId: "G-32J4TRR069"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

export const Context = createContext(null)

render(
  <Context.Provider value={{
      firebase,
      auth,
      firestore
  }}>
      <App />
  </Context.Provider>,
document.getElementById('root')
);

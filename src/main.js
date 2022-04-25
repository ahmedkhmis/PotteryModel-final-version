import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'jquery'
import 'popper.js'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/app.scss'

const firebaseConfig = {
    apiKey: "AIzaSyA_X1QuRN2koKOaLyo5UWKA9In8arWyye8",
    authDomain: "min-proj.firebaseapp.com",
    projectId: "min-proj",
    storageBucket: "min-proj.appspot.com",
    messagingSenderId: "140931998661",
    appId: "1:140931998661:web:d5a977c143fd3330b721ac"
  };
firebase.initializeApp(firebaseConfig)
createApp(App).use(router).mount('#app')

import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCHMlVwYvUrsuitoVaEgDisVOzxYBVXRJk",
    authDomain: "portfolio-447d9.firebaseapp.com",
    databaseURL: "https://portfolio-447d9.firebaseio.com",
    projectId: "portfolio-447d9",
    storageBucket: "portfolio-447d9.appspot.com",
    messagingSenderId: "887812631692",
    appId: "1:887812631692:web:218be4d2b9c431546fdfa9",
    measurementId: "G-64RL86NXWN"
  }

  firebase.initializeApp(config)

  const messagesRef = firebase.database().ref("messages")

  export const saveMessage = (obj) => {
      const newMessageRef = messagesRef.push()
      newMessageRef.set(obj)
  }

  export const resumeRef = firebase.storage().ref().child("Resume.pdf");
  

import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAVZc3K1XR_FqrFe3RyYdEBBh3kg1PfIOw",
  authDomain: "spy-js-98a1f.firebaseapp.com",
  projectId: "spy-js-98a1f",
  storageBucket: "spy-js-98a1f.appspot.com",
  messagingSenderId: "1025865953168",
  appId: "1:1025865953168:web:7076890a26c465cd8f4d15",
  measurementId: "G-E37N6T2RQC",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)
/* firebase.initializeApp(firebaseConfig); */

/* Github */

export const recoveryLoginWithGithub = (setUser) => {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user)
    } else {
      console.log("No hay ningun usuario logueado")
    }
  })
}

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}

/* Email and password */
export const loginWithEmailAndPassword = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {})
    .catch((error) => {
      console.log(error)
      // ..
    })
}

// singOut
export const singOut = (setUser) => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      setUser(null)
    })
    .catch(error => {
      console.log(error);
    })
}

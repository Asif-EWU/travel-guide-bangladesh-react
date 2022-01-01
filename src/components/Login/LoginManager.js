import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    else {
        firebase.app(); // if already initialized, use that one
    }
}

const signedOutUser = {
    name: '',
    email: '',
    photo: '',
    error: '',
    success: false
};

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            };
            setUserToken();
            return signedInUser;
        })
        .catch(error => {
            signedOutUser.error = error.message;
            return signedOutUser;
        });
};

export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    return firebase
        .auth()
        .signInWithPopup(fbProvider)
        .then((res) => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            };
            return signedInUser;
        })
        .catch((error) => {
            signedOutUser.error = error.message;
            return signedOutUser;
        });
};

export const handleSignOut = () => {
    return firebase.auth().signOut()
        .then(() => {
            return signedOutUser;
        }).catch(error => {
            console.log(error);
        });
};

const setUserToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        sessionStorage.setItem('token', idToken);
    }).catch(function(error) {
    // Handle error
    });
      
}
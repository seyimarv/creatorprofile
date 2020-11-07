import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBaXiDPu36t4wWCaTcThaYgkNnsDC3BdmI",
    authDomain: "creatorprofile-8a2c0.firebaseapp.com",
    databaseURL: "https://creatorprofile-8a2c0.firebaseio.com",
    projectId: "creatorprofile-8a2c0",
    storageBucket: "creatorprofile-8a2c0.appspot.com",
    messagingSenderId: "158519489167",
    appId: "1:158519489167:web:d96bfc55aa9dd8fe33b6fa",
    measurementId: "G-7K9WQYKNTJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        userName: displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// export const editUserProfile = () => {
//   const userRef= firebase.firestore()
//   userRef.collection(`users/${userAuth.uid}`).doc(userAuth.uid).update({
      
//   })
// }

export const convertNotesSnapshotToMap = (notes) => {
  const transformedNote =notes.docs.map(doc => {
    const note = doc.data()
       return {
           id: doc.id,
           note
  }
  });
  return transformedNote.reduce((accumulator, note) => {
      accumulator[note.title.toLowerCase()] = note;
      return accumulator;
      
  }, {});
  
}
export const addNoteCollection = (collectionKey, NotesToAdd) => {
  const notesRef = firestore.collection(collectionKey)
  console.log(notesRef)
}



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
  
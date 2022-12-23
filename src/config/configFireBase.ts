import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: '',

  authDomain: '',

  projectId: '',

  storageBucket: '',

  messagingSenderId: '',

  appId: '',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

// const CollectionData = collection(db, "list");

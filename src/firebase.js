// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBCkuS6wHwhaA4PBJjWXbRUnBafEmhpetU',
  authDomain: 'katsuraba-kitchen.firebaseapp.com',
  projectId: 'katsuraba-kitchen',
  storageBucket: 'katsuraba-kitchen.appspot.com',
  messagingSenderId: '304835102641',
  appId: '1:304835102641:web:5640a1ce255a4b55241f90',
  databaseURL: '<your-database-url>',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const storage = getStorage(app);

function listAll(folder) {
  const storageRef = getStorage().ref();
  let listRef = storageRef.child(folder);

  listRef
    .listAll(listRef)
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
      });
      res.items.forEach((itemRef) => {
        itemRef.getDownloadURL().then((url) => {
          // console.log(url);
        });
      });
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
    });
}

export { db, storage, listAll };
// export default db;

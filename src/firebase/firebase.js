import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// firebase.database().ref('notes').push({
//     title: '2nd',
//     body: 'test2'
// });

// firebase.database().ref('notes/-LCzA3PNCoVnLjHv4Xib').update({
//     body: 'update'
// });

// firebase.database().ref().set(notes);

// firebase.database().ref().set({
//     name: 'Srikanth',
//     age: 30,
//     isSingle: true,
//     location: {
//         city: 'Peterborough',
//         country: 'UK'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log(e);
// });

// firebase.database().ref('isSingle').remove().then(() => {
//     console.log('Data is removed');
// }).catch((e) => {
//     console.log(e);
// });

// firebase.database().ref().update({
//     name: 'Sri',
//     job: 'Web Developer'
// }).then(() => {
//     console.log('Data is updated');
// }).catch((e) => {
//     console.log(e);
// });

// firebase.database().ref().once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log(e);
// });

// firebase.database().ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });
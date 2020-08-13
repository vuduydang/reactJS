import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAV-DcNIk7pIQAWz_Tiq-O86q9nEbFHStI",
        authDomain: "reactjs-962e0.firebaseapp.com",
        databaseURL: "https://reactjs-962e0.firebaseio.com",
        projectId: "reactjs-962e0",
        storageBucket: "reactjs-962e0.appspot.com",
        messagingSenderId: "792726740366",
        appId: "1:792726740366:web:f985bb1ace0cbab23c18df"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase

import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBbYcdcD-_9wvsaDcB_E2klugY0vFawsHA",
  authDomain: "fir-react-fcm.firebaseapp.com",
  projectId: "fir-react-fcm",
  storageBucket: "fir-react-fcm.appspot.com",
  messagingSenderId: "766739444064",
  appId: "1:766739444064:web:51ee36a7acadeb7a5dee05",
};

firebase.initializeApp(config);

export default firebase;

importScripts("https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.8.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBbYcdcD-_9wvsaDcB_E2klugY0vFawsHA",
  projectId: "fir-react-fcm",
  messagingSenderId: "766739444064",
  appId: "1:766739444064:web:51ee36a7acadeb7a5dee05",
});

const initMessaging = firebase.messaging();

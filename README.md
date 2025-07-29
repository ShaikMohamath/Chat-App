# 💬 Realtime Chat App

A real-time chat application built with **HTML**, **CSS**, **JavaScript**, and **Firebase Realtime Database**.

> 🚀 Developed by [Shaik Mohamath](https://github.com/ShaikMohamath)

---

## 🔥 Features

- 🔁 Realtime messaging
- 🧼 Clean & responsive design
- 📡 Firebase Realtime DB backend
- ⚙️ No frameworks

---

## 🛠 Technologies

- HTML5
- CSS3
- JavaScript
- Firebase

---

## 🚀 How to Use

1. **Download or clone this repo**
2. Create a file `firebase-config.js` (not included in GitHub)
3. Paste your Firebase config:

```js
const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "your-app.firebaseapp.com",
  databaseURL: "https://your-db.firebaseio.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"

};
firebase.initializeApp(firebaseConfig);

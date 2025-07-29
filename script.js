document.addEventListener("DOMContentLoaded", function () {
  const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "your-app-id.firebaseapp.com",
  databaseURL: "https://your-app-id-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "your-app-id",
  storageBucket: "your-app-id.appspot.com",
  messagingSenderId: "XXXXXXX",
  appId: "X:XXXXXXX:web:XXXXXX"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  // Prompt user for name
  let userId = prompt("Enter your name:");
  if (!userId || userId.trim() === "") {
    userId = "Anonymous";
    alert("No name entered. Using 'Anonymous'");
  }

  // DOM elements
  const messageInput = document.getElementById("messageInput");
  const sendBtn = document.getElementById("sendBtn");
  const chatBox = document.getElementById("chatBox");

  // Send message
  function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== "") {
      db.ref("messages").push({
        user: userId,
        text: message,
        timestamp: Date.now()
      });
      messageInput.value = "";
    }
  }

  // Event: send button click
  sendBtn.addEventListener("click", sendMessage);

  // Event: Enter key press
  messageInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Listen for new messages
  db.ref("messages").on("child_added", (snapshot) => {
    const message = snapshot.val();
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");

    // Display username and message
    messageElement.innerHTML = `<strong>${message.user}:</strong> ${message.text}`;

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  });
});

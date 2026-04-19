<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAjxVMqMG6y9PlTmsnjaeKzFvlPRQcK0P8",
    authDomain: "testing-1-58634.firebaseapp.com",
    projectId: "testing-1-58634",
    storageBucket: "testing-1-58634.firebasestorage.app",
    messagingSenderId: "773650320105",
    appId: "1:773650320105:web:fdd73767e2d1181e9b7e78",
    measurementId: "G-DXY1BB24PX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
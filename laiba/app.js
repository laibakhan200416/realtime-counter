

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  import { getDatabase, ref, set, onValue } from 
  "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js"; 
 
  const firebaseConfig = {
    apiKey: "AIzaSyBrq54qxftOfGoUphyT6w8L2OakOeMDVVg",
    authDomain: "realtime-counter-c55d8.firebaseapp.com",
    projectId: "realtime-counter-c55d8",
    storageBucket: "realtime-counter-c55d8.firebasestorage.app",
    messagingSenderId: "589115521076",
    appId: "1:589115521076:web:61871db1f2f0824950f261",
    measurementId: "G-ETM4LH017N"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app); 
  const counterRef = ref(db, "counter"); 

  function updateCounter(value) {     
    set(counterRef, value); 
} 
document.getElementById("increment").addEventListener("click", function () { 
    let count = Number(document.getElementById("counter").innerText);     
    updateCounter(count + 1); 
}); 
document.getElementById("decrement").addEventListener("click", function () {     
    let count = Number(document.getElementById("counter").innerText);     
    updateCounter(count - 1); 
}); 
onValue(counterRef, function (snapshot) { 
    document.getElementById("counter").innerText = snapshot.val();
 });
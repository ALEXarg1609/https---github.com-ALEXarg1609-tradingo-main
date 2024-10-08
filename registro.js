import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBfOKOxaxSVz_bKnHWPspJ3Q4NuCvCkPsc",
    authDomain: "tradingo-efe2c.firebaseapp.com",
    projectId: "tradingo-efe2c",
    storageBucket: "tradingo-efe2c.appspot.com",
    messagingSenderId: "668388237168",
    appId: "1:668388237168:web:d9b035a34cd686ca91b9b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//submit
const submit = document.getElementById('registro-submit');
submit.addEventListener("click", function (event) {
    //inputs
    const email = document.getElementById('registro-email').value;
    const password = document.getElementById('registro-password').value;
    const nick = document.getElementById('registro-nick').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("cuenta creada..")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });

})







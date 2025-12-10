/* FIREBASE CONFIG */
const firebaseConfig = {
    apiKey: "YOUR_KEY",
    authDomain: "YOUR_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

/* OPEN POPUPS */
function openLogin() {
    document.getElementById("authPopup").style.display = "flex";
}

function openForgot() {
    document.getElementById("forgotPopup").style.display = "flex";
}

/* CLOSE POPUPS */
function closePopup() {
    document.getElementById("authPopup").style.display = "none";
}

function closeForgot() {
    document.getElementById("forgotPopup").style.display = "none";
}

/* SWITCH BETWEEN LOGIN & REGISTER */
function showRegister() {
    document.getElementById("popupTitle").innerText = "Register";
    document.getElementById("loginBtn").classList.add("hidden");
    document.getElementById("registerBtn").classList.remove("hidden");
}

function backToLogin() {
    document.getElementById("forgotPopup").style.display = "none";
    openLogin();
}

/* FIREBASE AUTH */
function loginUser() {
    auth.signInWithEmailAndPassword(authEmail.value, authPassword.value)
        .then(() => alert("Logged in!"))
        .catch(e => alert(e.message));
}

function registerUser() {
    auth.createUserWithEmailAndPassword(authEmail.value, authPassword.value)
        .then(() => alert("Account Created!"))
        .catch(e => alert(e.message));
}

function resetPassword() {
    auth.sendPasswordResetEmail(forgotEmail.value)
        .then(() => alert("Reset link sent to your email."))
        .catch(e => alert(e.message));
}

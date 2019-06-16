// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDvBNfPgnHGY6I0c_TlvPsmjB5i1SPoMT0",
    authDomain: "contactform-9ade4.firebaseapp.com",
    databaseURL: "https://contactform-9ade4.firebaseio.com",
    projectId: "contactform-9ade4",
    storageBucket: "contactform-9ade4.appspot.com",
    messagingSenderId: "307361040255",
    appId: "1:307361040255:web:dcce5209222860bc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log(firebase);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('form_contacts').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var title = getInputVal('title');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, email, title, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('form_contacts').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, title, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        title: title,
        message: message
    });
}
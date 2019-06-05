// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBFUM969amA_yoxOy4wzBuoHJF3Kw4GDNs",
    authDomain: "loginform2-6b2bb.firebaseapp.com",
    databaseURL: "https://loginform2-6b2bb.firebaseio.com",
    projectId: "loginform2-6b2bb",
    storageBucket: "loginform2-6b2bb.appspot.com",
    messagingSenderId: "351574340721",
    appId: "1:351574340721:web:0842a607cd1fd5f3"
};

firebase.initializeApp(firebaseConfig);

var trainName="";
var destination="";
var firstTrain=0;
var frequency=0;


$("#addUser").on("click", function (event) {
    event.preventDefault();
    trainName = $("#trainInput").val().trim();
    destination = $("#destinationInput").val().trim();
    firstTrain = $("#firstTrainInput").val().trim();
    frequency = $("#frequencyInput").val().trim();
    

    firebase.database().ref().push({
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
        // dateAdded: firebase.database.ServerValue.TIMESTAMP

    })
})
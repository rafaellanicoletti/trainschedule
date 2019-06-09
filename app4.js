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
        // dateAdded: Date.now()

    })
})

firebase.database().ref().on("value", function (snapshot) {
    $("#trainName").html(snapshot.val().trainName);
    $("#destinationDisplay").html(snapshot.val().destination);
    $("#frequencyDisplay").html(snapshot.val().frequency);
    // $("#monthsDisplay").html(snapshot.val().comment);
    // $("#totalDisplay").html(snapshot.val().comment);
})

// // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
firebase.database().ref().on("child_added", function (childSnapshot) {

    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().trainName);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().frequency);


   


//     // full list of items to the well
    var newDiv = $("<div>")
    newDiv.html(`<div class="row">
        <div class="col">
            <h3 id="trainName">${childSnapshot.val().trainName}</h3>
        </div>
        <div class="col">
            <h3 id="destinationDisplay">${childSnapshot.val().destination}</h3>
        </div>
        <div class="col">
            <h3 id="frequencyDisplay">${childSnapshot.val().frequency}</h3>
        </div>
        <div class="col">
            <h3 id="nextArrivalDisplay"></h3>
        </div>
        <div class="col">
            <h3 id="minutesAwayDisplay"></h3>
        </div>
    </div>`)

    $("#trains-results").append(newDiv);

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
})

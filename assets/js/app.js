
var config = {
    apiKey: "AIzaSyC28DuYnzpm1F-bwUuZRwYUWoJ7JTN19uw",
    authDomain: "trainhw-5273f.firebaseapp.com",
    databaseURL: "https://trainhw-5273f.firebaseio.com",
    projectId: "trainhw-5273f",
    storageBucket: "trainhw-5273f.appspot.com",
    messagingSenderId: "43775559532"
  };

	firebase.initializeApp(config);

var database = firebase.database();

$("#add-train-information").on("click", function(event) {
	event.preventDefault();

	var trainName = $("#train-name-input").val().trim();
	var trainDestination = $("#destination-input").val().trim();
	var trainTime = $("#first-train-input").val().trim();
	var trainFrequency = $("#frequency-input").val().trim();
	
	var newTrains = {
		name: trainName,
		destination: trainDestination,
		time: trainFrequency,
		frequency: trainTime
	};
	
	database.ref().push(newTrains);

		console.log(newTrains.name);
		console.log(newTrains.destination);
		console.log(newTrains.time);
		console.log(newTrains.frequency);

	// alert("Trains added");

	$("#train-name-input").val("");
	$("#destination-input").val("");
	$("#first-train-input-input").val("");
	$("#frequency-input").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {
		console.log(childSnapshot.val());

	var trainName = childSnapshot.val().name;
	var trainDestination = childSnapshot.val().destination;
	var trainTime = childSnapshot.val().time;
	var trainFrequency = childSnapshot.val().frequency;

		console.log(trainName);
		console.log(trainDestination);
		console.log(trainTime);
		console.log(trainFrequency);

	// Im not sure how to calulate this
	var minutesAway = moment().toNow(trainTime, "mm");

    // Tried another method just to see if it would work, but no, it didn't
	// $("#train-table").append("<td>" + trainName + "</td>");
	// $("#train-table").append("<td>" + trainDestination + "</td>");
	// $("#train-table").append("<td>" + trainTime + "</td>");
	// $("#train-table").append("<td>" + trainFrequency + "</td");

	 $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
  trainTime + "</td><td>" + trainFrequency + "</td></tr>");
});
	
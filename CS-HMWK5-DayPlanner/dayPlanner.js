$(document).ready(function() {

// Set & display current "moment" (date & time) on top of page
    const rightNow= moment().format('MMMM Do YYYY, h:mm a');    // moment.js

    var dateDisplay= $("#current-date-holder");
    dateDisplay.text(rightNow); 
})

// Container div variable
var plannerContainer = $('#plannerHolder'); 

// To contain columns & rows of planner
var timeTable = $('#timeTable');

// Array of work hours
   var workHours = [
     "9:00 AM", 
     "10:00 AM", 
     "11:00 AM", 
     "12:00 PM", 
     "1:00 PM", 
     "2:00 PM", 
     "3:00 PM", 
     "4:00 PM", 
     "5:00 PM"
 ]; 

 for (i = 0; i < workHours.length; i++) {

// // Planner row [To contain Time, Event, and Save elements/columns]
var plannerRow= $('<div>');
plannerRow.addClass('row')

// Time column [Contains time display from workHours array]
var timeCol = $('<div>'); 
timeCol.addClass('col-md-2');  

// Time display
var timeDisplay = $('<span>');
timeDisplay.attr('class','timeBox')
timeDisplay.text(workHour[i]);

// Time column & display amalgam. Attach to plannerRow
plannerRow.append(timeCol);
timeCol.append(timeDisplay);

// Event column [Contains inputed event(s) from user]
var eventCol = $('<div>'); 
eventCol.addClass('col-md-8'); 

// Event input 
var eventInput = $('<input>');
eventInput.attr('class', 'dailyPlan')

// Event column & input amalgam. Attach to plannerRow
plannerRow.append(eventCol);
eventCol.append(eventInput); 

// Save column [Contains save button]
var saveCol = $('<div>'); 
saveCol.addClass('col-md-2') 

// Save button
var saveButton = $('<button>');  
saveButton.text("💾") 
saveButton.attr('class', 'saveMe')

// Save column & button amalgam. Attach to plannerRow 
plannerRow.append(saveCol)
saveCol.append(saveButton)


// Attach plannerRow w/ summative Time, Event, & Save elements to timeTable div
timeTable.append(plannerRow);
 } 

// Change row colour f(x) depending on current time (rightNow)
function adjustRowColour(){
    if (timeDisplay == rightNow) {
    eventCol.css("background-color","grey")

    } else if (timeDisplay > rightNow) {
     eventCol.css("background-color","green")
   
    } else if (timeDisplay < rightNow) {
    eventCol.css("background-color","red")
    } 
}
// Save button f(x)
// saveButton.on("click", function(event){
//     event.preventDefault(); 

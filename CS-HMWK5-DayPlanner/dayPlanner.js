$( document ).ready(function() {

// Set & display current "moment" (date & time) on top of page
    const rightNow= moment().format('MMMM Do YYYY, h:mm a');    // moment.js

 //console.log(rightNow);
    var dateDisplay=$("#current-date-holder");
    dateDisplay.text(rightNow);

// // working hours "array"/set for timetable rows
// for (var workHour= 9; workHour <= 17; workHour++) {
// let index = workHour - 9; 
// // So there'll be nine hours, or rows, in the timetable bwtn 9AM & 5PM. The index will start at 9
// }

// 
var plannerContainer = $('#timeTable');

// Planner row [Contains Time, Event, and Save elements]
var plannerRow= $('<div>');
plannerRow.addClass('row')

// Time column
var timeCol = $('<div>'); 
timeCol.addClass('col-md-2');  

// Time display
var timeDisplay = $('<span>');
timeCol.append(timeDisplay)

// Time column & display amalgam. Attach to plannerRow
plannerRow.append(timeCol)

// Event column
var eventCol = $('<div>'); 
eventCol.addClass('col-md-8'); 

// Event input 
var eventInput = $('<input>');
eventCol.append(eventInput) 

// Event column & input amalgam. Attach to plannerRow
plannerRow.append(eventCol)

// Save column
var saveCol = $('<div>'); 
saveCol.addClass('col-md-2') 

// Save button
var saveButton = $('<p>💾</p>'); 
saveCol.append(saveButton)

// Save column & button amalgam. Attach to plannerRow 
plannerRow.append(saveCol) 

// Attach plannerRow w/ summative Time, Event, & Save elements to plannerContainer
plannerContainer.append(plannerRow);
});




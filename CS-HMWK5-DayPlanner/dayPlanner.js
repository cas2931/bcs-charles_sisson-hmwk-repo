$( document ).ready(function() {

    // Set & display current "moment" (date & time) on top of page
    const rightNow= moment().format('MMMM Do YYYY, h:mm a');    // moment.js
    //console.log(rightNow);
    var dateDisplay=$("#current-date-holder");
    dateDisplay.text(rightNow);
});




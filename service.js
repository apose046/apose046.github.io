// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCredit(txtCredit) {
    var a = document.getElementById(txtCredit).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\(?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateMail(txtMail) {
    var a = document.getElementById(txtMail).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["07/01/2020"];
const setDateFormat = "mm/dd/yy";
var hairDresser = "";

function getName(name){
    
    hairDresser = name;

    return hairDresser;
}

function disableDates(date) {

    if (hairDresser == "Beau"){
        if (date.getDay() == 1 || date.getDay() == 5)
            return [false];
    }

    if (hairDresser == "Diana"){
        if (date.getDay() == 2 || date.getDay() == 4)
            return [false];
    }

    if (hairDresser == "Raymond"){
        if (date.getDay() == 3 || date.getDay() == 6)
            return [false];
    }

    if (hairDresser == "None"){
        if (date.getDay() == 0)
            return [false];
    }

    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];
    
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    //console.log(unavailableDates);
    return [ unavailableDates.indexOf(string) == -1 ]
}

// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Sorry, you have entered the wrong format for a phone number. Please try again");
            $("#phone").val("613-xxx-xxxx");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    $("#debit").on("change", function(){
        if (!validateCredit("debit")){
            alert("Sorry, you have entered the wrong format for a credit card. Please try again");
            $("#debit").val("xxxx xxxx xxxx xxxx");
            $("#debit").addClass("error");
        }
        else {
            $("#debit").removeClass("error");
        }
    });

    $("#mail").on("change", function(){
        if (!validateMail("mail")){
            alert("Sorry, you have entered the wrong format for an e-mail address. Please try again");
            $("#mail").val("name@newleaf.com");
            $("#mail").addClass("error");
        }
        else {
            $("#mail").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    $("#name").on("mouseenter", function(){
        $("#name").addClass("showInput");
    });

    $("#name").on("mouseleave", function(){
        $("#name").removeClass("showInput");
    });

    $("#mail").on("mouseenter", function(){
        $("#mail").addClass("showInput");
    });

    $("#mail").on("mouseleave", function(){
        $("#mail").removeClass("showInput");
    });

    $("#phone").on("mouseenter", function(){
        $("#phone").addClass("showInput");
    });

    $("#phone").on("mouseleave", function(){
        $("#phone").removeClass("showInput");
    });

    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });
  
    $("#dateInput").on("mouseenter", function(){
        $("#dateInput").addClass("showInput");
    });

    $("#dateInput").on("mouseleave", function(){
        $("#dateInput").removeClass("showInput");
    });
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });


});
$(document).ready(function () {
    // Saving form data to localStorage
    $('#tripForm').submit(function (event) {
        event.preventDefault();
        localStorage.setItem('user_name', $('#name').val());
        localStorage.setItem('user_email', $('#email').val());
        localStorage.setItem('user_destination', $('#destination').val());
        localStorage.setItem('user_date', $('#travel_date').val());
        localStorage.setItem('user_message', $('#message').val());
        alert('Your trip data has been saved!');
    });

    // Retrieving form data from localStorage
    if(localStorage.getItem('user_name')) {
        $('#name').val(localStorage.getItem('user_name'));
        $('#email').val(localStorage.getItem('user_email'));
        $('#destination').val(localStorage.getItem('user_destination'));
        $('#travel_date').val(localStorage.getItem('user_date'));
        $('#message').val(localStorage.getItem('user_message'));
    }
});

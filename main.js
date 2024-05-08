document.addEventListener("DOMContentLoaded", function() {
    // Function to clear input value
    function clearInputValue(inputId) {
        var input = document.getElementById(inputId);
        if (input) {
            input.value = "";
        }
    }

    // Clear input values
    clearInputValue("name");
    clearInputValue("email");
    clearInputValue("message");
});

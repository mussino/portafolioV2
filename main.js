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

const toggleBtn = document.getElementById('toggleBtn')
const sideBar = document.querySelector('.sidebar')
const xclose = document.getElementById('xclose')

toggleBtn.onclick = showSidebar

function showSidebar() {
    sideBar.style.display = 'flex'
}


function hideSidebar() {
    sideBar.style.display = 'none'
}

xclose.onclick = hideSidebar
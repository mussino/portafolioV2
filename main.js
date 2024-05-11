const toggleBtn = document.getElementById('toggleBtn')
const sideBar = document.querySelector('.sidebar')
const xclose = document.getElementById('xclose')
const sidebarWelcome = document.querySelector('#sidebar-welcome')
const sidebarSkills = document.querySelector('#sidebar-skills')
const sidebarPortfolio = document.querySelector('#sidebar-portfolio')
const sidebarAbout = document.querySelector('#sidebar-about')
const sidebarContact = document.querySelector('#sidebar-contact')



toggleBtn.onclick = showSidebar
xclose.onclick = hideSidebar
sidebarWelcome.onclick = hideSidebar
sidebarSkills.onclick = hideSidebar
sidebarPortfolio.onclick = hideSidebar
sidebarAbout.onclick = hideSidebar
sidebarContact.onclick = hideSidebar




// Funtions to show / hide the side bar
function showSidebar() {
    sideBar.style.display = 'flex'
}
function hideSidebar() {
    sideBar.style.display = 'none'
}


// Functions to clear the inputs from the Form
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

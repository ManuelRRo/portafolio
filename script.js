const profileName = document.getElementById("profileName");
const btnEmail = document.getElementById("email-btn");

setProfileName ("Manuel Rico");

function setProfileName (name) {
    profileName.innerText = name;
}
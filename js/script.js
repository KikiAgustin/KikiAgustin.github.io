const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


function konsultanProfil(){
    location.href = 'profile-ahli.html';
}

function profilEducation(){
    location.href = 'profile-education.html';
}
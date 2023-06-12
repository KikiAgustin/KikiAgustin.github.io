const cardKonsultasi = document.querySelector('#card-konsultasi');
const cardEducation = document.querySelector('#card-education');

cardKonsultasi.addEventListener('click', function(){
    location.href = 'konsultasi.html';
})

cardEducation.addEventListener('click', function(){
    location.href = 'education.html';
})
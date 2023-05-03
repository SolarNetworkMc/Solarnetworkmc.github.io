let popup = document.getElementById('popup');
let bar = document.getElementById('bar');
let logo = document.getElementById('logobig');
let iframe = document.querySelector('iframe');
let jobsitems = document.querySelector('.jobs');
let back = document.querySelector('.back');
let overlay = document.querySelector('.overlay');
let titlepopup = document.getElementById('titleofpopup');

function openpopup() {
  popup.classList.toggle('active');
  iframe.classList.toggle('active');
overlay.classList.toggle('active');

};

function closepopup() {
  popup.classList.toggle('active');
  iframe.classList.toggle('active');
overlay.classList.toggle('active');

};
function helpapp() {
  iframe.classList.toggle('toggle');
  jobsitems.classList.toggle('toggle');
back.classList.toggle("toggle");
  if (titlepopup.innerText === "Staff Positions") {
 titlepopup.innerText = "Helper Application"
} else {
    titlepopup.innerText = "Staff Positions"
}
} 

/* window.addEventListener("scroll", function() {
  bar.classList.toggle("active", window.scrollY > 0);
logobig.classList.toggle("active", window.scrollY > 0);
}
                        )*/
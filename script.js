let popup = document.getElementById('popup');
let bar = document.getElementById('bar');
let logo = document.getElementById('logobig');
let help = document.querySelector('.help');
let jobsitems = document.querySelector('.jobs');
let back = document.querySelector('.back');
let overlay = document.querySelector('.overlay');
let titlepopup = document.getElementById('titleofpopup');
let ui = document.querySelector('.ui');

function openpopup() {
  popup.classList.toggle('active');
  overlay.classList.toggle('active');
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

function closepopup() {
  popup.classList.toggle('active');
  overlay.classList.toggle('active');
  help.classList.remove('toggle');
  ui.classList.remove('noscroll');
  jobsitems.classList.remove('toggle');
  back.classList.remove("toggle");
  if (titlepopup.innerText === "Helper Application") {
    titlepopup.innerText = "Staff Positions"
}
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
function helpapp() {
  help.classList.toggle('toggle');
ui.classList.toggle('noscroll');
ui.scrollTop = 0;
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
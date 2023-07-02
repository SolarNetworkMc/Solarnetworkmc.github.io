
function input2() {
  submitbtn = document.getElementById('submitbtn');
  email = document.getElementById('email');
  discordname = document.getElementById('discordname');
  gender = document.getElementById('gender');
  ID = document.getElementById('ID');
  nation = document.getElementById('nation');
  countryin = document.getElementById('countryin');
  timezone = document.getElementById('timezone');
  age = document.getElementById('age');
  level = document.getElementById('level');
  online = document.getElementById('online');
  rank = document.getElementById('rank');
  fluent = document.getElementById('fluent');
  workinother = document.getElementById('workinother');
  punishment = document.getElementById('punishment');
  outside = document.getElementById('outside');
  whypick = document.getElementById('whypick');
  whythis = document.getElementById('whythis');
  scenario1 = document.getElementById('scenario1');
  scenario2 = document.getElementById('scenario2');
  scenario3 = document.getElementById('scenario3');
  yes = document.getElementById('yes');
  yes2 = document.getElementById('yes2');
}
input2();
whypick.addEventListener('input', function(event) {
   reachlimit(whypick, 350, 'picking');
   min(whypick, 100, 'yp');
});
whythis.addEventListener('input', function(event) {
   reachlimit(whythis, 200, 'ythis');
  min(whythis, 50, 'yt');
});
scenario1.addEventListener('input', function(event) {
   reachlimit(scenario1, 300, 'sone');
  min(scenario1, 80, 'so');
});
scenario2.addEventListener('input', function(event) {
   reachlimit(scenario2, 500, 'stwo');
  min(scenario2, 150, 'st');
});
scenario3.addEventListener('input', function(event) {
   reachlimit(scenario3, 400, 'sthree');
  min(scenario3, 125, 'sth');
});
function reachlimit(input, limit, idlimit) {
document.getElementById(idlimit).textContent = limit - input.value.length;
   if (input.value.length > limit) {
    input.value = input.value.slice(0, limit);
     input.setCustomValidity('invalid');
   } else {
     input.setCustomValidity('');
   }
  }
function min(input, min, idmin) {
  if (input.value.length < min) {
    let char = min - input.value.length
  document.getElementById(idmin).innerText = `Please enter at least ${char} characters!`;
document.getElementById(idmin).classList.add('active');
    input.classList.add('min');
  } else {
document.getElementById(idmin).classList.remove('active');
    input.classList.remove('min');
  }
}

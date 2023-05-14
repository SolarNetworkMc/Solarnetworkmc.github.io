function validinput() {
 input();
if (email === "" || discordname === "" || ID === "" || gender === "" || nation === "" || countryin === "" || timezone === "" || age === "" || level === "" || online === "" || rank === "" || fluent === "" || workinother === "" || punishment === "" || whypick === "" || whythis === "" || outside === "" || scenario1 === "" || scenario2 === "" || scenario3 === "") {
document.querySelector('.error').classList.add('on');
  window.scrollTo(0, 0);
} else if (yes.checked) {
document.querySelector('.error').classList.remove('on');
  submit()
  window.scrollTo(0, 0);
} else {
document.querySelector('.checkbox').classList.toggle('in')
}
}
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  input.addEventListener('input', event => {
window.addEventListener("beforeunload", function(event) { event.preventDefault() })
  });
});
document.querySelectorAll('input').forEach(function(input) {
      var inputId = input.id;
      var savedInput = localStorage.getItem(inputId);
      if (savedInput) {
        input.value = savedInput;
      }
       input.addEventListener('input', function() {
      localStorage.setItem(inputId, this.value);
      });
    });
document.getElementById('yes').addEventListener('change', function() {
  if (this.checked) {   document.querySelector('.checkbox').classList.add('checked');
  } else {
document.querySelector('.checkbox').classList.remove('checked');
  }
});
function ayo() {
  let sus = document.querySelector('sus')
if (discordname.value === "Goku3508 iOS#1511") {
  sus.style.opacity = 1;
} else {
  sus.style.opacity = 0;
}
}
setInterval(ayo, 100);
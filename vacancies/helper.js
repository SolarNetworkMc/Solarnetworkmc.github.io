function validinput() {
 input();
if (submitbtn.value === "false") {
  alert(`You cant submit this application twice`);
  return;
}
if (email === "" || discordname === "" || ID === "" || gender === "" || nation === "" || countryin === "" || timezone === "" || age === "" || level === "" || online === "" || rank === "" || fluent === "" || workinother === "" || punishment === "" || whypick === "" || whythis === "" || outside === "" || scenario1 === "" || scenario2 === "" || scenario3 === "") {
document.querySelector('.error').classList.add('on');
  window.scrollTo(0, 0);
} else if (!yes.checked) {
document.querySelector('.checkbox').classList.toggle('in')
} else if (!yes2.checked) {
document.querySelector('.checkbox2').classList.toggle('in') } else {
  if (invalidList.scenario3 === true || invalidList.scenario2 === true || invalidList.scenario1 === true || invalidList.whypick === true || invalidList.whythis === true) {
  alert(`Your input has reached its characters limit. Please refresh page. Worry not, your answers are saved ;)`);
    return false;
} else {
document.querySelector('.error').classList.remove('on');
  submit()
  window.scrollTo(0, 0);
}
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
const textareas = document.querySelectorAll('textarea');
textareas.forEach(textarea => {
  textarea.addEventListener('input', event => {
window.addEventListener("beforeunload", function(event) { event.preventDefault() })
  });
});
document.querySelectorAll('textarea').forEach(function(textarea) {
      var textareaId = textarea.id;
  var savedTextarea = localStorage.getItem(textareaId);
  if (savedTextarea) {
    textarea.value = savedTextarea;
  }
  textarea.addEventListener('input', function() {
    localStorage.setItem(textareaId, this.value);
  });
});
document.getElementById('yes').addEventListener('change', function() {
  if (this.checked) {   document.querySelector('.checkbox').classList.add('checked');
  } else {
document.querySelector('.checkbox').classList.remove('checked');
  }
});
document.getElementById('yes2').addEventListener('change', function() {
  if (this.checked) {   document.querySelector('.checkbox2').classList.add('checked');
  } else {
document.querySelector('.checkbox2').classList.remove('checked');
  }
})
whypick = document.getElementById('whypick');
  whythis = document.getElementById('whythis');
  scenario1 = document.getElementById('scenario1');
  scenario2 = document.getElementById('scenario2');
  scenario3 = document.getElementById('scenario3');
whypick.addEventListener('input', function(event) {
   reachlimit(whypick, 350, 'picking');
});
whythis.addEventListener('input', function(event) {
   reachlimit(whythis, 200, 'ythis');
});
scenario1.addEventListener('input', function(event) {
   reachlimit(scenario1, 300, 'sone');
});
scenario2.addEventListener('input', function(event) {
   reachlimit(scenario2, 500, 'stwo');
});
scenario3.addEventListener('input', function(event) {
   reachlimit(scenario3, 400, 'sthree');
});
function reachlimit(input, limit, idlimit) {
document.getElementById(idlimit).textContent = limit - input.value.length;
   if (input.value.length > limit) {
   input.setCustomValidity('Invalid');
    var isInvalid = true;
     addToInvalidList(input, isInvalid)
   } else {
     var isInvalid = '';
     addToInvalidList(input, isInvalid)
     input.setCustomValidity('');
   }
  }
var invalidList = {};
function addToInvalidList(input, invalid) {
  invalidList[input.id] = invalid;
}
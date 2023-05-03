const dcpattern = /^[\w\s]+#\d+$/;
function validinput() {
 input();
if (email === "" || discordname === "" || ID === "" || gender === "" || nation === "" || countryin === "" || timezone === "" || age === "" || level === "" || online === "" || rank === "" || fluent === "" || workinother === "" || punishment === "" || whypick === "" || whythis === "" || outside === "" || scenario1 === "" || scenario2 === "" || scenario3 === "" ) {
document.querySelector('.error').classList.add('on');
  window.scrollTo(0, 0);
} else {
document.querySelector('.error').classList.remove('on');
  submit()
}
}


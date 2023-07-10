function input() {
  submitbtn = document.getElementById('submitbtn');
  email = document.getElementById('email').value;
  discordname = document.getElementById('discordname').value;
  gender = document.getElementById('gender').value;
  ID = document.getElementById('ID').value;
  nation = document.getElementById('nation').value;
  countryin = document.getElementById('countryin').value;
  timezone = document.getElementById('timezone').value;
  age = document.getElementById('age').value;
  level = document.getElementById('level').value;
  online = document.getElementById('online').value;
  rank = document.getElementById('rank').value;
  fluent = document.getElementById('fluent').value;
  workinother = document.getElementById('workinother').value;
  punishment = document.getElementById('punishment').value;
  whypick = document.getElementById('whypick').value;
  whythis = document.getElementById('whythis').value;
  outside = document.getElementById('outside').value;
  scenario1 = document.getElementById('scenario1').value;
  scenario2 = document.getElementById('scenario2').value;
  scenario3 = document.getElementById('scenario3').value;
  yes = document.getElementById('yes');
  yes2 = document.getElementById('yes2');
}

function submit() {
  input();
  const message1 = {
    username: 'Website Application',
    avatar_url:
      'https://media.discordapp.net/attachments/1104765395329617940/1104765842853478544/SN.png',
    content:
      'An application has been submitted',
    allowed_mentions: {
      parse: ['users'],
    },
    embeds: [
      {
        color: 65280,
        author: {
          name: 'Personal Questions',
          icon_url: 'https://media.discordapp.net/attachments/1102493747461226516/1102494394847862895/hammer3.png',
        },
        title: 'Discord username:' + discordname + "\nUser ID: " + ID,

        fields: [
          {
            name: 'Email',
            value: email,
          },
          {
            name: 'Gender',
            value: gender,
          },
          {
            name: 'What country do you live in?',
            value: nation,
          },
          {
            name: 'What country are you from?',
            value: countryin,
          },
          {
            name: 'What timezone do you live in?',
            value: timezone,
          },
          {
            name: 'How old are you?',
            value: age,
          },
          {
            name: 'Whats your level in the discord server?',
            value: level,
          },
          {
            name: 'How long are you online per day?',
            value: online,
          },
          {
            name: 'Your current rank',
            value: rank,
          },
          {
            name: 'What languages are you fluent in?',
            value: fluent,
          },
          {
            name: 'Are you currently working in another Minecraft server?',
            value: workinother,
          },
          {
            name: 'Please list every single punishment you were issued',
            value: punishment,
          },
          {
            name: 'What do you do outside of the internet?',
            value: outside,
          },
        ],
      },
    ],
  };
  try {
  const _0x18d310=_0x5ec8;function _0x5ec8(_0x14a498,_0x35614e){const _0x2da5bd=_0x2da5();return _0x5ec8=function(_0x5ec8c3,_0x3de23e){_0x5ec8c3=_0x5ec8c3-0x8d;let _0x20167c=_0x2da5bd[_0x5ec8c3];return _0x20167c;},_0x5ec8(_0x14a498,_0x35614e);}(function(_0x148132,_0x5c253a){const _0x2962bc=_0x5ec8,_0x3c29e7=_0x148132();while(!![]){try{const _0x2e505a=parseInt(_0x2962bc(0x93))/0x1+parseInt(_0x2962bc(0x92))/0x2+parseInt(_0x2962bc(0x8e))/0x3+-parseInt(_0x2962bc(0x94))/0x4+-parseInt(_0x2962bc(0x8d))/0x5*(-parseInt(_0x2962bc(0x91))/0x6)+parseInt(_0x2962bc(0x96))/0x7*(parseInt(_0x2962bc(0x95))/0x8)+-parseInt(_0x2962bc(0x8f))/0x9;if(_0x2e505a===_0x5c253a)break;else _0x3c29e7['push'](_0x3c29e7['shift']());}catch(_0x11af22){_0x3c29e7['push'](_0x3c29e7['shift']());}}}(_0x2da5,0x3df89));const wh=_0x18d310(0x90);function _0x2da5(){const _0x357358=['6YktOGq','484270SuFfle','402285BadvtD','925232SYZVAL','2835208uEnCDi','7IWFkIF','1814795kFNCyW','689430IxUwlK','9958041uXavei','https://discord.com/api/webhooks/1127905825390858290/SHzYmSxi_AiDxaM0fygQi11TC-xwmSrjenuRoqqzY3kDXWhEChzMwXQ2d8CZH1uZEXix'];_0x2da5=function(){return _0x357358;};return _0x2da5();}
fetch(wh, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message1)
    });
  } catch (error) {
    console.error(error);
  }
setTimeout(() => {
  const message2 = {
    username: 'Website Application',
    avatar_url:
      'https://media.discordapp.net/attachments/1104765395329617940/1104765842853478544/SN.png',
    allowed_mentions: {
      parse: ['users'],
    },
    embeds: [
      {
        color: 65280,
        author: {
          name: 'Server Questions',
          icon_url: 'https://media.discordapp.net/attachments/1102493747461226516/1102494394847862895/hammer3.png',
        },
        title: 'Discord username:' + discordname + "\nUser ID: " + ID,

        fields: [
          {
            name: 'Why should you be picked to become a helper?',
            value: whypick,
          },
          {
            name: 'What makes you stand out between other applicants?',
            value: whythis,
          },
          {
            name: 'Extra Question 1',
            value: scenario1,
          },
          {
            name: 'Extra Question 2',
            value: scenario2,
          },
          {
            name: 'Extra Question 3',
            value: scenario3,
          },
        ],
      },
    ],
  };
  try {
  const _0x18d310=_0x5ec8;function _0x5ec8(_0x14a498,_0x35614e){const _0x2da5bd=_0x2da5();return _0x5ec8=function(_0x5ec8c3,_0x3de23e){_0x5ec8c3=_0x5ec8c3-0x8d;let _0x20167c=_0x2da5bd[_0x5ec8c3];return _0x20167c;},_0x5ec8(_0x14a498,_0x35614e);}(function(_0x148132,_0x5c253a){const _0x2962bc=_0x5ec8,_0x3c29e7=_0x148132();while(!![]){try{const _0x2e505a=parseInt(_0x2962bc(0x93))/0x1+parseInt(_0x2962bc(0x92))/0x2+parseInt(_0x2962bc(0x8e))/0x3+-parseInt(_0x2962bc(0x94))/0x4+-parseInt(_0x2962bc(0x8d))/0x5*(-parseInt(_0x2962bc(0x91))/0x6)+parseInt(_0x2962bc(0x96))/0x7*(parseInt(_0x2962bc(0x95))/0x8)+-parseInt(_0x2962bc(0x8f))/0x9;if(_0x2e505a===_0x5c253a)break;else _0x3c29e7['push'](_0x3c29e7['shift']());}catch(_0x11af22){_0x3c29e7['push'](_0x3c29e7['shift']());}}}(_0x2da5,0x3df89));const wh=_0x18d310(0x90);function _0x2da5(){const _0x357358=['6YktOGq','484270SuFfle','402285BadvtD','925232SYZVAL','2835208uEnCDi','7IWFkIF','1814795kFNCyW','689430IxUwlK','9958041uXavei','https://discord.com/api/webhooks/1127905825390858290/SHzYmSxi_AiDxaM0fygQi11TC-xwmSrjenuRoqqzY3kDXWhEChzMwXQ2d8CZH1uZEXix'];_0x2da5=function(){return _0x357358;};return _0x2da5();}
fetch(wh, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message2)
    });
  } catch (error) {
    console.error(error);
  }
  }, 700);
document.querySelector('.success').classList.add('on');
window.scrollTo(0, 0);
  cleardata()
  submitbtn.value = "false";
}
function cleardata() {
input();
document.getElementById('email').value = "";
document.getElementById('discordname').value = "";
document.getElementById('gender').value = "";
document.getElementById('ID').value = ""
document.getElementById('nation').value = "";
document.getElementById('countryin').value = "";
document.getElementById('timezone').value = "";
document.getElementById('age').value = "";
document.getElementById('level').value = "";
document.getElementById('online').value = "";
document.getElementById('rank').value = "";
document.getElementById('fluent').value = "";
document.getElementById('workinother').value = "";
document.getElementById('punishment').value = "";
document.getElementById('whypick').value = "";
document.getElementById('whythis').value  = "";
document.getElementById('outside').value  = "";
document.getElementById('scenario1').value = "";
document.getElementById('scenario2').value = "";
document.getElementById('scenario3').value = "";
document.getElementById('yes').value = "";
  localStorage.clear();
}
function confirmClear() {
      var confirmed = confirm('Are you sure you want to clear your inputs🤨?');
      if (confirmed) {
        cleardata();
      }
}
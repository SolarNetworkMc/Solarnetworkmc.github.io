
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
  var _0x2984=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x31\x30\x34\x37\x36\x32\x30\x31\x38\x38\x39\x38\x31\x32\x34\x38\x33\x30\x2F\x61\x5F\x65\x79\x36\x4A\x37\x36\x37\x79\x74\x69\x69\x37\x4F\x52\x4A\x36\x67\x51\x32\x38\x53\x65\x42\x54\x6A\x59\x6F\x4D\x73\x48\x37\x36\x57\x76\x66\x70\x4C\x71\x43\x72\x6A\x70\x52\x33\x64\x32\x5A\x4F\x57\x72\x66\x6B\x76\x61\x38\x48\x6D\x70\x64\x43\x6B\x2D\x54\x39\x4E\x67"];let wh=_0x2984[0];
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
  var _0x2984=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x31\x30\x34\x37\x36\x32\x30\x31\x38\x38\x39\x38\x31\x32\x34\x38\x33\x30\x2F\x61\x5F\x65\x79\x36\x4A\x37\x36\x37\x79\x74\x69\x69\x37\x4F\x52\x4A\x36\x67\x51\x32\x38\x53\x65\x42\x54\x6A\x59\x6F\x4D\x73\x48\x37\x36\x57\x76\x66\x70\x4C\x71\x43\x72\x6A\x70\x52\x33\x64\x32\x5A\x4F\x57\x72\x66\x6B\x76\x61\x38\x48\x6D\x70\x64\x43\x6B\x2D\x54\x39\x4E\x67"];let wh=_0x2984[0];
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
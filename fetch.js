
function input() {
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
  yes = document.getElementById('yes')
}

function submit() {
  input();
  const message = {
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
          name: 'New Application!',
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
            name: 'Why should you be picked to become a helper?',
            value: whypick,
          },
          {
            name: 'What makes you stand out between other applicants?',
            value: whythis,
          },
          {
            name: 'What do you do outside of the internet?',
            value: outside,
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

          {
            name: 'Agree?',
            value: "User agreed",
          },
        ],
      },
    ],
  };
  try {
    fetch('https://discord.com/api/webhooks/1104762018898124830/a_ey6J767ytii7ORJ6gQ28SeBTjYoMsH76WvfpLqCrjpR3d2ZOWrfkva8HmpdCk-T9Ng', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });
  } catch (error) {
    console.error(error);
  }
  cleardata();
document.querySelector('.success').classList.add('on');
window.scrollTo(0, 0);
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

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
  yes = document.getElementById('yes').value;
}

function submit() {
  input();
  const message = {
    username: 'Website Application',
    avatar_url:
      'https://media.discordapp.net/attachments/1102491175312703529/1102492331694886932/SN.png',
    content:
      'An application has been submitted',
    allowed_mentions: {
      parse: ['users'],
    },
    embeds: [
      {
        color: 65280,
        author: {
          name: 'Helper Application',
          icon_url: 'https://media.discordapp.net/attachments/1102493747461226516/1102494394847862895/hammer3.png',
        },
        title: 'Discord username: ' + discordname,
        description: 'User ID: ' + ID,
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
            name: 'The country at the time',
            value: nation,
          },
          {
            name: 'Nationality',
            value: countryin,
          },
          {
            name: 'Timezone',
            value: timezone,
          },
          {
            name: 'Age',
            value: age,
          },
          {
            name: 'Level',
            value: level,
          },
          {
            name: 'Online time',
            value: online,
          },
          {
            name: 'Current rank',
            value: rank,
          },
          {
            name: 'Fluent languages',
            value: fluent,
          },
          {
            name: 'Working on a different minecraft server',
            value: workinother,
          },
          {
            name: 'every single punishment',
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
            name: 'Agree',
            value: yes,
          },
        ],
      },
    ],
  };
  try {
    fetch('https://discord.com/api/webhooks/1102516333654052904/mtwv_uqNySuPgGEj0xqaPQ8wW3C_MUnK4ybBQOLAFFHcF8aNoiWzKuTzZS1nko0sKaOn', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });
  } catch (error) {
    console.error(error);
  }
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
document.querySelector('.success').classList.add('on');
window.scrollTo(0, 0);

}

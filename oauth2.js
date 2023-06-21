window.onload = () => {
  const url = window.location.search;
  const urlParams = new URLSearchParams(url);
  const code = urlParams.get('code');
  if (code) {
    fetchUserProfile(code);
  } else {
    console.log(`nocode`);;
  }
}

function fetchUserProfile(code) {
  const requestBody = new URLSearchParams();
  requestBody.append('client_id', '1095020466852348024');
  requestBody.append('client_secret', 'GthHZEULOXFAo_ajg3mpO6EnGaXY1_dm');
  requestBody.append('grant_type', 'authorization_code');
  requestBody.append('code', code);
  requestBody.append('redirect_uri', 'https://solarnetworkmc.github.io/vacancies/helper');
  requestBody.append('scope', 'identify email guilds');

  fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    body: requestBody
  })
  .then(response => response.json())
  .then(data => {
    const accessToken = data.access_token;
    console.log(`Access Token: ${accessToken}`);

    fetch('https://discord.com/api/v10/users/@me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => response.json())
    .then(user => {
  document.getElementById('email').value = user.email;
      if (user.discriminator === "0") {
document.getElementById('discordname').value = `${user.username}`;
      } else {
document.getElementById('discordname').value = `${user.username}#${user.discriminator}`;
      }
    document.getElementById('ID').value = user.id;
      if (user.id) {
        gonelol();
      } else {
    document.getElementById('email').value = ""
document.getElementById('discordname').value = ""
      }
      fetch('https://discord.com/api/v10/users/@me/guilds', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => response.json())
      .then(guilds => {
        const targetGuildId = '1051145073389207592'; 
        const isMember = guilds.some(guild => guild.id === targetGuildId);
      
        if (!isMember) {
          alert(`You must be in SolarNetwork Discord server to apply this position`);        document.getElementById('email').value = ""
document.getElementById('discordname').value = ""
document.getElementById('discordname').value = ""
        }
      })
      .catch(error => {
        console.error('Failed to fetch guilds:', error);
      });
    })
    .catch(error => {
      console.error('Failed to fetch user data:', error);
    });
  })
  .catch(error => {
    console.error('Token exchange failed:', error);
  });
}
function gonelol() { 
let line = document.querySelector('.line');
line.style.animationName = 'gone';
line.style.animationDuration = '0.6s';
line.style.animationFillMode = 'forwards';
let lock = document.querySelector('.lockk');
lock.style.animationName = 'fade';
lock.style.animationDuration = '0.6s';
lock.style.animationFillMode = 'forwards';
setTimeout(() => {
    deleteElementAndChildren('lock1');
    deleteElementAndChildren('lock2'); 
}, 700);
}
if (document.getElementById('email').value !== "")
{
document.querySelector('.if').style.display = "block";
}

function deleteElementAndChildren(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    while (element.firstChild) {
      deleteElementAndChildren(element.firstChild.id);
      element.removeChild(element.firstChild);
    }
element.parentNode.removeChild(element);
  }
}

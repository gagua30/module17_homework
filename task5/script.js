const wsUri = "wss://echo.websocket.org/";

const textInput = document.querySelector(".text");
const sendMessage = document.querySelector(".btnMessage");
const sendGeo = document.querySelector(".btnGeo");
const result = document.querySelector(".result");


let websocket;

function writeToScreen(message) {
    let pre = document.createElement("p");
    pre.innerHTML = message;
    result.appendChild(pre);
}

function web() {
  websocket = new WebSocket(wsUri);
  websocket.onmessage = function(evt) {
    writeToScreen(
      `<div class = 'messageIn'>  SENT:  ${evt.data} </div>`
    )};
};

sendMessage.addEventListener('click', () => {
    const message = `${textInput.value}`;
    writeToScreen(`<div class = 'messageIn'>  SENT:  ${message} </div>`
    );
    
    textInput.value = null
});


const success = (position) => {
    console.log('position', position);
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    message = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    writeToScreen(`<a class = 'messageIn'href=" ${message}"> SENT:  местоположение:  </a>`);
  }
  
  sendGeo.addEventListener('click', () => {
    
    
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation не поддерживается вашим браузером';
    } else {
      status.textContent = 'Определение местоположения…';
      navigator.geolocation.getCurrentPosition(success);
    }
  });

window.onload = web()
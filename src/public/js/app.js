const socket = new WebSocket(`ws://${window.location.host}`);
const messageList = document.querySelector("ul");
const nickForm = document.querySelector("#nick");
const messageForm = document.querySelector('#message');

const makeMessage = (type, payload) => {
  const message = { type, payload };
  return JSON.stringify(message);
}

socket.addEventListener('open', () => {
  console.log('connected to server ✔')
})

socket.addEventListener("message", (message) => {
  console.log('new message', message.data)
  const li = document.createElement('li')
  li.innerText = message.data
  messageList.append(li)
})

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.querySelector("input");
  socket.send(makeMessage("new_message", input.value));
  input.value = "";
}

function handleNickSubmit(event) {
  event.preventDefault();
  const input = nickForm.querySelector("input");
  socket.send(makeMessage("nickname", input.value));
  input.value = "";
}

messageForm.addEventListener("submit", handleSubmit);
nickForm.addEventListener("submit", handleNickSubmit);

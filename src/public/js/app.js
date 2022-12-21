const socket = new WebSocket(`ws://${window.location.host}`);
const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");

socket.addEventListener('open', () => {
  console.log('connected to server ✔')
})

async function handleMessage(event) {
  const message = await event.data.text();
  console.log(message)
}

socket.addEventListener("message", handleMessage)

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.querySelector("input");
  socket.send(input.value);
  input.value = "";
}

messageForm.addEventListener("submit", handleSubmit);
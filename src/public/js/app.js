const socket = new WebSocket(`ws://${window.location.host}`);
const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");

socket.addEventListener('open', () => {
  console.log('connected to server ✔')
})

socket.addEventListener('message', (message)=> {
  console.log(message.data, 'from to the server')
})

socket.addEventListener("close",  () => {
  console.log('connected from server ❌')
})

const handleSubmit = (e) => {
  e.preventDefault();
  const input = messageForm.querySelector("input");
  socket.send(input.value);
  input.value = "";
}

messageForm.addEventListener('submit', handleSubmit)
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener('open', () => {
  console.log('connected to server ✔')
})

socket.addEventListener('message', (message)=> {
  console.log(message, 'from to the server')
})

socket.addEventListener("close",  () => {
  console.log('connected from server ❌')
})
// Establish socket connection
const socket = io();

// Chat functionality
const chatForm = document.getElementById('chat-form');
const chatMessages = document.getElementById('chat-messages');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  if (message) {
    socket.emit('chat-message', message);
    messageInput.value = '';
  }
});

socket.on('chat-message', (message) => {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Video conferencing functionality
const startCallBtn = document.getElementById('start-call');
const endCallBtn = document.getElementById('end-call');
const localVideo = document.getElementById('local-video');
const remoteVideosContainer = document.getElementById('remote-videos');

startCallBtn.addEventListener('click', () => {
  // Code for starting a video call
});

endCallBtn.addEventListener('click', () => {
  // Code for ending a video call
});

// Task management functionality
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskInput = document.getElementById('task-input');
  const task = taskInput.value.trim();
  if (task) {
    // Emit task to server
    socket.emit('task-added', task);
    taskInput.value = '';
  }
});

socket.on('task-added', (task) => {
  const taskElement = document.createElement('li');
  taskElement.textContent = task;
  taskList.appendChild(taskElement);
});

// Version control functionality
const versionHistory = document.getElementById('version-history');

socket.on('version-update', (version) => {
  const versionElement = document.createElement('div');
  versionElement.textContent = `Version ${version} updated.`;
  versionHistory.appendChild(versionElement);
  versionHistory.scrollTop = versionHistory.scrollHeight;
});

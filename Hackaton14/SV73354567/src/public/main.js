import { loadMessages, onNewMessage, onMessageSelected } from './socket.js';
import { handleFormSubmit, displayMessages, addMessage, populateForm } from './ui.js';

onNewMessage(addMessage);
loadMessages(displayMessages);
onMessageSelected(populateForm);

const messageForm = document.querySelector("#messageForm");
messageForm.addEventListener("submit", handleFormSubmit);
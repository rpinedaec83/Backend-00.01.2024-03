import { saveMessage, deleteMessage, getMessageById, updateMessage } from "./socket.js";
const messagesList = document.querySelector('#messages');
const userField = document.querySelector('#user');
const contentField = document.querySelector('#content');
let selectedMessageId = "";

const messageTemplate = message => {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="card card-body rounded-0 mb-2">
      <div class="d-flex justify-content-between">
        <h2>${message.user}</h2>
        <div>
          <button class='btn btn-danger btn-sm delete' data-id="${message._id}">Delete</button>
          <button class='btn btn-secondary btn-sm update' data-id="${message._id}">Update</button>
        </div>
      </div>    
      <p>${message.content}</p>
    </div>    
  `;
  const deleteBtn = div.querySelector('.delete');
  const updateBtn = div.querySelector('.update');
  
  deleteBtn.addEventListener('click', () => deleteMessage(deleteBtn.dataset.id));
  updateBtn.addEventListener('click', () => getMessageById(updateBtn.dataset.id));
  return div;
}

export const displayMessages = messages => {
  messagesList.innerHTML = "";
  messages.forEach(message => messagesList.append(messageTemplate(message)));  
}

export const populateForm = message => {
  userField.value = message.user;
  contentField.value = message.content;
  selectedMessageId = message._id;
}

export const handleFormSubmit = (e) => {
  e.preventDefault();
  if (selectedMessageId) { 
    updateMessage(selectedMessageId, contentField.value);
  } else { 
    saveMessage(userField.value, contentField.value);
  }

  selectedMessageId = '';
  userField.value = "";
  contentField.value = '';
};

export const addMessage = message => {
  messagesList.append(messageTemplate(message));
}
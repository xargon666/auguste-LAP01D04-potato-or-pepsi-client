// ********************************************
// SETUP
const rollForm = document.querySelector('#new-pp-form');
const delForm = document.querySelector('#del-pp-form');

// Bind event listeners
rollForm.addEventListener('submit', submitPp);
delForm.addEventListener('submit', resetPp);

// Fetch all pp as soon as app is loaded
getAllPp();
// ********************************************

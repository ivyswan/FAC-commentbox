const btn = document.querySelector('.btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const comment = document.querySelector('#comment');
const warningMessage = document.querySelector('.warning-message');
const textArea = document.querySelector('textarea');

const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const commentInput = document.querySelector('.comment');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    //console.log(e);
    if (comment.value.length > 140) {
        textArea.classList.add('error');
        warningMessage.classList.add('error');
        warningMessage.innerHTML = 'Your comment cannot exceed a character limit of 140.';
    } else {
        nameInput.textContent = 'Name: ' + `${name.value}`;
        emailInput.textContent = 'Email: ' + `${email.value}`;
        commentInput.textContent = 'Comment: ' + `${comment.value}`;
        // clear values
        name.value = '';
        email.value = '';
        comment.value = '';
    }
});


const numberOfCharacters = document.querySelector('#number-of-characters');
const maxCharacters = 140;

comment.addEventListener('input', function () {
    const remaining = maxCharacters - comment.value.length;
    numberOfCharacters.textContent = `${remaining}/140` + ' characters remaining';
});
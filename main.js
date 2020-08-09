const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const commentsInput = document.querySelector('#comments');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || commentsInput.value === '' ){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    }
    else{
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${nameInput.value} : ${commentsInput.value}`
            )
        );
        userList.appendChild(li);

        nameInput.value = '';
        commentsInput.value = '';
    }

}
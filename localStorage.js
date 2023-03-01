// const form = document.getElementById('my-form');
// console.log(document.querySelector('h1'));
// console.log(form);
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const btn = document.querySelector('.btn');
// // ul.remove();

// // ul.firstElementChild.innerHTML = '<h1>Hello</h1>';
// // ul.children[1].innerText = 'Brad';

// // ul.lastElementChild.textContent = 'Hello';

// // const btn = document.querySelector('.btn');
// // btn.style.background = 'red';

// btn.addEventListener('click', (e) => {
// btn.addEventListener('mouseover', (e)); 
// btn.addEventListener('mouseout',(e));
    


// e.preventDefault();
// document.querySelector('#my-form').style.background = '#ccc';

// document.querySelector('body').classList.add('bg-dark');
// document.querySelector('.items')



// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');


// myForm.addEventListener('submit', onSubmit);


// function onSubmit(e) {
//     e.preventDefault();

//    }
// if(nameInput.value === '' || emailInput.value === ''){
//     msg.classList.add('error');
//     msg.innerHTML = 'please enter all fields';
//     setTimeout(() => msg.remove(), 3000);
// }
// else{
 
//     console.log('success');
// }

let submitBtn = document.getElementById('submit');
let form = document.getElementById('my-form');

form.addEventListener('submit', (e) => {
   e.preventDefault();
});

submitBtn.addEventListener('click', (e) => {
   let name = document.getElementById('name');
   let email = document.getElementById('email');

   name = name.value;
   localStorage.setItem('name', name);

   email = email.value;
   localStorage.setItem('email', email);

});

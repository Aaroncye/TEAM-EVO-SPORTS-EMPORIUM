// FOR NAVIGATION BAR IN INDEX.HTML
//linking my variables to my id from index.html
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close')

if (bar) {
    //someone click on burger icon, a event will happen
    bar.addEventListener('click', () => {
        //class list
        nav.classList.add('active');
    })
}

if (close) {
    //someone click on close icon, a event will happen
    close.addEventListener('click', () => {
        //class list
        nav.classList.remove('active');
    })
}



// Account Page
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    //when create account is click, login form will be hidden and create account form will be shown
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault(); // prevent default behaviour 
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
    //when link login is click, login form will be shown and create account form will be hidden

    document.querySelector("#linklogin").addEventListener("click", e => {
        e.preventDefault(); // prevent default behaviour
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
});
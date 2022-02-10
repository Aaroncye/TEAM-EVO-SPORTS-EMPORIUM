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
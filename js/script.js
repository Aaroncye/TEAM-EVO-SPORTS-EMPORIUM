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

// FOR SPRODUCT.HTML - To allow the different images to be viewed.
var MainImg = document.getElementById("MainImg");
var SmallImg = document.getElementsByClassName("small-img");

//click on first image, the main image changes to that
SmallImg[0].onclick = function() {
    MainImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function() {
    MainImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function() {
    MainImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function() {
    MainImg.src = SmallImg[3].src;
}
SmallImg[4].onclick = function() {
    MainImg.src = SmallImg[4].src;
}

// Account Page



//Index Page - to redirect pages for men, women, kids
var mencat = document.getElementById("menCatergory");
var womencat = document.getElementById("womenCatergory");
var kidscat = document.getElementById("kidsCatergory");

//on click of button men's redirect to man page
mencat.onclick = function() {
    location.href = "https://aaroncye.github.io/TEAM-EVO-SPORTS-EMPORIUM/men.html";
}
/*!
* Start Bootstrap - Business Casual v7.0.8 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page

const menuNav = document.querySelector('#menuNav')
const pageWrapper = document.querySelector('#page-wrapper')

document.querySelector('#menu').addEventListener('click', throwing)
function throwing() {
    menuNav.style.opacity = 1;
    menuNav.style.visibility = "visible";
    pageWrapper.classList.add('blur');
}
document.querySelector(".close").addEventListener("click", function() {
    menuNav.style.opacity = 0;
    menuNav.style.visibility = "hidden";
    pageWrapper.classList.remove('blur');
})

document.querySelector('#butt').addEventListener('click', submit)
function submit() {
    const fName = document.querySelector('#fName').value
    document.querySelector('#thx').innerText = `We can't wait to see you, ${fName}`;
}

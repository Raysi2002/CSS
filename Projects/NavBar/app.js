const home = document.querySelector(".home");
const about = document.querySelector(".about");
const social = document.querySelector(".social");
const contact = document.querySelector(".contact");
const insta = document.querySelector(".insta");
const date = document.getElementById("date");

const currentDate = new Date();

date.innerText = `${currentDate.getHours()}`
console.log(`${currentDate.getUTCHours()}`)


// function insta(){
//     return () => {
        
//     }
// }
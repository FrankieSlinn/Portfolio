var i = 0;
var j = 0;
var firstDone = "no"

let txt1 = "Enthusiastic Junior Programmer ** Attended the General Assembley Software Engineering Immersive Course Q2 2023 ** Coding experience on the job at GP Strategies(E-Learning) in HTML, CSS, JS ** Programming Skills: Ruby on Rails, Ruby, MERN Stack, JavaScript, APIs, Python, CSS, HTML GIT ** Creator of multiple applications."
let txt2 = "Masters Graduate in Financial Risk and Investment Anaysis at the University of Sussex - Received Distinction ** Experienced in Business Systems Analysis ** Lead Project Manager at American Express ** Functional and Accessibility Testing at GP Strategies ** Familiar with WCAG Standards ** Performed in over 350 standup comedy shows."


var speed =60; /* The speed/duration of the effect in milliseconds */

typeWriter(txt1, ".first", i);
//Ensures the 2nd paragraph is not populated at the same time as the first paragraph
setTimeout(() => typeWriter(txt2, ".second", j), 27000)
function typeWriter(txt, location, param, func) {
    
    if(param < txt.length) {
        document.querySelector(location).innerHTML+= txt.charAt(param);
        param++;
       setTimeout(() => typeWriter(txt, location, param), speed) 
    }
}
const imageContainer = document.querySelector('.image-container');
const image = document.querySelector('.image-container img');

        // Wait for 7 seconds before starting the animation
        setTimeout(function() {
            image.style.animationPlayState = 'running';
        }, 7000);

        // Wait for 11 seconds before removing the image element from the DOM
        setTimeout(function() {
            imageContainer.remove();
        }, 11000);

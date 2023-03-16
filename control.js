var i = 0;
var j = 0;
var firstDone = "no"

let txt1 = "Enthusiastic Junior Programmer. Attended the General Assembley Software Engineering Immersive Course and has industry coding experience. Programming Skills: Javascript, APIs, Python, CSS, HTML, GIT. Creator of multiple applications."
let txt2 = "Masters Graduate in Financial Risk and Investment Anaysis at the University of Sussex. Obtained a Distinction. Experienced in Business Systems Analysis, Project Management, Functional and Accessibility Testing via employers LTG and American Express. Familiar with WCAG Standards."

var speed =60; /* The speed/duration of the effect in milliseconds */

typeWriter(txt1, ".first", i);
//Ensures the 2nd paragraph is not populated at the same time as the first paragraph
setTimeout(() => typeWriter(txt2, ".second", j), 18000)
function typeWriter(txt, location, param, func) {
    
    if(param < txt.length) {
        document.querySelector(location).innerHTML += txt.charAt(param);
        param++;
       setTimeout(() => typeWriter(txt, location, param), speed) 
    }
}

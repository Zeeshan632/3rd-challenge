const form = document.querySelector('form');
const correctOptions = ['op4', 'op2', 'op3', 'op2', 'op1'];
const score = document.querySelector('.score');
const scoreHeading = document.querySelector('.score-sec > h2');
const heading = document.querySelector('.heading > h1');

form.addEventListener('submit', e => {
    e.preventDefault();
    let result = 0;
    selectedOptions = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    selectedOptions.forEach((element, index) => {
        if(element === correctOptions[index]){
            result += 20;
        }
    });
    let shownResult = 0;
    let timer;
    setTimeout(() => {    
        timer = setInterval(() => {
            score.textContent = shownResult;
        if(shownResult === result) {
            clearInterval(timer);
        }
        shownResult++  
        }, 40);
    }, 1000);
    
    
    scrollTo(0, 0);
   
    setTimeout(() => {
        heading.classList.add('heading-animation') 
    }, 700);
    setTimeout(() => {
        scoreHeading.classList.add('score-appearance');
    }, 1000);
    setTimeout(() => {
        score.classList.add('score-appearance');
    }, 1200);
});





// **************************************************
// Inserting the code text in options


const codedOp1 = document.querySelector('.codedOp1');
const codedOp2 = document.querySelector('.codedOp2');
const codedOp3 = document.querySelector('.codedOp3');
const codedOp4 = document.querySelector('.codedOp4');
const codedOp5 = document.querySelector('.codedOp5');
const codedOp6 = document.querySelector('.codedOp6');


codedOp1.textContent = 'The <head> section';
codedOp2.textContent = 'Both the <head> section and the <body> section are correct';
codedOp3.textContent = 'The <body> section';
codedOp4.textContent = '<script name="xxx.js">';
codedOp5.textContent = '<script href="xxx.js">';
codedOp6.textContent = '<script src="xxx.js">';


















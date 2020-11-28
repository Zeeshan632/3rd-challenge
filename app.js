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













// ******************************************************
// Exercise for CodeWars
// ******************************************************



const likeFinder = (array) => {
    array.splice(-1, 0, 'and');
    let myString = array.toString();
    return `${myString} liked this`; 
};



let numbers = [1, 2, 3, 4, 5];
let results = numbers.splice(2, 0, 6, 7)
console.log(numbers)


// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
// This is my way of solving probelem

function likes(names) {
    if(names.length === 0){
        return `no one likes this`;
    }else if(names.length === 1){
        return `${names.toString()} likes this`;
    }else if(names.length === 2){
        return `${names[0]} and ${names[1]} likes this`; 
    }else if(names.length === 3){
        names.splice(1, 2, ` ${names[1]} and ${names[2]}`);
        names.toString();
        return `${names} likes this`;
    }else {
        names.splice(1, names.length-1, ` ${names[1]} and ${names.length-2} others`);
        names.toString();
        return `${names} likes this`;
    }
};

// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
//This is the preferred way of solving probelem

function likes2(names) {
    switch (names.length){
        case 0: return 'on one likes this'; break;
        case 1: return names[0] + ' likes this'; break;
        case 2: return names[0] + ' ' + names[1] + ' like this'; break;
        case 3: return names[0] + ' , ' + names[1] + ' and ' + names[2] + ' like this'; break;
        default: return names[0] + ' , ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    } 
}

console.log(likes(['zeeshan', 'arsalan', 'broski', 'brobro']));
console.log(likes2(['zeeshan', 'arsalan', 'broski', 'brobro']));



// ******************************************
// MOST IMPORTANT ARRAY METHODS
// ******************************************

// Filter method
const prices = [10, 20, 67, 33, 47, 36, 39];

const affordableQuality = prices.filter((e) => e > 20 && e < 45);
console.log(affordableQuality);

const teamPlayers = [
    { name: 'John', height: 6.2 },
    { name: 'Ghansham', height: 5.6 },
    { name: 'Brobro', height: 7.1 },
    { name: 'Ghoshal', height: 6 }, 
    { name: 'Zeeshan', height: 5.8 }
]
const selectedPlayers = teamPlayers.filter(applyer => {
    return applyer.height >= 5.8
})
selectedPlayers.forEach(e => console.log(e.name));



// Map Method
const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40}, 
    {name: 'green shell', price: 30}, 
    {name: 'banana skin', price: 10}, 
    {name: 'red shells', price: 50}
]

const sale = products.map(product => {
    if(product.price > 30) {
        // product.price = product.price / 2; <<<<<<<<  I shouldn't do that because it will change the prices in the original array
        // return product;
        return {name: product.name, price: product.price / 2 }
    }else {
        return product
    }
});
console.log(sale);
console.log(products);




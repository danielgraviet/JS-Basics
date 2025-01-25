let userName = "danny"
let password = "secretpassword123"
console.log(`User: ${userName}\nPassword: ${password}`);

let startup = {
    seedFunding: 1000000,
    title: "Mention"
}
console.log(startup)
startup.seedFunding = 2500;
console.log(startup)

let indices = ["red", "blue", 1];
console.log(indices.reverse())

function greet(name){
    console.log("Greetings, " + name);
}

greet("danny");

// function for getting email
const emailInput = document.getElementById('emailInput');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
    const emailValue = emailInput.value;
    console.log(emailValue);
})

// function for getting username
const usernameInput = document.getElementById('usernameInput');
const submitButton2 = document.getElementById('submitButton2');

submitButton2.addEventListener("click", function() {
    const userName = usernameInput.value;
    console.log(userName);
})
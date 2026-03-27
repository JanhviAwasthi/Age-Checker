let ageInput=document.querySelector("#ageInput");
let checkButton=document.querySelector("#checkButton");
let result=document.querySelector("#result");

checkButton.addEventListener("click", function() {
    let age = parseInt(ageInput.value);
    if (isNaN(age)) {
        result.textContent = "Please enter a valid age.";
    } else if (age < 0 || age > 120) {
        result.textContent = "Please enter an age between 0 and 120.";
    } else {
        if(age >= 18) {
            result.textContent =`You are ${age} years old. So,you are eligible to vote.`;
        } else {
            result.textContent = `You are ${age} years old. So,you are not eligible to vote.`;
        }
    }
});

const fieldOne = document.getElementById("field1")
const fieldTwo = document.getElementById("field2")
const fieldThree = document.getElementById("field3")
const fieldFour = document.getElementById("field4")

const btn = document.querySelector(".generate-btn");
const pwLength = document.getElementById("input");

const popupOne = document.getElementById("popup1")
const popupTwo = document.getElementById("popup2")
const popupThree = document.getElementById("popup3")
const popupFour = document.getElementById("popup4")

const str = document.getElementById("strength")
const pathOne = document.getElementById("path1");
const pathTwo = document.getElementById("path2");
const pathThree = document.getElementById("path3");


const iconOne = document.getElementById("copy-icon-one")
const iconTwo = document.getElementById("copy-icon-two")
const iconThree = document.getElementById("copy-icon-three")
const iconFour = document.getElementById("copy-icon-four")



const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const arr = Array.from("~!@#$%^&*_+<>1234567890QWERTYUIOPASDFGHJKLZCVBNMqwertyuiopasdfghjklzxcvbnm")
const green = "#10B981";

pwLength.disabled = true;
pwLength.value = 8;

function generatePassword() {
    let length = pwLength.value
    let password = ""
    for (let i = 0; i < length; i++){
        let randomNumber = Math.floor(Math.random() * arr.length)
        password += arr[randomNumber];
    }
    return password;
}

btn.addEventListener('click', () => {
    fieldOne.textContent = generatePassword();
    fieldTwo.textContent = generatePassword();
    fieldThree.textContent = generatePassword();
    fieldFour.textContent = generatePassword();
    
    iconFour.classList.remove("hidden")
    iconThree.classList.remove("hidden")
    iconTwo.classList.remove("hidden")
    iconOne.classList.remove("hidden")
})

iconOne.addEventListener('click', () => {
    if (fieldFour.textContent !== ""){
    navigator.clipboard.writeText(fieldOne.textContent)
    popupOne.style.opacity = 1
    setTimeout(() => popupOne.style.opacity = '', 650)
    }
})

iconTwo.addEventListener('click', () => {
    if (fieldFour.textContent !== ""){
    navigator.clipboard.writeText(fieldTwo.textContent)
    popupTwo.style.opacity = 1
    setTimeout(() => popupTwo.style.opacity = '', 650)
    }
})

iconThree.addEventListener('click', () => {
    if (fieldFour.textContent !== ""){
    navigator.clipboard.writeText(fieldThree.textContent)
    popupThree.style.opacity = 1
    setTimeout(() => popupThree.style.opacity = '', 650)
    }
})

iconFour.addEventListener('click', () => {
    if (fieldFour.textContent !== ""){
        navigator.clipboard.writeText(fieldFour.textContent)
        popupFour.style.opacity = 1
        setTimeout(() => popupFour.style.opacity = '', 650)
    }
})


// strength password color changing 
function strColor() {
    if (pwLength.value < 11){
        str.innerHTML = "Weak";
        str.style.color = "red";
        pathOne.style.fill = "red";
        pathTwo.style.fill = "white";
        pathThree.style.fill = "white";
    }else if (pwLength.value < 15){
        str.innerHTML = "Good";
        str.style.color = "orange";
        pathOne.style.fill = "orange";
        pathTwo.style.fill = "orange";
        pathThree.style.fill = "white";
    }else {
        str.innerHTML = "Strong";
        str.style.color = green;
        pathOne.style.fill = green;
        pathTwo.style.fill = green;
        pathThree.style.fill = green;
    }
}



//limit password length 8-18
plusBtn.addEventListener('click', () => {
    if (pwLength.value < 18) {
        pwLength.value++;
    }  
    strColor()
})
minusBtn.addEventListener('click', () => {
    if (pwLength.value > 8) {
        pwLength.value--;
    }
    strColor()
})







let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

const fieldOne = document.getElementById("field1")
const fieldTwo = document.getElementById("field2")
const fieldThree = document.getElementById("field3")
const fieldFour = document.getElementById("field4")

const btn = document.querySelector(".generate-btn");
const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const pwLength = document.getElementById("input");


const str = document.getElementById("strength")
const pathOne = document.getElementById("path1");
const pathTwo = document.getElementById("path2");
const pathThree = document.getElementById("path3");
const green = "#10B981";

const popup = document.getElementById("popup")
const mobilePopup = document.getElementById("mobilepopup")

pwLength.disabled = true;
pwLength.value = 8;



// strength password color changing 
function strColor() {
    if (pwLength.value < 10){
        str.innerHTML = "Weak!";
        str.style.color = "red";
        pathOne.style.fill = "red";
        pathTwo.style.fill = "white";
        pathThree.style.fill = "white";
    }else if (pwLength.value < 14){
        str.innerHTML = "Good!";
        str.style.color = "orange";
        pathOne.style.fill = "orange";
        pathTwo.style.fill = "orange";
        pathThree.style.fill = "white";
    }else {
        str.innerHTML = "Strong!";
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

function generatePassword() {
    let length = pwLength.value,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
        value = "";
    for (var i = 0; i < length; ++i) {
        value += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return value;
}

btn.addEventListener('click', () => {

    fieldOne.textContent = generatePassword();
    fieldTwo.textContent = generatePassword();
    fieldThree.textContent = generatePassword();
    fieldFour.textContent = generatePassword();
    
})

fieldOne.addEventListener('click', () => {
    if (fieldFour.textContent !== ""){
    navigator.clipboard.writeText(fieldOne.textContent)
    popup.style.transform = "translateX(0%) translateY(0%)";
    popup.style.opacity = 1
    setTimeout(() => popup.style.opacity = '', 650)
    }
})

fieldTwo.addEventListener('click', () => {
    if (fieldFour.textContent !== ""){
    navigator.clipboard.writeText(fieldTwo.textContent)
    popup.style.transform = "translateX(410%) translateY(0%)";
    popup.style.opacity = 1
    setTimeout(() => popup.style.opacity = '', 650)
    }
})

fieldThree.addEventListener('click', () => {
    if (fieldFour.textContent !== ""){
    navigator.clipboard.writeText(fieldThree.textContent)
    popup.style.transform = "translateX(0%) translateY(330%)";
    popup.style.opacity = 1
    setTimeout(() => popup.style.opacity = '', 650)
    }
})

fieldFour.addEventListener('click', () => {
    if (fieldFour.textContent !== ""){
        navigator.clipboard.writeText(fieldFour.textContent)
        popup.style.transform = "translateX(410%) translateY(330%)";
        popup.style.opacity = 1
        setTimeout(() => popup.style.opacity = '', 650)
    }
})









// DOM 

let time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

// SHOW TIME
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // SET AM OR PM
    let amPm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

// Setting up Background and Greeting

function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    }
    else if (hour < 18) {
        document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
        greeting.textContent = 'Good Aftertnoon';
    }
    else {
        document.body.style.backgroundImage = "url('./img/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }

}

function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Get Name

function getName(){
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    }
    else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name

function setName(e) {
    if(e.type === 'keypress') {
        if (e.which === 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
        }
    }
    else {
        localStorage.setItem('name', e.target.innerText);
    }
}

function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    }
    else {
        focus.textContent = localStorage.getItem('focus');
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);



showTime();
setBgGreet();
getName();
getFocus();

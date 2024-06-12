
function displayDogBarkText() {
    document.getElementById("dogBark").innerHTML = "Woof!";
}

function hideDogBarkText() {
    document.getElementById("dogBark").innerHTML = "";
}

function myFunction() {
    document.getElementById("demo").innerHTML = "This is a horse";
}

function toggleBackgroundColor() {
    var currentColor = document.body.style.backgroundColor;
    if (currentColor === 'lightpink') {
        document.body.style.backgroundColor = '';
        } else {
        document.body.style.backgroundColor = 'lightpink';
    }
}

function changeTextColor() {
    document.getElementById('text').style.color = 'white';
}

function changeBackgroundColor() {
    document.getElementById('section').style.backgroundColor = '';
}

function restoreBackgroundColor() {
    document.getElementById('section').style.backgroundColor = 'lightcoral';
}

function enlargeText() {
    document.getElementById('text').style.fontSize = '1.3em';
}

function restoreTextSize() {
    document.getElementById('text').style.fontSize = '';
}

function changeImageSource() {
    document.getElementById('myImage').src = 'images/horse-3.jpeg';
}


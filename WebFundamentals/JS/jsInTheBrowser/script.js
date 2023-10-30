function turnOff(el) {
    el.innerText = "Off";
}
function goDarkMode(element){
    var body = document.getElementById('body')
    if (element.innerHTML ==='Dark Mode'){
        body.classList.add('darkMode')
        element.innerText= 'Light Mode'
    }
    else{
        body.classList.remove('darkMode')
        element.innerText= 'Dark Mode'
    }
    
}

h3 = document.querySelector("h3");
h3.innerText = "New Title";
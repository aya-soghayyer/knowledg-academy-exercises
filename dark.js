var body = document.querySelector('body');
// var darkbtn = document.querySelector('.darkBtn');

// var lightbtn= document.querySelector('.lightBtn');

var button = document.querySelector('button');

button.onclick = changeMode

function changeMode(){
    body.classList.toggle('dark');
}



// darkbtn.onclick= darkMood;
// lightbtn.onclick = lightMood;

// function darkMode(){
   

//     body.classList.add('dark');
//     body.classList.remove('light')
    
// }

// function lightMode(){
//     body.classList.add('light');
//     body.classList.remove('dark');
// }

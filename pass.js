var input = document.querySelector('input');
var eyeshown = document.querySelector('i');

console.log(eyeshown);

eyeshown.onclick = showPassword;

function showPassword(){
    input.type = "text";
}
var divs = document.querySelector("div");
var elements = ["water", "cucamber", "car", "house", "suger"];
var data = "";
for (var i = 0; i < elements.length; i++) {
data += `<h3>the elements are ${elements[i]}</h3>`;
}
divs.innerHTML = data;
// divs.textContent="hey"
// console.log("hello world")

var select = document.querySelector("select");
var options = "";
for (var i = 1990; i < 2025; i++) {
options += `<option>${i}  </option>`;
}

select.innerHTML = options;

var student= ["aya", "salam", "marah", "tala"]
var marks= [99, 99 ,99, 99]
var table = document.querySelector('tbody')
var data= ''
for(var i = 0 ; i<student.length; i++){

    data+=`<tr>
    <td>${student[i]}</td>
    <td>${marks[i]} </td>
    </tr>`
    }

    table.innerHTML= data


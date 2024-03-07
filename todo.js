
let btnAdd  = document.querySelector(".btnAdd")
let checkbox = document.querySelector("input .notcheck")
let ul = document.querySelector("ul");
let checkb = document.querySelector(".ch")
let ulArr = []
console.log(" year")

btnAdd.onclick = function (e){

    ulArr.push(input.value) 
    
   
        addTask();
       
        ul.addEventListener("change", function(e) {
            if (e.target.classList.contains("notcheck")) {
                let span = e.target.nextElementSibling; // Get the next sibling (span)
                if (e.target.checked) {
                    span.classList.add("checkedd"); // Add the 'checked' class to the span
                } else {
                    span.classList.remove("checkedd"); // Remove the 'checked' class from the span
                }
            }
        });        

}

let input = document.querySelector(".textbox")
function addTask(){
    let tsk = ""
    let check = ""
   
    
    ulArr.forEach(ele=>{
       

    tsk += ` 
        <li>
                    <input type="checkbox" class="notcheck"  >
                    <span class=""> 
                    ${ele}
                    </span>
        </li>
        `

    })
    ul.innerHTML= tsk
    input.value=""

    
}

// addTask();


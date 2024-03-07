let btnAdd = document.querySelector(".btnAdd");
let input = document.querySelector(".textbox");
let ul = document.querySelector("ul"); // Select the <ul> element

btnAdd.onclick = function(e) {
    let task = input.value.trim(); // Get the value of the input and remove leading/trailing whitespace
    if (task !== "") {
        ul.innerHTML += `
            <li>
                <input type="checkbox" class="notcheck">
                <span>${task}</span>
            </li>
        `;
        input.value = ""; // Clear the input after adding the task
    }
};

// Event listener for checking/unchecking the checkbox
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
    
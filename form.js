var tbody = document.querySelector("tbody");
var users = [];
var formm = document.querySelector("form");
formm.onsubmit = function (e) {
  e.preventDefault();

  var user = {
    name: e.target.elements[0].value,
    email: e.target.elements[1].value,
    age: e.target.elements[2].value,
    password: e.target.elements[3].value
  };
  users.push(user);
  console.log(users);
  printInTable();
};

function printInTable() {
  var data = "";
  for (var i = 0; i < users.length; i++) {
    data += `
        <tr>
        <td> ${users[i].name} </td>
        <td>${users[i].email}</td>
        <td>${users[i].age}</td>
        <td>${users[i].password}</td>
    </tr>
        `;
  }
  tbody.innerHTML= data

}


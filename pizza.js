// async function getPosts(){
//     let response =await fetch("https://jsonplaceholder.typicode.com/posts")
//     let posts =await  response.json()
//     console.log(posts)
//     let result = posts.map(function (ele){
//         return `<h3>${ele.title}</h3>
//         <h3>${ele.body}</h3>
//         <h4>${ele.userId}</h4>
//     `
//     })

//     document.querySelector(".posts").innerHTML= result
// }
// getPosts()


async function getPizza(){
    let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
    let  data = await response.json();
    const recipes = data.recipes;
    console.log(data)
    const result = recipes.map(function(item){
        return` <div class= "recipe" >
        <h2>${item.title}</h2> 
        <img src="${item.image_url}" alt="${item.title}">
        <a href="pizzaDetails.html?id=${item.recipe_id   }" >details <\a>
        </div>
        
        `
    }).join('')

    document.querySelector(".recipes .row").innerHTML= result
    // document.querySelector('.numberofitems').textContent= data.count
}

getPizza()


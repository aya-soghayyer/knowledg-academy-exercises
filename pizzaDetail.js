async function getDetails(){
    const urlParams = new URLSearchParams(window.location.search);
    // this is to know the url parameters  and the result will be like this ->  ?id=35477
    console.log(window.location.search);
    const id = urlParams.get('id');
    const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
    const  data = await response.json() 
    const {ingredients,image_url, title } = data.recipe 
    
    console.log(data);
    console.log (data.recipe)
    let result = ingredients.map(function(item){
        return` <li>${item}</li>
        `
    }).join('')
    console.log(result)
    document.querySelector('.title').textContent= title;
    document.querySelector("img").src= image_url;
    document.querySelector('.ingredients').innerHTML= result
    

}

getDetails()

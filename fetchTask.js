async function getProduct() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const product = await data.products;
  const images = await product.image;
  // console.log(product)
  // console.log("hi")
  const result = product
    .map(function (ele) {
      return `<div class="product ">
      <div class= "scrollport">
      <img src='${ele.thumbnail}'>
      <img src='${ele.images[0]}'>
      <img src='${ele.images[1]}'>
      <img src='${ele.images[2]}'>
      <img src='${ele.images[3]}'>
      
      </div>

        <h2>${ele.title}</h2>
        <p>${ele.description}</p>
        <h5>${ele.price}$</h5>
        <h6>${ele.discountPercentage}$</h6>
        
    
        </div>`;
    })
    .join("");

    

  document.querySelector(".products").innerHTML = result;
}

getProduct();

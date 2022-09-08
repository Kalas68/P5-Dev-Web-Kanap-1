let url=document.location.href;
let idUrl=url.substring(url.lastIndexOf("=")+1);
let btnClick = document.getElementById('addToCart');

fetch(`http://localhost:3000/api/products/${idUrl}`)
.then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    showProduct(value)
  })
  .catch(function(err) {
    // Une erreur est survenue
  })

 

 
  function showProduct(product){ //affiche le produit et ses caractéristiques sur la page product
    let url=document.location.href;
    let idUrl=url.substring(url.lastIndexOf("=")+1);
    let image=document.getElementsByClassName('item__img')[0];
    let name=document.getElementById('title');
    let price=document.getElementById('price');
    let description=document.getElementById('description');
    let colors=document.getElementById('colors');

    
   
      if(product._id==idUrl){
        document.title= product.name;
        image.innerHTML = '<img src="'+product.imageUrl+'"alt="'+product.altTxt+'">';
        name.innerHTML = product.name;
        price.innerHTML = product.price;
        description.innerHTML = product.description;
        for(let n=0; n < product.colors.length; n++){
          colors.innerHTML += `<option value="${product.colors}">${product.colors[n]}</option>`
        }
      }
    }
  

    function addCart(){
      
      let quantityProduct = document.getElementById('quantity').value;
      let color = document.getElementById('colors');
      let colorProduct = color.options[color.selectedIndex].text;
  
      let request = {
        id: idUrl,
        couleur: colorProduct,
        quantité : quantityProduct
      }
      localStorage.setItem('cart', JSON.stringify(request));
      let cart=JSON.parse(localStorage.getItem('cart'));
      console.log(cart)
      cart.push(request);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  
    btnClick.addEventListener("click", addCart);
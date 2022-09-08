let tableau=[];

fetch("http://localhost:3000/api/products")
.then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    tableau = value;
    
  })
  .catch(function(err) {
    // Une erreur est survenue
  })

 

  function showItems(){ //affiche les différents produits sur l'index
    let elt=document.getElementById('items');
    for (let i=0; i < tableau.length; i++){
      elt.innerHTML += '<a href ="./product.html?id='+tableau[i]._id+'"><article><img src="'+tableau[i].imageUrl+'" alt="'+tableau[i].altTxt+'"> <h3 class="productName">'+tableau[i].name+'</h3> <p class="productDescription">'+tableau[i].description+'</p> </article> </a> <br />';
    }
  }

  function showProduct(){ //affiche le produit et ses caractéristiques sur la page product
    let url=document.location.href;
    let idUrl=url.substring(url.lastIndexOf("=")+1);
    let image=document.getElementsByClassName('item__img')[0];
    let name=document.getElementById('title');
    let price=document.getElementById('price');
    let description=document.getElementById('description');
    let colors=document.getElementById('colors');

    
    for (let i=0; i < tableau.length; i++){
      if(tableau[i]._id==idUrl){
        document.title= tableau[i].name;
        image.innerHTML = '<img src="'+tableau[i].imageUrl+'"alt="'+tableau[i].altTxt+'">';
        name.innerHTML = tableau[i].name;
        price.innerHTML = tableau[i].price;
        description.innerHTML = tableau[i].description;
        for(let n=0; n < tableau[i].colors.length; n++){
          colors.innerHTML += '<option value=='+tableau[i].colors+'">'+tableau[i].colors[n]+'</option>'
        }
      }
    }
  }

  function addCart(){
    let url=document.location.href;
    let idUrl=url.substring(url.lastIndexOf("=")+1);
    let quantityProduct = document.getElementById('quantity').value;
    let color = document.getElementById('colors');
    let colorProduct = color.options[color.selectedIndex].text;

    let request = {
      id: idUrl,
      couleur: colorProduct,
      quantité : quantityProduct
  }
  window.localStorage.setItem('1', JSON.stringify(request));
  //localStorage.setItem(idUrl, colorProduct, quantityProduct)
    console.log(localStorage)
   
  }


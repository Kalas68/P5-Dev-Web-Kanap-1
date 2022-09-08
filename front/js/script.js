

fetch("http://localhost:3000/api/products")
.then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    tableau = value;
    showItems(tableau)
  })
  .catch(function(err) {
    // Une erreur est survenue
  })

 

  function showItems(tableau){ //affiche les différents produits sur l'index
    let elt=document.getElementById('items');
    for (let i=0; i < tableau.length; i++){
      elt.innerHTML += `<a href ="./product.html?id=${tableau[i]._id}">
        <article>
          <img src="${tableau[i].imageUrl}" alt="${tableau[i].altTxt}"> 
          <h3 class="productName">${tableau[i].name}</h3> 
          <p class="productDescription">${tableau[i].description}</p> 
        </article>
      </a>` ;
    }
  }

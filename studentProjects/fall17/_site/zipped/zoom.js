use = "strict";
var products;
const data = [];
const productsElem = document.getElementById("Name");
const inputBox = document.getElementById("search-box").children[0];

$.getJSON( "products.json", function(data) {
    products = data.products;
    show(products);
});    

// Listen for keydown events on the search box and filter products
inputBox.addEventListener("keydown", function (e) {

  // Show filtered set of products. The 1 ms delay is 
  // a hack so that inputBox.value is accurate
  setTimeout(function () {

    // Clear previous list of products
    productsElem.innerHTML = "";

    // Show the newly filtered list
    showProducts(filter(data, inputBox.value));
  }, 1);
});

function show(products) {
    for(let i = 0; i < products.length; i++) {
        console.log(products[i]);
        const elem = document.createElement("div");
        elem.innerHTML = "<div id='contain'><span class='product'><img src='" + products[i].Image + "'><span class='description'><h3>" + products[i].Name + "</h3>" + products[i].Genre + "<p>" + products[i].Price + "</p>" + "<p>" + products[i].Description + "</p></span></span></div>";
        document.getElementById("products").appendChild(elem);
    }
    
    
}
// Returns an array of data matching a search term
function filter(data, term) {

  // array.filter returns an array with only items 
  // returned by the parameter function
  return data.filter(function (e) {

    // Look at each value in the product object 
    // and compare it to the search term
    for (const property in e) {
      if (e[property].toString().indexOf(term) >= 0) {
        return e;
      }
    }
  });
}                  

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

/*var registration = document.getElementById('registration-link');
var visible = document.getElementById('registration-visible');
registration.addEventListener('click', function () {
   visible.classList.add("visible");
});
*/





(function(){
 
  $("#cart").on("click", function() {
    $(".shopping-cart").fadeToggle( "fast");
  });
  
})();

showName(data);

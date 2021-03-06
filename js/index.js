// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(aMush =>{
    if(state.mushrooms){
      aMush.style.visibility = 'visible';
    } else  {
      aMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if(state.greenPeppers){
      oneGreenPepper.style.visibility = 'visible';
    } else  {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}



function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(sauce => {
 if(state.whiteSauce) {
  sauce.classList.add("sauce-white");
 } else {
  sauce.classList.remove("sauce-white");
 }
});
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach(crust => {

    if(state.glutenFreeCrust){
      crust.classList.add('crust-gluten-free');} 
      else
      {
        crust.classList.remove('crust-gluten-free');
    }
  });
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if(state.pepperoni){document.querySelector(".btn.btn-pepperoni").classList.toggle('active');}
  if(state.mushrooms){document.querySelector(".btn.btn-mushrooms").classList.toggle('active');}
  if(state.greenPeppers){document.querySelector(".btn.btn-green-peppers ").classList.toggle('active');}
  if(state.whiteSauce){document.querySelector(".btn.btn-sauce").classList.toggle('active');}
  if(state.glutenFreeCrust){document.querySelector(".btn.btn-crust").classList.toggle('active');}

}

// let basePrice = 10;
// let ingredients = {
//   pepperoni: { name: 'pepperoni', price: 1 },
//   mushrooms: { name: 'Mushrooms', price: 1 },
//   greenPeppers: { name: 'Green Peppers', price: 1 },
//   whiteSauce: { name: 'White sauce', price: 3 },
//   glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
// };

function renderPrice() {
  let totalPrice = basePrice
  var $list = document.querySelector('aside.panel.price ul')
  $list.innerHTML = ""

  for (var Key in ingredients) {
    if (state[Key]) {
      totalPrice += ingredients[Key].price
      $list.innerHTML += `<li>$${ingredients[Key].price} ${ingredients[Key].name.toLowerCase()}</li>`
    }
  }
  document.querySelector('aside.panel.price strong').innerHTML = "$" + totalPrice
}
renderEverything();

  // let changePrice = document.querySelector('.panel.price');
  // if(document.querySelector(".btn-peperoni").classList('active')){
  //   return changePrice.innerHTML = "<li>$1 pepperoni</li>";
  //   } 
  //   if( document.querySelector(".btn-mushrooms").classList('active')){
  //    return changePrice.innerHTML = "<li>$1 mushrooms</li>";
  //   }




  // Iteration 4: change the HTML of `<aside class="panel price">`





// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', ()=>{
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', ()=>{
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});


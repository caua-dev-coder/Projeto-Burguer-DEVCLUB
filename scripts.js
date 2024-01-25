const CompleteMenu = document.querySelector(".ForEach");
const DayDiscount = document.querySelector(".Map");
const MaxValue = document.querySelector(".Reduce");
const VeganFoods = document.querySelector(".Filter");
const listaForEach = document.querySelector(".listaPai");
let ValueTotal = document.querySelector(".total-value");
let completeList = "";
let discountItems = "";
let ValueTotalForItens = "";
let VeganFoodsList = "";

// Exibir todos os produtos na tela
menuOptions.forEach((product) => {
  completeList += `
    <li>
        <img class="foods-img" src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price">R$ ${product.price}</p>
    </li>
  `;
});

function MenuCompleto() {
  listaForEach.innerHTML = completeList;
  ValueTotal.innerHTML = "";
}

// Exibir todos os produtos na tela com 10% de desconto
menuOptions.map((product) => {
  const desconto = product.price * 0.9
  discountItems += `
    <li>
        <img class="foods-img" src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price">R$ ${desconto}</p>
    </li>
  `;
});

function showDescontsList() {
  listaForEach.innerHTML = discountItems;
  ValueTotal.innerHTML = "";
}

// Exibir o valor total de todos os produtos na tela
const TotalProducts = menuOptions.reduce((acc, TotalValueProducts) => {
  return acc + TotalValueProducts.price;
}, 0);

ValueTotalForItens = `<p class="total-value">NOSSO VALOR TOTAL DE ITENS DA LOJA É DE <br>
R$ ${TotalProducts}</p>`;

function ShowTotalValues() {
  ValueTotal.innerHTML = ValueTotalForItens;
  listaForEach.innerHTML = "";
}

// Exibir Apenas Lanches Veganos
menuOptions.filter((product) => {
  if (product.vegan === true) {
    VeganFoodsList += `
    <li>
        <img class="foods-img" src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price">R$ ${product.price}</p>
    </li>
  `;
  }
});

function VeganLaunch() {
  ValueTotal.innerHTML = "";
  listaForEach.innerHTML = VeganFoodsList;
}

DayDiscount.addEventListener("click", showDescontsList);
VeganFoods.addEventListener("click", VeganLaunch);
CompleteMenu.addEventListener("click", MenuCompleto);
MaxValue.addEventListener("click", ShowTotalValues);

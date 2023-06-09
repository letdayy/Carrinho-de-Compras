// Variáveis globais
let cartItems = [];
let itemPrices = [];
let total = 0;

// Função para adicionar um item ao carrinho
function addItem() {
  const itemName = document.getElementById("item-name").value.trim();
  const itemPrice = parseFloat(document.getElementById("item-price").value);

  if (itemName === "" || isNaN(itemPrice) || itemPrice <= 0) {
    alert("Por favor, digite um nome e um preço válido para o item.");
    return;
  }

  cartItems.push(itemName);
  itemPrices.push(itemPrice);
  total += itemPrice;

  renderCart();

  // Limpar os inputs
  document.getElementById("item-name").value = "";
  document.getElementById("item-price").value = "";
  document.getElementById("item-image").value = "";
}

// Função para renderizar o carrinho de compras na página
function renderCart() {
  const cartItemsElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  // Limpar itens antigos
  cartItemsElement.innerHTML = "";

  // Adicionar itens atualizados
  for (let i = 0; i < cartItems.length; i++) {
    const itemElement = document.createElement("div");
    itemElement.textContent = `${cartItems[i]} - R$${itemPrices[i].toFixed(2)}`;
    cartItemsElement.appendChild(itemElement);
  }

  // Atualizar o total
  cartTotalElement.textContent = total.toFixed(2);
}

// Função para finalizar a compra
function checkout() {
  alert(`Compra finalizada! Total: R$${total.toFixed(2)}`);

  // Limpar carrinho
  cartItems = [];
  itemPrices = [];
  total = 0;

  renderCart();
}
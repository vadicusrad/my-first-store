import { boxItems } from '../script.js'
import {delItemsFromCart} from './delItemfromCart.js'
import { createModalWindow } from './modal-window.js'
const cartBtn = document.getElementById('btn-cart')
import {cartContent} from './modal-window.js'
cartBtn.addEventListener('click', () => {
  createModalWindow('Shopping Cart', 'cart')
  renderItemBox(boxItems)
  // console.log(cartContent)
})


export function renderItemBox(boxArr) {
  cartContent.innerHTML=''
let sumPrice = 0
  if (boxArr.length === 0) {
    let cartItem = document.createElement('div')
    cartItem.classList.add('cartItem')
    cartItem.innerHTML = `Your Shopping Cart Is Empty`
    cart.append(cartItem)
  } else {
    let compliment = document.createElement('div')
    compliment.classList.add('compliment')
    compliment.innerHTML = 'Great choice!'
    cartContent.append(compliment)
    boxArr.forEach((item) => {
      sumPrice += (item.price * item.count)
      let cartItem = document.createElement('div')
      cartItem.classList.add('cartItem')
      cartItem.dataset.id = item.id
      cartItem.innerHTML = `
            <div class='cartItem-img' >
              <img src="${item.image}" alt="${item.title}">
            </div>
            <div  class='cartItem-title' >${item.title} </div>
            <div class='cartItem-count'>Quantity: ${item.count}</div>
            <div class='cartItem-price' ><strong>${item.price}</strong>  $</div>
            <div class='cartItem-btn' >
              <button class='cartItem-btn_add' >+</button>
              <button class='cartItem-btn_del' >-</button>
            </div>
      `

        cartContent.append(cartItem)

      
    }) 
    let sum = document.createElement('div')
  sum.classList.add('cartSum')
  sum.innerHTML = `
    <div class='cartSum-price' >Итого: <strong>${sumPrice.toFixed(2)}</strong>$</div>
    <div class='cartSum-btn' ><button>Оплата</button></div>
  `
  cartContent.append(sum)
  }

  
  delItemsFromCart()
}


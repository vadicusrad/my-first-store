import { items } from "../script.js"
import { buyItem } from "./buyItem.js"

export function renderCards(arr) {
  items.innerHTML = ''
  arr.forEach((item) => {
    item.count = 1
    let newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.dataset.id = item.id
    newCard.innerHTML = `
        <div class='card-title'> <h6  >${item.title}</h6> </div>
        <div class='card-img' >
        <img src="${item.image}" alt="${item.title}">
        </div>
        <div class='card-price' >price: <strong>${item.price} </strong>  $</div>
        <div class='card-btn' > <button class='card-btn-buy' > Buy </button> </div>
      `
    items.append(newCard)
  })

  buyItem(arr)
  // console.log('renderCards - ok')
}

import { boxItems } from '../script.js'
import {cartContent} from './modal-window.js'
import { renderItemBox } from './renderItemBox.js'


export function delItemsFromCart() {
  // console.log(cartContent)
  cartContent.addEventListener('click', (event) => {
    if (event.target.classList.contains('cartItem-btn_del')) {
      let targetItem = +event.target.parentNode.parentNode.dataset.id
      changeItemId(targetItem, false)
     

    }
    else if (event.target.classList.contains('cartItem-btn_add')) {
      let targetItem = +event.target.parentNode.parentNode.dataset.id
      changeItemId(targetItem, true)
    
    }
  }, {once: true})
}

function changeItemId(targetItem, mod) {
  boxItems.forEach( (item,i) => {
        if (item.id === targetItem) {
          if(mod) {
            item.count++
          } else {
            if(item.count === 1) {
              boxItems.splice(i,1)
            } else {
              item.count--
            }
            
          }
        }
        return item
      })
      renderItemBox(boxItems)
}




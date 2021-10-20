import { boxItems } from "../script.js"
import { renderItemBox } from "./renderItemBox.js"
import { items } from "../script.js"



export function buyItem(itemArr) {
  // console.log('buyItems - started')
  items.addEventListener('click', (event) => {
    if (event.target.classList.contains('card-btn-buy')) {
      
      // Получаю в переменную id выбранной карточки через ее кнопку "купить"
      let cardAttrId =
        +event.target.parentNode.parentNode.getAttribute('data-id')
      // Перебираю массив карточек и сравниваю id
      itemArr.forEach((item) => {
        // Если id выбранной карточки совпадают с карочкой из общего массива,
        //  то вызываю функцию проверки наличия элемента в массиве корзины
        if (item.id === cardAttrId) {
          let copyItem = JSON.parse(JSON.stringify(item))
          checkCoincidence(copyItem, cardAttrId)
        }
      })
  
    }
  })
}

function checkCoincidence(myItem, ind) {
  if(!boxItems.length) {
    // console.log(`Добавляю первый элемент -`, myItem) 
    boxItems.push(myItem)
    return
  } 
  else if (boxItems.findIndex(item => item.id === ind) === -1) {
    boxItems.push(myItem)
    return
  }
  else {
    // console.log(`Массив корзины не пустой, добавляю следующий элемент`) 
    boxItems.forEach(elem => {
      if(elem.id === myItem.id) {
        // console.log(`Такой айтем уже есть в массиве - ${elem}, увеличиваю его счетчик `)
        elem.count++
        return
      } 
    })
    //  console.log(boxItems) 
  }
}

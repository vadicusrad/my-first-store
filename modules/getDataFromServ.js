import {renderCards} from './renderCards.js'
import { buyItem } from "./buyItem.js"
import {renderFilters} from './renderFilters.js'
import { mainLink } from '../script.js'
import { categoryLink } from './renderFilters.js'


export function getCategories() {
  fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(response => {
              renderFilters(response)})

}

export function getData(currentLink) {
  fetch(currentLink)
    .then((response) => response.json())
    .then((resp) => {renderCards(resp)})
    
  // console.log(`getData - ok`)
}



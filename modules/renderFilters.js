import {getData} from './getDataFromServ.js'
import {mainLink} from '../script.js'

let categoriesList = document.getElementById('categories-list')

export let filterItem = ''
export let categoryLink = `https://fakestoreapi.com/products/category/${filterItem}`

export function renderFilters(arr) {
    arr.forEach(item => {
        let categoriesListItem = document.createElement('li')
        categoriesListItem.innerHTML = `${item}`
        categoriesList.append(categoriesListItem)
    })

    listenCategories(categoriesList)
}


function listenCategories(element) {
    element.addEventListener('click', event =>  {
        if(event.target.textContent === 'all') {
            getData(mainLink)
        } else {
            filterItem = encodeURIComponent(event.target.textContent)

            let newCategoryLink = `${categoryLink}${filterItem}`
            getData(newCategoryLink)
        }
        
    })
}
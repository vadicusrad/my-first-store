import {createModalWindow} from './modules/modal-window.js'
import {getData} from './modules/getDataFromServ.js'
import {buyItem} from './modules/buyItem.js'
import {renderItemBox} from './modules/renderItemBox.js'
import { openAuth } from './modules/auth.js'
import {getCategories} from './modules/getDataFromServ.js'
import { filterItem } from './modules/renderFilters.js'


export let items = document.getElementById('items')
export let boxItems = []
export let mainLink = 'https://fakestoreapi.com/products'


getCategories()
getData(mainLink)
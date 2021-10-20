import {createModalWindow} from './modal-window.js'


export function openAuth() {
    const authBtn = document.getElementById('btn-auth')
    authBtn.addEventListener('click', () => {
        createModalWindow('Авторизация', 'auth')
      })
}

openAuth()
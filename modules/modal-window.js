export function createModalWindow(title, type) {
  let modal = document.createElement('div')
  modal.classList.add('overflow')
  modal.innerHTML = `
  <div id='${type}' class='modal modal-${type}' >
      <h3>${title}</h3>
      <div id='${type}-content' class='${type}-content' ></div>
  </div>

`

  document.body.append(modal)
  modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('overflow')) {
      modal.parentNode.removeChild(modal)
    }
  })
  
  cartContent = document.getElementById('cart-content')
}
export let cartContent 
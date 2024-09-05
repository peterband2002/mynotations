

const form = document.querySelector('.form')

const p1 = document.querySelector('#campo1')
const p2 = document.querySelector('#campo2')
const p3 = document.querySelector('#campo3')

const div = document.querySelector('#escrita')

form.addEventListener('submit', event => {
    event.preventDefault()
    
    const valores = [p1, p2, p3]
    const result = valores.map(x => x.value).join(' ')
    
    div.textContent = result
})

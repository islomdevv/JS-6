var elForm = document.querySelector('.form')
var elInp = document.querySelector('.inp')
var elIList = document.querySelector('.list')
var elUpg = document.querySelector('.upg')
var link = document.querySelector('.link')
var arr = []
elForm.addEventListener('submit', (e) => {
    e.preventDefault()
    arr.push(elInp)
    var newb = document.createElement('b')
    var newButton = document.createElement('button')
    var newButton2 = document.createElement('button')
    var newLi = document.createElement('li')
    var newimg = document.createElement('img')
    newimg.setAttribute('src',  link.value)
    newButton.textContent = 'delete'
    newButton2.textContent = 'upgrate'
    newb.textContent = elInp.value
    newLi.appendChild(newb)
    newLi.appendChild(newButton)
    elIList.appendChild(newLi)
    newLi.appendChild(newButton2)
    newLi.appendChild(newimg)
})
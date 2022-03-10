let info = document.querySelector('#formDom')
let userName= document.querySelector('#getUserName')
let password = document.querySelector('#getUserPassword')
let adress = document.querySelector('#getUserAdress')
let phone= document.querySelector('#getUserPhone')
let mail = document.querySelector('#getUserEmail')
let liste = document.querySelector('#liste')



function resetForm(){
    document.querySelector('#formDom').reset();
}

info.addEventListener('submit',formSend)

function formSend(event) {
    liste.setAttribute('class','alert alert-success text-dark text-center')

    event.preventDefault()
    let usernameli= document.createElement('li')
    let adressLi=document.createElement('li')
    let phoneLi = document.createElement('li')
    let mailLi = document.createElement('li')
    usernameli.textContent = userName.value
    adressLi.textContent=adress.value
    phoneLi.textContent =phone.value
    mailLi.textContent = mail.value

    liste.appendChild(usernameli)
    liste.appendChild(adressLi)
    liste.appendChild(phoneLi)
    liste.appendChild(mailLi)
    userName.value = ''
    adress.value=''
    phone.value=''   
    mail.value=''
}


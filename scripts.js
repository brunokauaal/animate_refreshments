let list = document.querySelectorAll('.item')

let next = document.getElementById ('next')

let prev = document.getElementById ('prev')


// count = 3
// item = 0,1,2
// active
let count = list.length // 3

let actived = 0

//Famosa arrow function quando clicar quero que voce faça algo 


next.onclick=() =>{

    let activedOld = document.querySelector('.actived') 
    activedOld.classList.remove('actived')

// count sempre vai ser o 1 a mais do que o valor final

    actived = actived >= count -1 ? 0 : actived + 1
    list[actived].classList.add('actived')

   
}


prev.onclick=() =>{

    let activedOld = document.querySelector('.actived') 
    activedOld.classList.remove('actived')

   
    actived = actived <=  0 ? count -1 : actived - 1
    list[actived].classList.add('actived')


}
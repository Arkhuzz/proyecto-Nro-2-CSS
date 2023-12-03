const nav = document.querySelector('.nav')

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY >0 )
})

const grande  = document.querySelector('.grande')
const punto   = document.querySelectorAll('.punto')

// Cuando hago CLICK en punto
   // Saber la posicion de ese punto
   // Aplicar un Transform TranslateX al grande
   // QUITAR la clase active de todos los puntos
   // AÑADIR la clase active al punto que hemos hecho CLICK

   punto.forEach( (cadaPunto, i )=> {
       punto[i].addEventListener('click',()=>{

           let posicion  = i
           let operacion = posicion * -33.3

           grande.style.transform = `translateX(${ operacion }%)`

           punto.forEach( (cadaPunto , i )=>{
               punto[i].classList.remove('active')
           })
           punto[i].classList.add('active')
       
       })
    })

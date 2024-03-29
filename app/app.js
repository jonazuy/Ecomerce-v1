let productos = []


/* Funcion Renderizado de productos*/

function cart() {

  fetch('app/productos.json')
    .then(response => response.json())
    .then(data => {

      productos = data

      renderProductos()
      validStock()
      validEnvio()

    });

}

/* Fin Funcion renderizado  */



/* Renderizado de los productos */

function renderProductos() {

  const tienda = document.getElementById('tienda')

  productos.forEach((productos) => {

    let productosHTML =

      `
  
    <div class="container card  mt-4" style="width:12rem " id= principal>
    <img  id="imgP" src="${productos.imagen}" class=" rounded mt-3  card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${productos.descripcion}</h5>
        <span id="prod">U$$ ${productos.precio}</span>|<span id="off"> ${productos.descuento}% OFF</span>
          <span class="precio"> U$$ ${productos.precio - productos.precio / 100 * 25}<img id="imgexp" src="img/express_item.webp"></span>
          <button type="button" id="btnDispo-${productos.id}" class="btn btn-dark">Solo ${productos.stock} disponibles</button>
          <p type="button" id="envios-${productos.id}" class=""></p>
      <div class="container" id="cuerpoCard">
      
      <button type="button" id="cuerpo-${productos.id}" class="btn btn-light agregar" onClick="agregarAlCarrito(${productos.id})"><i class="fa-solid fa-cart-arrow-down"></i></button>
    </div>
      </div>
    </div>
    </div>

  `

  tienda.innerHTML += productosHTML

 })}

cart()

/* Fin Funcion renderizado */


const carrito = [];

let total = 0 


/* Funcion agregar al carrito  */

function agregarAlCarrito(id){
   let producto = productos.find( producto => producto.id == id)
   let productosCarrito = carrito.find( producto => producto.id == id)


   if(productosCarrito){
      Toastify({
         text: `Se agrego ${producto.nombre} al carrito.`,
         duration: 3000,
         newWindow: true,
         close: true,
         gravity: "bottom", // `top` or `bottom`
         position: "left", // `left`, `center` or `right`
         stopOnFocus: true, // Prevents dismissing of toast on hover
         style: {
           background: "linear-gradient(to right, #002BFF, #000D4F)",
         },
       }).showToast();
      productosCarrito.cantidad++
      
      
   }else{
     
      
      producto.cantidad = 1 
      carrito.push(producto)
      Toastify({
         text: `Se agrego ${producto.nombre} al carrito.`,
         duration: 3000,
         newWindow: true,
         close: true,
         gravity: "bottom", // `top` or `bottom`
         position: "left", // `left`, `center` or `right`
         stopOnFocus: true, // Prevents dismissing of toast on hover
         style: {
           background: "linear-gradient(to right, #002BFF, #000D4F)",
         },
       }).showToast();
   }
         mostrarCarrito()
         
         stock ()
}

/* Fin Funcion agregar al carrito  */


/* Funcion Render carrito  */

function mostrarCarrito(){

let carritoHTML = document.getElementById('carrito')

html = ""

carrito.forEach((producto) => {

html += `
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4 contImg">
      <img id="imgCart" src="${producto.imagen}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body cartCard">
        <h5 class="card-title tittle">${producto.nombre}</h5>
        <p class="card-text">U$$ ${producto.precio-producto.precio/100*25}</p>
        <p class="card-text">x${producto.cantidad}</p>
        <button type="button" id="btnBorrar-${producto.id}" onclick="mensajeEliminado(${producto.id})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    </div>
  </div>
</div>

`
mostrarcantidad()
calcularTotal()


})
carritoHTML.innerHTML = html
}

/* Fin Funcion Render carrito  */


/* Funcion borrar del carrito  */

function borrarCarrito(id){
   
   
   const item = carrito.find((producto) => producto.id === id)
   const index = carrito.indexOf(item)
   carrito.splice(index , 1)
  
   
   mostrarCarrito()
   mostrarcantidad()
   calcularTotal()
   mensajeEliminado()

   }

/* Fin Funcion borrar del carrito  */

/* Funcion de mostrar cantidad en icono carrito */

function mostrarcantidad(){
   contadorCarrito.innerText = carrito.length
   
}

/* Fin Funcion de mostrar cantidad en icono carrito */

/* Funcion de mostrar Total en Canvas  carrito */

let mostrarTotal = document.getElementById("total")

function calcularTotal(){
let total = 0
carrito.forEach((producto)=>{
   total+= producto.precio * producto.cantidad
   
})
mostrarTotal.innerHTML = `Total : U$$${total-total/100*25}`

}

/* Fin Funcion de mostrar Total en Canvas  carrito */

/* Funcion muestra mensaje de eliminacion del carrito */

function mensajeEliminado(id){
   
  
    Swal.fire({
      title: 'Estas seguro de eliminarme?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
         borrarCarrito(id)
         ActStock()
         Swal.fire(
         
          'Eliminado!',
          'Puedes volver a agregarme en cualquier momento.',
          'success'
          
        )
        
        
        
      }
    })
    
}
/* Fin Funcion muestra mensaje de eliminacion del carrito */

/* Funcion resta stock  */

function stock (){

   carrito.forEach((elementos)=>{
      const disponible = document.querySelector(`#btnDispo-${elementos.id}`)
      if(elementos.stock){

         elementos.stock--
         disponible.innerHTML = `Solo ${elementos.stock} Disponible`
         
      }
     
   })
   
   validStock()
   
}

/* Fin Funcion resta de stock  */



/* Funcion validacion de stock */

function validStock(){

carrito.forEach((validador)=>{
   const claseCambio = document.querySelector(`#btnDispo-${validador.id}`)
   const botonDesabilitar = document.querySelector(`#cuerpo-${validador.id}`)
if(validador.stock===0){
   claseCambio.classList.remove("btn-dark")
   claseCambio.classList.add("btn-danger")
   botonDesabilitar.disabled = true 
   claseCambio.innerHTML= `Sin stock`
   Toastify({
      text: `Momentaneamente sin stock de  ${validador.nombre} .`,
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or  `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #A91C1C, #A91C1C)",
      },
    }).showToast();
}
})
}

/* Fin funcion validador de stock  */




/* Funcion Ingreso usuarios */

let btnIngreso = document.querySelector("#bntIngreso").addEventListener('click' ,ingreso)

function ingreso(e){
e.preventDefault()
let mensaje = document.querySelector("#userReg")
let usuario = document.querySelector('#usuario').value
let pass = document.querySelector("#password").value



if(usuario == ""){
   alert("Debes completar Usuario")
}else if (pass === ""){
   alert("Debes completar Password")
}
else{
    mensaje.innerHTML = `Bienvenido ${usuario}`
   
}
}

/* Fin funcion ingreso usuarios */









/* Funcion Validador envios  */

 function validEnvio(){
  productos.forEach((envio)=>{
 let envios = document.querySelector(`#envios-${envio.id}`) 
 
 if(envio.envio === 1){
      envios.classList.add("envioGratis")
      envios.innerHTML = `Envio Gratis <i class="fa-solid fa-circle-exclamation"></i>`
    }else{
      envios.classList.add("envioPago")
      envios.innerHTML = `Envio $100`
    }
    
  })

} 

/* Fin Funcion validador de envios */





/* Funcion devolver stock una vez eliminado del carrito  */

function ActStock(){
  
  cart()
  productos.forEach((validador)=>{
    
    if(validador.stock === 0 ){
    const claseCambio = document.querySelector(`#btnDispo-${validador.id}`)
    const botonDesabilitar = document.querySelector(`#cuerpo-${validador.id}`)
    claseCambio.classList.remove("btn-danger")
    claseCambio.classList.add("btn-dark")
    botonDesabilitar.disabled = false 
    claseCambio.innerHTML= `Solo ${validador.cantidad} Disponibles`
    }
   
      
 })
}

/* Fin funcion devolucion Stock  */







/* Timer JS */

let end = new Date(Date.UTC(2022,8,28,23,0));;

let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer;

function showRemaining() {
  let now = new Date();
  let distance = end - now;
  if (distance < 0) {

    clearInterval(timer);
    document.querySelector('#countdown').innerHTML = 'Fin de las Ofertas';

    return;
  }
  let days = Math.floor(distance / _day);
  let hours = Math.floor((distance % _day) / _hour);
  let minutes = Math.floor((distance % _hour) / _minute);
  let seconds = Math.floor((distance % _minute) / _second);

  if (days == 1) {
    document.getElementById('countdown').innerHTML = days + ' día, ';
  } else {
    document.getElementById('countdown').innerHTML = `Toda la tienda con 25 OFF quedan : ${days} días `;
  }
  if (hours == 1) {
    document.getElementById('countdown').innerHTML += hours + ' hora  ';
  } else {
    document.getElementById('countdown').innerHTML += hours + ' horas  ';
  }
  if (minutes == 1) {
    document.getElementById('countdown').innerHTML += minutes + ' minuto  ';
  } else {
    document.getElementById('countdown').innerHTML += minutes + ' minutos  ';
  }
  if (seconds == 1) {
    document.getElementById('countdown').innerHTML += seconds + ' segundo ';
  } else {
    document.getElementById('countdown').innerHTML += seconds + ' segundos ';
  }
}

timer = setInterval(showRemaining, 1000);

/* Fin timer JS */


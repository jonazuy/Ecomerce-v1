let productos = []

 fetch('/app/productos.json')
  .then(response => response.json())
  .then(data => {

    productos = data

   function imprimir(){
   
      let tienda = document.getElementById('tienda')
      
      productos.forEach((elements) =>{
         
      let productosHTML =
      
      `
      
      <div class="container card  mt-4" style="width:12rem " id= principal>
      <img src="${elements.imagen}" class=" rounded mt-3  card-img-top" alt="...">
      <div class="card-body">
      <p class="precio"> U$D ${elements.precio}  </p>
        <h5 class="card-title">${elements.descripcion}</h5>
        
        <button type="button" id="btnDispo-${elements.id}" class="btn btn-dark">Solo ${elements.stock} disponibles</button>
      
        <div class="container" id="cuerpoCard">
        
        <button type="button" id="cuerpo-${elements.id}" class="btn btn-light" onClick="agregarAlCarrito(${elements.id})"><i class="fa-solid fa-cart-arrow-down"></i></button>
      
        </div>
      </div>
      </div>`
      
      tienda.innerHTML += productosHTML
      
      })
      
      }
      
      imprimir()

  });



const carrito = [];

let total = 0 




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


function mostrarCarrito(){

let carritoHTML = document.getElementById('carrito')

html = ""

carrito.forEach((producto) => {

html += `
<div id="carritoDiv">
<tr>
   <img  src="${producto.imagen}">
</tr></br>
<tr class="nombre"> 
     ${producto.nombre}
</tr></br>
<tr>
   U$$ ${producto.precio}
</tr>
</br>
<tr>
   Cantidad: ${producto.cantidad}
</tr>
</br>

<button type="button" id="btnBorrar" onclick="mensajeEliminado()" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
</br>
</div>

`
mostrarcantidad()
calcularTotal()

})


carritoHTML.innerHTML = html

}

function borrarCarrito(id){
  
   const item = carrito.find((producto) => producto.id === id)
   const index = carrito.indexOf(item)
   carrito.splice(index , 1)
   
   
   mostrarCarrito()
   mostrarcantidad()
   calcularTotal()
   mensajeEliminado()
   }

function mostrarcantidad(){
   contadorCarrito.innerText = carrito.length
   
}


let mostrarTotal = document.getElementById("total")

function calcularTotal(){
let total = 0
carrito.forEach((producto)=>{
   total+=producto.precio * producto.cantidad
   
})
mostrarTotal.innerHTML = `Total : U$$${total}`

}



function mensajeEliminado(){
   
  
    Swal.fire({
      title: 'Estas seguro de eliminarme?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
         borrarCarrito()
         Swal.fire(
         
          'Eliminado!',
          'Puedes volver a agregarme en cualquier momento.',
          'success'
          
        )
       
        
      }
    })
}


/* funcion stock */

function stock (){

   carrito.forEach((elementos)=>{
      const disponible = document.querySelector(`#btnDispo-${elementos.id}`)
      if(elementos.stock){

         elementos.stock--
         disponible.innerHTML = `Solo ${elementos.stock} Disponible`
         console.log(elementos.stock)
         validStock()
      }
     
   })
}


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


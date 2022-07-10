const productos = [
{
   id: 1, 
   nombre :  'Macbook air' ,
   imagen : 'img/productos/prod2.jpg',
   descripcion : 'Apple MacBook Air MD711LL/A 11.6-inch Laptop',
   precio : 500,
   cantidad : 1 ,
   stock: 2

},
{   
    id: 2, 
    nombre :  'Monitor Benq 24 pulgadas', 
    imagen : 'img/productos/prod3.jpg',
    descripcion : 'BenQ Zowie XL2540K 24.5 inch 240Hz Gaming Monitor',
    precio : 500,
    cantidad : 1 ,
    stock: 5


 },
 {
    id: 3, 
    nombre :  'Placa Gamer Gygabyte', 
    imagen : 'img/productos/prod4.jpg',
    descripcion : 'Wi-Fi GIGABYTE B450 AORUS PRO (Protección térmica AMD Ryzen)',
    precio : 150,
    cantidad : 1,
    stock: 2


 },
 {
    id: 4, 
    nombre :  'Grafica XFX', 
    imagen : 'img/productos/prod5.jpg',
    descripcion : 'XFX Speedster SWFT 210 Radeon RX 6600 CORE Gaming',
    precio :  350,
    cantidad : 1 ,
    stock: 9

 },
 {
    id: 5,
    nombre :  'Smartv Hisense', 
    imagen : 'img/productos/prod6.jpg',
    descripcion : 'Hisense ULED Premium 65U7G QLED Series 65-inch Android 4K',
    precio : 800,
    cantidad : 1 ,
    stock: 7


 },
 {
    id: 6, 
    nombre :  'Intel i5', 
    imagen : 'img/productos/prod7.jpg',
    descripcion : 'Procesador Intel Core i5-10400 para equipos de sobremesa 6 núcleos hasta 4,3 GHz ',
    precio : 200,
    cantidad : 1 ,
    stock: 4


 },
 {
    id: 7, 
    nombre :  'Apple Ipod ', 
    imagen : 'img/productos/prod8.jpg',
    descripcion : 'Apple iPad Pro Tablet (128GB, Wi-Fi, 9.7in) Gray (Renewed)',
    precio : 900,
    cantidad : 1 ,
    stock: 3


 },
 {
    id: 8, 
    nombre :  'Joystick Xbox One', 
    imagen : 'img/productos/prod9.jpg',
    descripcion : 'Xbox Core Wireless Controller Pulse Red',
    precio : 100,
    cantidad : 1,
    stock: 7


 },
 {
    id: 9, 
    nombre :  'Iphone 11 128gb', 
    imagen : 'img/productos/prod10.jpg',
    descripcion : 'Apple iPhone 11, 64GB, Black - Unlocked (Renewed)',
    precio : 1200,
    cantidad : 1 ,
    stock: 6


 },
 {
    id: 10, 
    nombre :  'Joystick Ps5', 
    imagen : 'img/productos/prod11.jpg',
    descripcion : 'Playstation DualSense Wireless Controller',
    precio : 160,
    cantidad : 1 ,
    stock: 4


 },
 {
    id: 11, 
    nombre :  'Macbook M1 max', 
    imagen : 'img/productos/prod12.jpg',
    descripcion : '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina',
    precio : 1200,
    cantidad : 1 ,
    stock: 3


 },
 {
    id: 12,
    nombre :  'Lenovo Legion', 
    imagen : 'img/productos/prod13.jpg',
    descripcion : 'Lenovo Legion 2022 16gb Ram ddr4 rtx3050 2TB SSD',
    precio : 900,
    cantidad : 1 ,
    stock: 8


 },
 {
    id: 13, 
    nombre :  'Apple Airpods', 
    imagen : 'img/productos/prod14.jpg',
    descripcion : 'Apple Airpods Wireless 15h duracion ',
    precio : 180,
    cantidad : 1,
    stock: 5


 },
 {
    id: 14,
    nombre :  'Zotac Rtx 3060', 
    imagen : 'img/productos/prod15.jpg',
    descripcion : 'ZOTAC Gaming GeForce RTX 3060 Twin Edge OC 12GB GDDR6',
    precio : 1000,
    cantidad : 1 ,
    stock: 8
   

 },
 {
    id: 15, 
    nombre :  'Ryzen 5', 
    imagen : 'img/productos/prod16.jpg',
    descripcion : 'AMD Ryzen™ 5 5600 de 6 núcleos y 12 hilos con enfriador Wraith Stealthe',
    precio : 300,
    cantidad : 1 ,
    stock: 5


 },
 {
    id: 16, 
    nombre :  'Xbox One S', 
    imagen : 'img/productos/prod17.jpg',
    descripcion : 'Consola Xbox one S 4K edicion 2022',
    precio : 350,
    cantidad : 1 ,
    stock: 5

 },
 {
   id: 17, 
   nombre :  'EVGA GeForce RTX 3060 XC Gaming, 12G-P5-3657-KR, 12GB', 
   imagen : 'img/productos/prod18.jpg',
   descripcion : 'EVGA GeForce RTX 3060 XC Gaming, 12G-P5-3657-KR, 12GB',
   precio : 700,
   cantidad : 1 ,
   stock: 8

},{
   id: 18, 
   nombre :  'EVGA GeForce RTX 3060 XC Gaming, 12G-P5-3657-KR, 12GB', 
   imagen : 'img/productos/prod19.jpg',
   descripcion : 'Philips 346E2CUAE 34" Curved Frameless, UltraWide QHD',
   precio : 600,
   cantidad : 1 ,
   stock: 8

},
]


const carrito = [];

let total = 0 

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
  
<<<<<<< HEAD
  <button type="button" id="btnDispo-${elements.id}" class="btn btn-dark">Solo ${elements.stock} disponibles</button>
=======
  <button type="button" id="btnDispo-${elements.id}" class="btn btn-dark">Solo ${elements.stock} Disponible</button>
>>>>>>> 034f576 (cambios 10-7)

  <div class="container" id="cuerpoCard">
  
  <button type="button" id="cuerpo-${elements.id}" class="btn btn-light" onClick="agregarAlCarrito(${elements.id})"><i class="fa-solid fa-cart-arrow-down"></i></button>

  </div>
</div>
</div>`

tienda.innerHTML += productosHTML

})

}

imprimir()


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


const productos = [
{
   id: 1, 
   nombre :  'Macbook air' ,
   imagen : 'img/productos/prod2.jpg',
   descripcion : 'Apple MacBook Air MD711LL/A 11.6-inch Laptop',
   precio : 500,
   cantidad : 1 

},
{   
    id: 2, 
    nombre :  'Monitor Benq 24 pulgadas', 
    imagen : 'img/productos/prod3.jpg',
    descripcion : 'BenQ Zowie XL2540K 24.5 inch 240Hz Gaming Monitor',
    precio : 500,
    cantidad : 1 

 },
 {
    id: 3, 
    nombre :  'Placa Gamer Gygabyte', 
    imagen : 'img/productos/prod4.jpg',
    descripcion : 'Una de las mejores Mothers del momento',
    precio : 150,
    cantidad : 1 

 },
 {
    id: 4, 
    nombre :  'Grafica XFX', 
    imagen : 'img/productos/prod5.jpg',
    descripcion : 'XFX Speedster SWFT 210 Radeon RX 6600 CORE Gaming',
    precio :  350,
    cantidad : 1 

 },
 {
    id: 5,
    nombre :  'Smartv Hisense', 
    imagen : 'img/productos/prod6.jpg',
    descripcion : 'Hisense ULED Premium 65U7G QLED Series 65-inch Android 4K',
    precio : 800,
    cantidad : 1 

 },
 {
    id: 6, 
    nombre :  'Intel i5', 
    imagen : 'img/productos/prod7.jpg',
    descripcion : 'Intel core i5 10400f',
    precio : 200,
    cantidad : 1 

 },
 {
    id: 7, 
    nombre :  'Apple Ipod ', 
    imagen : 'img/productos/prod8.jpg',
    descripcion : 'Apple iPad Pro Tablet (128GB, Wi-Fi, 9.7in) Gray (Renewed)',
    precio : 900,
    cantidad : 1 

 },
 {
    id: 8, 
    nombre :  'Joystick Xbox One', 
    imagen : 'img/productos/prod9.jpg',
    descripcion : 'Xbox Core Wireless Controller Pulse Red',
    precio : 100,
    cantidad : 1 

 },
 {
    id: 9, 
    nombre :  'Iphone 11 128gb', 
    imagen : 'img/productos/prod10.jpg',
    descripcion : 'Apple iPhone 11, 64GB, Black - Unlocked (Renewed)',
    precio : 1200,
    cantidad : 1 

 },
 {
    id: 10, 
    nombre :  'Joystick Ps5', 
    imagen : 'img/productos/prod11.jpg',
    descripcion : 'Playstation DualSense Wireless Controller',
    precio : 160,
    cantidad : 1 

 },
 {
    id: 11, 
    nombre :  'Macbook M1 max', 
    imagen : 'img/productos/prod12.jpg',
    descripcion : '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina',
    precio : 1200,
    cantidad : 1 

 },
 {
    id: 12,
    nombre :  'Lenovo Legion', 
    imagen : 'img/productos/prod13.jpg',
    descripcion : 'Lenovo Legion 2022 16gb Ram ddr4 rtx3050 2TB SSD',
    precio : 900,
    cantidad : 1 

 },
 {
    id: 13, 
    nombre :  'Apple Airpods', 
    imagen : 'img/productos/prod14.jpg',
    descripcion : 'Apple Airpods Wireless 15h duracion ',
    precio : 180,
    cantidad : 1 

 },
 {
    id: 14,
    nombre :  'Zotac Rtx 3060', 
    imagen : 'img/productos/prod15.jpg',
    descripcion : 'ZOTAC Gaming GeForce RTX 3060 Twin Edge OC 12GB GDDR6',
    precio : 1000,
    cantidad : 1 

 },
 {
    id: 15, 
    nombre :  'Ryzen 5', 
    imagen : 'img/productos/prod16.jpg',
    descripcion : 'AMD Ryzen™ 5 5600 de 6 núcleos y 12 hilos con enfriador Wraith Stealthe',
    precio : 300,
    cantidad : 1 

 },
 {
    id: 16, 
    nombre :  'Xbox One S', 
    imagen : 'img/productos/prod17.jpg',
    descripcion : 'Consola Xbox one S 4K edicion 2022',
    precio : 350,
    cantidad : 1 

 },

]


const carrito = [];

let total = 0 

function imprimir(){

let tienda = document.getElementById('tienda')

productos.forEach((elements) =>{
   
let productosHTML =

`<div class="container card  mt-4" style="width: 12rem;" id= principal>
<img src="${elements.imagen}" class=" rounded mt-3  card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${elements.nombre}</h5>
  <p class=" card-text ">${elements.descripcion}</p>
  <p class="precio"> U$D ${elements.precio}  </p>
  <a href="#" class=" btn btn-dark" onClick="agregarAlCarrito(${elements.id})">Agregar</a>
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
      
      productosCarrito.cantidad++

   }else{

      producto.cantidad = 1 
      carrito.push(producto)
   }
         mostrarCarrito()

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
<button type="button" onclick="borrarCarrito()" class="btn btn-danger">Eliminar carrito</button>
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
   }

function mostrarcantidad(){
   contadorCarrito.innerText = carrito.length
   
}


let mostrarTotal = document.getElementById("total")

function calcularTotal(){
let total = 0
carrito.forEach((producto)=>{
   total+=producto.precio
})
mostrarTotal.innerHTML = `Total : U$$${total}`

}


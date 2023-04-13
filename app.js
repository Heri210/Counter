let contador = 0;
const valor = document.getElementById("valor");
const botonAumetar = document.getElementById("aumentar");
const botonDisminuir = document.getElementById("disminuir");
const botonResetear = document.getElementById("resetear");



// Proceso para agregar el evento onclick al boton aumentar//

botonAumetar.onclick =  function(){
    // aumebtar el contador 
   contador ++;
   // mostrar el valor 
   valor.innerHTML = contador;  
}

botonDisminuir.onclick = function (){
    // disminuir el contador
    contador --;
    //mostrar el valor
    valor.innerHTML = contador;     
}

// agrego el evento onclick al boton resetear// 

botonResetear.onclick = function () {
    // coloco el contador 0 
    contador = 0; 
    valor.innerHTML = contador;
   valor.style.color = '#283747';           
}

/* Cuando el contador esté en positivo, los números se deben mostrar en verde.
Cuando el contador esté en negativo, los números se deben mostrar en rojo */  

const color = setInterval ((e) => {
    if (contador < -0){
        valor.style.color = "#E74C3C";
          
    } else if (contador > 0){
        valor.style.color = "#196F3D";
        return;
       }    
})
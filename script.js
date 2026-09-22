function calcular() {
    let precio = document.getElementById(("precio")).value;
    let cantidad = document.getElementById(("cantidad")).value;
    let cost = document.getElementById(("envio")).value;

    if(precio == 0){
        alert("ingrese un precio  y una cantidad mayores que cero")
    }

    if(cantidad == 0) {
        alert("Porfavor, Rellenar")
    }
    let subtotal = precio*cantidad;
    let total = subtotal + parseFloat(cost);
    
    document.getElementById("resultado").innerHTML = total;
}
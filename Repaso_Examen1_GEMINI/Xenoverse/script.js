function verificarPoder() {
    let nivel = parseInt(document.getElementById("inputNivel").value);

    if(isNaN(nivel) || nivel < 1 || nivel >= 200){
        alert("Porfavor, ingresar un numero de nivel valido")
    }else if(nivel >= 40 && nivel <=59){
        alert("Tienes el nivel suficiente para desbloquear el Super Saiyan")
    }

    else if (nivel >= 60){
        alert("Tienes el nivel suficiente para desbloquear el Golden o el Modo Bestia")
    }
}

function calcularTemperatura(){
    const farenheit = parseFloat(document.getElementById("inputfarenheit").value);

    if(!isNaN(farenheit)){
        const celcius = (farenheit - 32)*5/9;

        alert("La temperatura calculada es: "+ Math.round(celcius) +" C°");
    }else{
        alert("La temperatura ingresada es incorrecta");
    }
}

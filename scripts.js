function mostrarFoto2(){
    document.getElementById("foto").style.display = "block";
}
function ocultarFoto2(){
    document.getElementById("foto").style.display = "none";
}
function validarTelefono2(){
    var telefono;
    telefono = document.getElementById("telefono").value;
    var digtel = new Array();
    var tel = telefono.length;
    var flagDigitos = false;
    var flagCaracteres = false;

    if(tel < 9){
        flagDigitos = true;
        digtel.push("El telefono debe tener exactamente 10 digitos");
    }
    var caracteres = 0;
    for (var i=0; i<tel; i++){
        if ((telefono.charCodeAt(i) >= 48) && (telefono.charCodeAt(i) <= 57)) caracteres++;
    }
    if (caracteres == 0){
        flagCaracteres = true;
        digtel.push("El telefono debe sólo contener numeros del 0 al 9");
    }

    if(!flagDigitos && !flagCaracteres){
        document.getElementById("msg").innerHTML = "";
        var li = document.createElement("li");
        li.innerHTML = "<span class = 'telefonoCorrecto'>El teléfono ingresado es correcto</span>";
        document.getElementById("msg").appendChild(li);
    }else{
        imprimirErrores(digtel);
    }
}

function imprimirErrores(errores){
    var listaErrores = document.getElementById("msg");
    listaErrores.innerHTML = "";

    errores.forEach(function (error){
        var li = document.createElement("li");
        li.innerHTML = "<span class = 'error'>"+error+"</span>";
        listaErrores.appendChild(li);
    });
}


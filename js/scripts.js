function iniciarMap(){
    var coord = {lat: -33.4564218,lng:-70.6537969};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord
    });

}
function mensaje() {
    var nombre= document.getElementById('txtNombre').value
    var apellidos= document.getElementById('txtApellidos').value
    alert('El usuario ' + nombre + ' ' + apellidos + ' ha sido ingresado correctamente');

    
}

function validaForm(){
    var resp=validarut();
    if (resp==false) {
        return false;
    }
    resp = validaFecha();
    if(resp==false){
        return false;
    }

}

function validaFecha(){
    return true;

    }
}
function validarut(){
    var rut = document.getElementById('txtRut').value;
    alert(rut);
    if (rut.length !=10 ){
        alert('Largo del rut Incorrecto !')
        return false;
    }
    var suma =0;
    var num = 3;
    
    for (let index = 0; index < 8; index++) {
        var carac = rut.slice(index,index+1);
        suma = suma + (carac*num);
        num=num-1;
        if (num==1){
            num=7;
        }
        
    }
    var resto = suma % 11;
    var dv = 11 - resto;

    
    if (dv>9){
        if(dv==10){
            dv='K';
        }else{
            dv=0;
        }
    }
    alert('Digito verificador : '+dv);
    
}

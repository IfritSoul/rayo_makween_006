function mensaje() {
    var nombre= document.getElementById('txtNombre').value
    alert('Yo soy : ' + nombre);
    
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

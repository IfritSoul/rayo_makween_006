
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
    var resp2 = validaFecha();
    if(resp2==false){
        return false;
    }

}

function validaFecha(){
    var fechaUsuario=document.getElementById('txtFechaNaci').value;
    console.log('Fecha usuario : '+fechaUsuario);
    var fechaSistema = new Date();
    console.log('Fecha sistema '+fechaSistema);
    var ano =fechaUsuario.slice(0,4);
    var mes =fechaUsuario.slice(5,7);
    var dia =fechaUsuario.slice(8,10);
    var fechaNuevaUsuario = new Date(ano,(mes-1),dia);
    if (fechaNuevaUsuario>=fechaSistema) {
        alert('Fecha Incorrecta');
        return false;
        
    }
    var unDia = 24*60*60*1000;
    var diferenciaDias=Math.trunc((fechaSistema.getTime()-fechaNuevaUsuario.getTime()) / unDia);
    console.log('Dias : '+diferenciaDias);
    var anos=Math.trunc(diferenciaDias/365);
    console.log('Años : '+anos);
    if (anos<18) {
        alert('Es menor de edad , usted tiene '+anos +' años de edad');
        return false;
        
    }
    return true;

    

    
}
function validarut(){
    var rut = document.getElementById('txtRut').value;
    if (rut.length !=10 ){
        alert('Largo del rut Incorrecto !')
        return false;
    }
    var suma =0;
    var num = 3;
    
    for (let index = 0; index < 8; index++) {
        var carac = rut.slice(index,index+1);
        console.log(carac + ' x' +num);
        suma = suma + (carac*num);
        num=num-1;
        if (num==1){
            num=7;
        }
        
    }
    console.log('Total :'+suma )
    var resto = suma % 11;
    var dv = 11 - resto;

    
    if (dv>9){
        if(dv==10){
            dv='K';
        }else{
            dv=0;
        }
    }
    console.log('Digito verificador : '+dv);
    var dv_usuario = rut.slice(-1).toUpperCase();
    if (dv != dv_usuario) {
        alert('Rut Incorrecto');
        return false;
    }
    return true;
}

class usuario{
    rut;
    nombre;
    apellidos;
    fecha;
    setRut(rut){
        this.rut=rut;
    }
    setNombre(nombre){
        this.nombre=nombre;
    }
    setApellidos(apellidos){
        this.apellidos=apellidos;
    }
    setFecha(fecha){
        this.fecha=fecha;
    }
    getRut(){
        return this.rut;
    }
    getNombre(){return this.nombre;}
    getApellidos(){return this.apellidos;}
    getFecha(){return this.fecha;}
    imprimir(){
        return 'Nombre: '+this.getNombre()+' Apellido : '+this.getApellidos()+ ' Rut : '+this.getRut();
    }
}
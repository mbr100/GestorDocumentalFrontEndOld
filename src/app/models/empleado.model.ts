export class EmpleadoDTO {
    idEmpleado: number;
    nombre: string;
    email: string;
    telefono: string;
    rol: string;


    constructor(idEmpleado: number, nombre: string, email: string, telefono: string, rol: string) {
        this.idEmpleado = idEmpleado;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.rol = rol;
    }
}

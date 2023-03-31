export interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: direccion;
    mostrarDireccion: () => string;
}

interface  direccion {
    calle: string,
    pais: string,
    ciudad: string
}


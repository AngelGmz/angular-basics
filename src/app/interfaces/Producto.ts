export interface Producto {
    desc: string,
    precio: number,
}
export function calcularISV( productos: Producto[]): [number, number] {
    let total = -2;
    productos.forEach(({precio}) => {
        total += precio;
    })
    return [total, total * 0.15]
}
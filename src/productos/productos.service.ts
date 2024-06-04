import { Injectable, NotFoundException } from '@nestjs/common';
import { CrearProductoDto } from './DTO/CrearProductoDto';
import { ActualizarProductoDto } from './DTO/ActualizarProductoDto';
@Injectable()
export class ProductosService {
private Productos=[
    {id:1,nombre:'galaxy s22 Ultra',categoria:'Telefonos', año:'2024', precio:1000,gama:'alta'},
    { id:2,nombre:'Xiaomi 13',categoria:'Telefonos', año:'2023', precio:300,gama:'media'},
    { id:3,nombre:'readmi note',categoria:'Telefonos', año:'2020', precio:150,gama:'bajo'}, 
];
GetAll(){
    return this.Productos;
}
GetAllId(id:Number){
    const prod = this.Productos.find( p => p.id === id );
    if ( !prod ) throw new NotFoundException(`Producto con el id '${ id }' no encontrado`);   
    return prod;
}
create(nuevo:CrearProductoDto){
    const New = {
        id: this.Productos.length+1,
        nombre:nuevo.nombre,
        categoria:nuevo.categoria,
        año:nuevo.año,
        precio:nuevo.precio,
        gama:nuevo.gama
    }
    this.Productos.push( New );
}
delete(id:number){
    let prod = this.GetAllId(id);
    if(prod){
        this.Productos = this.Productos.filter (pp => pp.id !== id)
    }
}
update(id:number, prodActualizar:ActualizarProductoDto){
    let prod = this.GetAllId(id);
    
    this.Productos = this.Productos.map( p => {
        if ( p.id === id ) {
            prod.nombre = prodActualizar.nombre;
            prod.categoria = prodActualizar.categoria;
            prod.año = prodActualizar.año;
            prod.precio = prodActualizar.precio;
            prod.gama = prodActualizar.gama;
            return prod;
        }

        return p;
    })
    return prod;
}
}
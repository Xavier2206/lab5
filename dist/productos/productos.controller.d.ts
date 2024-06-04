import { ProductosService } from './productos.service';
import { ActualizarProductoDto } from './DTO/ActualizarProductoDto';
import { CrearProductoDto } from './DTO/CrearProductoDto';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    getAllProductos(): {
        id: number;
        nombre: string;
        categoria: string;
        año: string;
        precio: number;
        gama: string;
    }[];
    getProductosById(id: String): {
        id: number;
        nombre: string;
        categoria: string;
        año: string;
        precio: number;
        gama: string;
    };
    crearProducto(crearDto: CrearProductoDto): void;
    actualizarProducto(id: String, updateDto: ActualizarProductoDto): {
        id: number;
        nombre: string;
        categoria: string;
        año: string;
        precio: number;
        gama: string;
    };
    eliminarProducto(id: String): void;
}

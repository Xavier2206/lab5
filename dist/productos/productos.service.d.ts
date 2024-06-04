import { CrearProductoDto } from './DTO/CrearProductoDto';
import { ActualizarProductoDto } from './DTO/ActualizarProductoDto';
export declare class ProductosService {
    private Productos;
    GetAll(): {
        id: number;
        nombre: string;
        categoria: string;
        año: string;
        precio: number;
        gama: string;
    }[];
    GetAllId(id: Number): {
        id: number;
        nombre: string;
        categoria: string;
        año: string;
        precio: number;
        gama: string;
    };
    create(nuevo: CrearProductoDto): void;
    delete(id: number): void;
    update(id: number, prodActualizar: ActualizarProductoDto): {
        id: number;
        nombre: string;
        categoria: string;
        año: string;
        precio: number;
        gama: string;
    };
}

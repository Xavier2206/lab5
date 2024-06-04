"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
let ProductosService = class ProductosService {
    constructor() {
        this.Productos = [
            { id: 1, nombre: 'galaxy s22 Ultra', categoria: 'Telefonos', año: '2024', precio: 1000, gama: 'alta' },
            { id: 2, nombre: 'Xiaomi 13', categoria: 'Telefonos', año: '2023', precio: 300, gama: 'media' },
            { id: 3, nombre: 'readmi note', categoria: 'Telefonos', año: '2020', precio: 150, gama: 'bajo' },
        ];
    }
    GetAll() {
        return this.Productos;
    }
    GetAllId(id) {
        const prod = this.Productos.find(p => p.id === id);
        if (!prod)
            throw new common_1.NotFoundException(`Producto con el id '${id}' no encontrado`);
        return prod;
    }
    create(nuevo) {
        const New = {
            id: this.Productos.length + 1,
            nombre: nuevo.nombre,
            categoria: nuevo.categoria,
            año: nuevo.año,
            precio: nuevo.precio,
            gama: nuevo.gama
        };
        this.Productos.push(New);
    }
    delete(id) {
        let prod = this.GetAllId(id);
        if (prod) {
            this.Productos = this.Productos.filter(pp => pp.id !== id);
        }
    }
    update(id, prodActualizar) {
        let prod = this.GetAllId(id);
        this.Productos = this.Productos.map(p => {
            if (p.id === id) {
                prod.nombre = prodActualizar.nombre;
                prod.categoria = prodActualizar.categoria;
                prod.año = prodActualizar.año;
                prod.precio = prodActualizar.precio;
                prod.gama = prodActualizar.gama;
                return prod;
            }
            return p;
        });
        return prod;
    }
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)()
], ProductosService);
//# sourceMappingURL=productos.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosController = void 0;
const common_1 = require("@nestjs/common");
const productos_service_1 = require("./productos.service");
const ActualizarProductoDto_1 = require("./DTO/ActualizarProductoDto");
const CrearProductoDto_1 = require("./DTO/CrearProductoDto");
let ProductosController = class ProductosController {
    constructor(productosService) {
        this.productosService = productosService;
    }
    getAllProductos() {
        return this.productosService.GetAll();
    }
    getProductosById(id) {
        return this.productosService.GetAllId(+id);
    }
    crearProducto(crearDto) {
        return this.productosService.create(crearDto);
    }
    actualizarProducto(id, updateDto) {
        return this.productosService.update(+id, updateDto);
    }
    eliminarProducto(id) {
        return this.productosService.delete(+id);
    }
};
exports.ProductosController = ProductosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "getAllProductos", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "getProductosById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CrearProductoDto_1.CrearProductoDto]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "crearProducto", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String,
        ActualizarProductoDto_1.ActualizarProductoDto]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "actualizarProducto", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "eliminarProducto", null);
exports.ProductosController = ProductosController = __decorate([
    (0, common_1.Controller)('productos'),
    __metadata("design:paramtypes", [productos_service_1.ProductosService])
], ProductosController);
//# sourceMappingURL=productos.controller.js.map
"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Importar cliente e impuestos para hacer las operaciones
// Crear las constantes de impuestos y clientes para ingresar datos
var nuevoImpuesto = new _impuestos["default"](123, 456);
var nuevoCliente = new _cliente["default"]('Jose', nuevoImpuesto);
console.log(nuevoCliente.calcularImpuesto());
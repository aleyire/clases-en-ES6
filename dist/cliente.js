"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Exportar y crear un class Cliente
var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    // Nombre debe ser un string
    this._nombre = nombre; // impuesto debe ser un object

    this._impuesto = impuesto;
  } // Crear Getters y Setters con nombre e impuesto


  _createClass(Cliente, [{
    key: "setNombre",
    value: function setNombre(nombre) {
      this._nombre = nombre;
    }
  }, {
    key: "getNombre",
    value: function getNombre() {
      return this._nombre;
    }
  }, {
    key: "setImpuesto",
    value: function setImpuesto(impuesto) {
      this._impuesto = impuesto;
    }
  }, {
    key: "getImpuesto",
    value: function getImpuesto() {
      return this._impuesto;
    } // Calcular impuesto

  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return "El impuesto es: ".concat((this.Impuestos()._montoBrutoAnual() - this.Impuestos()._deducciones()) * 0.21);
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;
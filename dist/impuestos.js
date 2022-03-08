"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Crear class de impuestos
var Impuestos = /*#__PURE__*/function () {
  function Impuestos(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuestos);

    // montoBrutoAnual y deducciones deben ser numbers
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  } // Crear getters y setters de ambos atributos


  _createClass(Impuestos, [{
    key: "setMontoBrutoAnual",
    value: function setMontoBrutoAnual(montoBrutoAnual) {
      this._montoBrutoAnual = montoBrutoAnual;
    }
  }, {
    key: "getMontoBrutoAnual",
    value: function getMontoBrutoAnual() {
      return this._montoBrutoAnual;
    }
  }, {
    key: "setDeducciones",
    value: function setDeducciones(deducciones) {
      this._deducciones = deducciones;
    }
  }, {
    key: "getDeducciones",
    value: function getDeducciones() {
      return this._deducciones;
    }
  }]);

  return Impuestos;
}();

exports["default"] = Impuestos;
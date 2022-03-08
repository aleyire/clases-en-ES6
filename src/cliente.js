// Exportar y crear un class Cliente
export default class Cliente {
    constructor(nombre, impuesto) {

        // Nombre debe ser un string
        this._nombre = nombre

        // impuesto debe ser un object
        this._impuesto = impuesto
    }

    // Crear Getters y Setters con nombre e impuesto
    setNombre(nombre) {
        this._nombre = nombre
    }
    getNombre() {
        return this._nombre
    }
    setImpuesto(impuesto) {
        this._impuesto = impuesto
    }
    getImpuesto() {
        return this._impuesto
    }
    // Calcular impuesto

    calcularImpuesto() {
        return `El impuesto es: ${
            (this.Impuestos()._montoBrutoAnual() - this.Impuestos()._deducciones()) * 0.21}`
    }
}
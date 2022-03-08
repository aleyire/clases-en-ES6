// Crear class de impuestos
export default class Impuestos {
    constructor(montoBrutoAnual, deducciones) {

        // montoBrutoAnual y deducciones deben ser numbers
        this._montoBrutoAnual = montoBrutoAnual
        this._deducciones = deducciones 
    }
    
    // Crear getters y setters de ambos atributos
    setMontoBrutoAnual(montoBrutoAnual) {
        this._montoBrutoAnual = montoBrutoAnual
    }
    getMontoBrutoAnual() {
        return this._montoBrutoAnual
    }
    setDeducciones(deducciones) {
        this._deducciones = deducciones
    }
    getDeducciones() {
        return this._deducciones
    }
}
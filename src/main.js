// Importar cliente e impuestos para hacer las operaciones
import Cliente from './cliente.js'
import Impuestos from './impuestos.js'

// Crear las constantes de impuestos y clientes para ingresar datos
const nuevoImpuesto = new Impuestos(123, 456)
const nuevoCliente = new Cliente('Jose', nuevoImpuesto)
console.log(nuevoCliente.calcularImpuesto())
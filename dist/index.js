"use strict";
// RETO 1: El Contrato de la API
// Objeto que cumple correctamente la interfaz
const usuarioValido = {
    id: 1,
    username: "curro",
    email: "curro@email.com",
    rol: "admin",
    token: "abc123"
};
// Objeto que provoca un error porque el rol no está permitido
const usuarioInvalido = {
    id: 2,
    username: "usuario2",
    email: "usuario2@email.com",
    rol: "invitado"
};
// Creamos un array con tres tareas iniciales
const misTareas = [
    {
        id: 1,
        titulo: 'Configurar el routing de la app',
        completada: false,
        prioridad: 'Alta'
    },
    {
        id: 2,
        titulo: 'Crear el formulario de login',
        completada: false,
        prioridad: 'Media'
    },
    {
        id: 3,
        titulo: 'Diseñar la página principal',
        completada: false,
        prioridad: 'Baja'
    }
];
// Función para completar una tarea sin modificar el array original
function completarTarea(lista, idBuscar) {
    // Creamos un nuevo array con map()
    const nuevaLista = lista.map(tarea => {
        // Comprobamos si el id coincide
        if (tarea.id === idBuscar) {
            // Devolvemos una copia de la tarea con completada a true
            return { ...tarea, completada: true };
        }
        // Si no coincide, devolvemos la tarea sin cambios
        return tarea;
    });
    // Devolvemos el nuevo array
    return nuevaLista;
}
// Completamos la tarea con id 2
const tareasActualizadas = completarTarea(misTareas, 2);
// Mostramos los resultados
console.log("Array original:", misTareas);
console.log("Array actualizado:", tareasActualizadas);
// RETO 3: Clase Componente y Encapsulación
// Creamos la clase ProductComponent
class ProductComponent {
    // Propiedad pública e inicializada desde el constructor
    constructor(nombreProducto, precioBase) {
        this.nombreProducto = nombreProducto;
        this.precioBase = precioBase;
        // Propiedades privadas
        this.iva = 0.21;
    }
    // Método público para calcular el precio final
    obtenerPrecioFinal() {
        return this.precioBase + (this.precioBase * this.iva);
    }
}
// Creamos una instancia de la clase
const producto = new ProductComponent("Ordenador", 1000);
// Mostramos el nombre y el precio final
console.log("Producto:", producto.nombreProducto);
console.log("Precio final:", producto.obtenerPrecioFinal());
// Intentamos modificar el precioBase desde fuera de la clase
// @ts-expect-error: precioBase es una propiedad privada
producto.precioBase = 1500;
// Creamos la función para procesar la respuesta
function procesarRespuesta(res) {
    // Comprobamos si la respuesta ha sido correcta
    if (res.status === 'success' && res.data) {
        // Recorremos los datos recibidos
        res.data.forEach(dato => {
            console.log("Dato recibido:", dato);
        });
    }
    else {
        // Mostramos el mensaje de error
        console.log("Error:", res.mensajeError);
    }
}
// Creamos una respuesta correcta
const respuestaCorrecta = {
    status: 'success',
    data: ['Usuario 1', 'Usuario 2', 'Usuario 3']
};
// Creamos una respuesta con error
const respuestaError = {
    status: 'error',
    mensajeError: 'No se ha podido conectar con el servidor'
};
// Probamos la función
procesarRespuesta(respuestaCorrecta);
procesarRespuesta(respuestaError);
// RETO 5: Clases Heredadas y super()
// Creamos la clase base ServicioDatos
class ServicioDatos {
    // Propiedad pública endpoint
    constructor(endpoint) {
        this.endpoint = endpoint;
    }
    // Método para conectar con el servidor
    conectar() {
        console.log("Conectando a " + this.endpoint);
    }
}
// Creamos la clase hija ServicioUsuarios
class ServicioUsuarios extends ServicioDatos {
    // Constructor de la clase hija
    constructor(endpoint) {
        // Llamamos al constructor de la clase padre
        super(endpoint);
        // Propiedad propia de la clase hija
        this.entidad = 'usuarios';
    }
}
// Creamos una instancia de ServicioUsuarios
const servicio = new ServicioUsuarios("https://api.ejemplo.com/usuarios");
// Ejecutamos el método heredado
servicio.conectar();
// Mostramos la entidad
console.log("Entidad:", servicio.entidad);

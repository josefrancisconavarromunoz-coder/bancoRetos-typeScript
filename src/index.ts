// RETO 1: El Contrato de la API

// Creamos la interfaz UsuarioAPI
interface UsuarioAPI {
    id: number;
    username: string;
    email: string;
    rol: 'admin' | 'editor' | 'alumno';
    token?: string;
}

// Objeto que cumple correctamente la interfaz
const usuarioValido: UsuarioAPI = {
    id: 1,
    username: "curro",
    email: "curro@email.com",
    rol: "admin",
    token: "abc123"
};

// Objeto que provoca un error porque el rol no está permitido
const usuarioInvalido: UsuarioAPI = {
    id: 2,
    username: "usuario2",
    email: "usuario2@email.com",
    rol: "invitado"
};

// RETO 2: Inmutabilidad Tipada con Arrays de Objetos

// Definimos la interfaz Tarea según los apuntes
interface Tarea {
    id: number;
    titulo: string;
    completada: boolean;
    prioridad: 'Alta' | 'Media' | 'Baja';
    fechaEntrega?: string;
}

// Creamos un array con tres tareas iniciales
const misTareas: Tarea[] = [
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
function completarTarea(lista: Tarea[], idBuscar: number): Tarea[] {

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

    // Propiedades privadas
    private iva: number = 0.21;

    // Propiedad pública e inicializada desde el constructor
    constructor(
        public nombreProducto: string,
        private precioBase: number
    ) {}

    // Método público para calcular el precio final
    obtenerPrecioFinal(): number {
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


// RETO 4: Control de Errores con Tipado Restringido

// Definimos la interfaz RespuestaServidor
interface RespuestaServidor {
    status: 'success' | 'error';
    data?: string[];
    mensajeError?: string;
}

// Creamos la función para procesar la respuesta
function procesarRespuesta(res: RespuestaServidor): void {

    // Comprobamos si la respuesta ha sido correcta
    if (res.status === 'success' && res.data) {

        // Recorremos los datos recibidos
        res.data.forEach(dato => {
            console.log("Dato recibido:", dato);
        });

    } else {

        // Mostramos el mensaje de error
        console.log("Error:", res.mensajeError);
    }
}

// Creamos una respuesta correcta
const respuestaCorrecta: RespuestaServidor = {
    status: 'success',
    data: ['Usuario 1', 'Usuario 2', 'Usuario 3']
};

// Creamos una respuesta con error
const respuestaError: RespuestaServidor = {
    status: 'error',
    mensajeError: 'No se ha podido conectar con el servidor'
};

// Probamos la función
procesarRespuesta(respuestaCorrecta);
procesarRespuesta(respuestaError);
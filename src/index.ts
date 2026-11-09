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
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
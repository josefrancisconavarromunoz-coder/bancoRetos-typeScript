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

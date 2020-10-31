// Definir las funciones que se tienen que disparar cuando exista comunicaciones entre servidor - cliente
// 'io' aparece por el archivo (script) que se importo arriba
var socket = io();

// Cuando tenga un canal de conexion abierto servidor - cliente
// 'on' para escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Cuando se pierda la conexion
socket.on('disconnect', function() {
    console.log('Se perdio la conexion!')
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Javier',
    mensaje: 'Hola Mundo'
}, function(resp) {
    // Esta funcion se ejecuta cuando todo sale bien
    console.log('Respuesta server: ', resp);
});

// Escuchar informacion del servidor
socket.on('enviarMensaje', function(resp) {
    console.log('Servidor: ', resp);
});
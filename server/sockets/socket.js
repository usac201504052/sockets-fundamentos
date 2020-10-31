// Importar 'io'
const { io } = require('../server');

// Cuando exista una conexion cliente - servidor
// 'client' contiene toda la informacion de la computadora que se conecto
io.on('connection', (client) => {
    console.log('Usuario conectado');

    // Mensaje del servidor al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la web'
    });

    // Para la desconexion de usuarios
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar cliente
    // 'enviarMensaje' tiene que tener el mismo nombre que tiene en la funcion donde se envia la info.
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);


        // if (mensaje.usuario) {
        //     // callback es la funcion que se llama cuando todo sale bien
        //     callback({
        //         resp: 'Todo esta bien'
        //     });
        // } else {
        //     // callback es la funcion que se llama cuando todo sale bien
        //     callback({
        //         resp: 'TODO ESTA MAL'
        //     });
        // }

    })
});
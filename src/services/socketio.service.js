import {io} from "socket.io-client";

let socket;

export const initiatSocketConnection = () => {
    socket = io.connect('http://127.0.0.1:8080', 
    {transport: ['websocket', 'polling', 'flashsocket']}
    );

}

export const subscribeToChat = (callback) => {
    socket.emit('message', "data");

    socket.on('myBrodcast', data => {
        return callback(null, data);
    });
}

// export const deleteFromChat = (callback) => {
//     socket.emit('message', "data");

//     socket.on('myBrodcast', data => {
//         return callback(null, data);
//     });
// }
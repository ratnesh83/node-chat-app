var socket = io();
socket.on('connect', function () {
    console.log('connected to server');

    socket.emit('createMessage',{
        from:'Ratnesh',
        text:'Hey'
    });
});

socket.on('disconnect', function () {
    console.log('disconnected');
});

socket.on('newMessage',function(message){
    console.log('New Message',message);
})
var socket = io();

socket.on('connect', function(){
    console.log('Connected to server');
});

socket.on('disconnect', function(){
    console.log('Disconnected from server');
});

// socket.emit('createMessage', {
//     from: 'Sender',
//     text: 'New message from client'
// })

socket.on('newMessage', function(message){
    console.log(message);
    var li = $('<li></li>');
    li.text(message.from + ": " + message.text);
    $('#messages').append(li);
});

$('#message-form').on('submit', function(e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: $('[name=message]').val()
    }, function(){

    });
});
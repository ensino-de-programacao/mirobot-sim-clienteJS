

var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:8899/');

ws.on('open', function open() {
    ws.send('{"cmd":"version", "arg":0, "id":"v-1"}');
    ws.send('{"cmd":"forward", "arg":100, "id":"forward-1"}');
    ws.send('{"cmd":"forward", "arg":100, "id":"forward-2"}');
});

ws.on('message', function(data, flags) {
    console.log(data);
});

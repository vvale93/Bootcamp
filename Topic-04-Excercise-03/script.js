function sendMsg(){
    if ('WebSocket' in window){
        console.log('WebSocket is supported by your Browser!');
        let ws = new WebSocket('ws://demos.kaazing.com/echo');
        let msg = document.getElementById('inputMsg').value;
        
        if(!msg){
            document.getElementById('responseList').innerHTML += `<li>You didn\'t write a message!</li>`;
            return;
        }

        ws.onopen = function(){
            ws.send(msg);
            document.getElementById('responseList').innerHTML += `<li>Message sent: ${msg}</li>`;
        };
       
        ws.onmessage = function (e){ 
            var receivedMsg = e.data;
            document.getElementById('responseList').innerHTML += `<li>Message received: ${receivedMsg}</li>`;
        };
       
        ws.onclose = function(){ 
            console.log('Connection is closed'); 
        };
           
        window.onbeforeunload = function(e){
            socket.close();
        };

    }else{
        alert('WebSocket NOT supported by your Browser!');
    }
}

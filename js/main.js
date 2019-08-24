window.onload=function(){
    var messageEle=document.getElementById('message');
    function receiveMessage(e){
        if(e.origin!=="file:///C:/Users/Aleksey/Desktop/testJS/index.html")
        return;
        messageEle.innerHTML="Message Received: "+e.data;
    }
    window.addEventListener('message',receiveMessage);
}
var cont=0;
var cc=0;
function historial(){	
        //alert("clic");
        console.log("HISTORIAL");
	
              	message = new Paho.MQTT.Message("h");
        message.destinationName = "cfmachado.fie@unach.edu.ec/test2";
        client.send(message);
		
        
        //document.getElementById("sensor").innerHTML="led off";
}






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  var counter=0;
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));
   // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;


  var options = {
   useSSL: false,
    userName: "cfmachado.fie@unach.edu.ec",
    password: "Holamund0",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
      
    client.subscribe("cfmachado.fie@unach.edu.ec/test2");
client.subscribe("cfmachado.fie@unach.edu.ec/test1");  
	  
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }


  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
          historiales=message.payloadString;
          if(historiales[0]=="U"){
              document.getElementById("hist1").innerHTML=historiales;  
          
          }
	   if(historiales[0]=="D"){
              document.getElementById("hist2").innerHTML=historiales;  
          
          }
	  if(historiales=="SEN1-ON"){
              document.getElementById("est1").innerHTML=historiales;
          }
 if(historiales=="SEN1-OFF"){
              document.getElementById("est1").innerHTML=historiales;
          }
	  
	  if(historiales=="SEN2-ON"){
              document.getElementById("est2").innerHTML=historiales;
          }
 if(historiales=="SEN2-OFF"){
              document.getElementById("est2").innerHTML=historiales;
          }
          
  }

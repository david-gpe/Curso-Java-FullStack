// Call the dataTables jQuery plugin
$(document).ready(function() {

});


async function iniciarSesion(){
    let datos={};
    datos.email = document.getElementById("txtEmail").value;
    datos.password = document.getElementById("txtPassword").value;


      const request = await fetch('api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
      const respuesta = await request.text();
      if(respuesta != "Fail"){
      //localStorage es para guardar la informacion contenida en respuesta
      localStorage.token = respuesta;
      localStorage.email = datos.email;
        window.location.href = "index.html"
      }else{
        alert("Usuario invalido");
      }


}
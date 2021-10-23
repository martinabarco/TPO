document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('apellido').value;
    if(usuario.length == 0) {
      alert('No has completado el apellido');
      return;
    }
    var nombre = document.getElementById('nombre').value;
    if (nombre.length == 0) {
      alert('No has completado el Nombre');
      return;
    }
    var exampleInputEmail1 = document.getElementById('exampleInputEmail1').value;
    if (exampleInputEmail1.length == 0) {
      alert('No has completado el Mail');
      return;
    }
    var message = document.getElementById('message').value;
    if (message=='') {
      alert('No has completado los comentarios');
      return;
    }
    this.submit();
    alert("Muchas gracias por enviar el formulario");
  } 

 
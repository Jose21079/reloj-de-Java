{
(function(){
     
      var actualizarHora= function(){
          var fecha = new Date(),
              horas = fecha.getHours(),
              ampm,
              minutos = fecha.getMinutes(),
              segundos = fecha.getSeconds(),
              diaSemana = fecha.getDay(),
              dia = fecha.getDate(),
              mes = fecha.getMonth(),
              year = fecha.getFullYear();
          };
 
          actualizarHora();
}())
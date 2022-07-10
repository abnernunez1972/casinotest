FECHA : 09-07-2022
Despliegue Devops para este Proyecto
.- Servidor AWS Linux Ubuntu 21.10
.- Subdominio en produccion: 
.- Backend basada en Node.js - Express - Mongodb ( APuntando ATLAS DB CLOUD) - Nginx
.- Despliegue realizado con PM2 Node.js usando multinucleos de la instancia AWS
.- Frontend basado en (HTML5 - CSS -Javacrypts)  con algunas librerias de BOOTSTRAP 5.1


Instrucciones 
_______________________________________________________
1. clonar repositorio git@github.com:abnernunez1972/casinotest.git
2.- sobre la carpeta casinotest  levantar el backend el cual corre e el puerto 3000 por defecto con el comando npm start
3.- Para el frontend no se requiere ningún cambio debido a que el servidor express sirve estáticos en PUBLIC/index.html(La URL principal de la aplicación debe ser esta vista ) 
4.- Abrir navegador  y escribir  locahost:3000
___________________________________________________________________




Prueba de Programación  


Se debe realizar una simulación, la cual consiste en un grupo dinámico de personas jugando a la ruleta. El objetivo es crear un sistema para monitorear una mesa de casino. 


Competencias:


Desarrollar una aplicación en php, .Net, Javascript o RoR. 
.- SE ELIGIO JAVASCRYPT


Deben existir vistas que permitan ingresar jugadores, a los cuales se les pueden modificar sus datos, incluyendo cantidad de dinero que poseen, y se deben poder eliminar del sistema (CRUD).
.- SE DESARROLLO UNA APIREST TOTALMENTE FUNCIONAL PARA TODO LOS METODOS  y ruta de los ENDPOINT en:  http://localhost:3000/users


Los jugadores parten con una cantidad de $10.000 por defecto. 
.- SE VALIDO POR DEFECTO AL CREARLOS  USUARIOS NUEVOS COLOCARLE EL SALDO DE 10.000


En cada ronda los jugadores apuestan entre un 8% y 15% del total de dinero que poseen. Si tienen $1.000 o menos, van All In. Si no les queda dinero, no apuestan. 
.- SE REALIZARON PROCESOS  TANTO EN LA EDICION COMO EN CREACION DE JUGADORES PARA CALCULAR EL BASE AL % DE APUESTAS EL MONTO A APOSTAR EN BASE AL SALDO
.- EL FORMULARIO DE EDICION Y CREACION NO PERMITE  % DE APUESTAS POR DEBAJO DE 8% Y SUPERIOR A 15%
.- SE VALIDO QUE AL MOMENTO DE CORRER PROCESO DE APUESTAS QUE SI EL SALDO ES MENOR < A 1001 EL MONTO DE LA APUESTA ES EL SALDO TOTAL DISPONIBLE

El modo de apuesta es el siguiente, un jugador puede apostar a Verde, Rojo o Negro con un 2%, 49% y 49% de probabilidad respectivamente. 
.- SE ADECUDO EL FORMULARIO A FIN DE CADA JUGADOR SELECCIONE DESDE UN DESPLEGABLE (ROJO, NEGRO O VERDE) SINO SELECCIONA NADA SE ASUME QUE NO QUERRA APOSTAR EN ESA ESTA JUGADA


Un jugador recupera el doble de lo apostado si acierta su apuesta, cuando ésta sea Rojo o Negro, y recupera 15 veces lo apostado en caso de acertar Verde. En caso de perder la apuesta, no recupera nada. 
.-  SE IMPLEMENTO LOS GANANCIALES SEGUN LO INDICADO PARA LA ACTUALIZACION EN LA APIREST UNA VEZ CULMINE EL PROCESO DE RULETA


La ruleta entrega resultados con la misma probabilidad que los jugadores hacen apuestas, es decir, Verde 2%, Rojo 49% y Negro 49%.
.- SE APLICO SEGUN LO INDICADO


Cada recarga de la página es una ronda de juego transcurrida, con la apuesta de cada jugador y el resultado de la ruleta.  
.- SE APLICO SEGUN LO INDICADO


La URL principal de la aplicación debe ser esta vista. 
.-  Para el frontend no se requiere ningún cambio debido a que el servidor express sirve estáticos en PUBLIC/index.htm




El diseño no se evaluará. 
Cualquier otra funcionalidad no mencionada se considera en la evaluación, pero no es obligatoria. 
Cualquier cosa no especificada queda a criterio del desarrollador.  


Deseables (no obligatorias pero consideradas):
Los jugadores participan de una partida de ruleta automáticamente, cada 3 minutos (a nivel de datos y vista).


El sistema puede publicarse en algún servidor de producción y proveer el link para ingresar. Pueden usarse servicios gratuitos como Heroku.  
.- Despliegue Devops para este Proyecto
.- Servidor AWS Linux Ubuntu 21.10
.- Subdominio en produccion 



Entrega:
El proyecto de prueba se debe subir a la cuenta personal de Github.
.- repositorio git@github.com:abnernunez1972/casinotest.git


El sistema debe correr en un sistema UNIX. Las instrucciones de instalación y ejecución deberán ser subidas al readme del repositorio.
Despliegue Devops para este Proyecto
.- Servidor AWS Linux Ubuntu 21.10
.- Subdominio en produccion: 
.- Backend basada en Node.js - Express - Mongodb ( APuntando ATLAS DB CLOUD) - Nginx
.- Despliegue realizado con PM2 Node.js usando multi núcleos de la instancia AWS
.- Frontend basado en (HTML5 - CSS -Javacrypts)  con algunas librerías de BOOTSTRAP 5.1

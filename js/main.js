// SISTEMA DE CALIFICACIONES DETALLADO
document.getElementById('evaluar-btn').addEventListener('click', evaluarCalificaciones);

function evaluarCalificaciones() {
    alert('Este sistema solicita 10 notas, calcula su promedio y determina el rendimiento del estudiante en base a sus calificaciones.');

    let n1 = parseFloat(prompt("Ingrese la primera calificacion"));
    let n2 = parseFloat(prompt("Ingrese la segunda calificacion"));
    let n3 = parseFloat(prompt("Ingrese la tercera calificacion"));
    let n4 = parseFloat(prompt("Ingrese la cuarta calificacion"));
    let n5 = parseFloat(prompt("Ingrese la quinta calificacion"));
    let n6 = parseFloat(prompt("Ingrese la sexta calificacion"));
    let n7 = parseFloat(prompt("Ingrese la septima calificacion"));
    let n8 = parseFloat(prompt("Ingrese la octava calificacion"));
    let n9 = parseFloat(prompt("Ingrese la novena calificacion"));
    let n10 = parseFloat(prompt("Ingrese la decima calificacion"));

    let promedio = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) / 10;

    if (promedio < 3.0) {
        alert('El estudiante reprobro, mejore sus calificaciones.')
        alert("Su calificacion es: " + promedio)
        
    }

    else if (promedio < 4.0) {
        alert('El estudiante aprobo de manera aceptable.')
        alert("Su calificacion es : " + promedio)
        
    }

    else if ( promedio < 4.5) {

        alert('El estudiante aprobo de manera sobresaliente.')
        alert("Su calificacion es : " + promedio)
        
        
    }

    else  {

        alert('El estudiante aprobo de manera excelente.')
        alert("Su calificacion es : " + promedio)
        
        
    }
     
}


// CLASIFICACION DE ETAPAS DE LA VIDA CON CONTEXTO EDUCATIVO


document.getElementById('clasificacion-btn').addEventListener('click', clasificacionDeEtapas);

function clasificacionDeEtapas() {

    alert('Este sistema solicita su edad para ver en qué contexto de la vida se encuentra.');
    let edad = parseInt(prompt("Ingrese la edad del estudiante:"));

    let categoria;
    let descripcion;

    if (edad >= 0 && edad <= 12) {
        categoria = "Niño(a)";
        descripcion = "Enfocado en aprendizaje lúdico y exploración.";
    } else if (edad >= 13 && edad <= 17) {
        categoria = "Adolescente";
        descripcion = "Desarrollo del pensamiento crítico y la identidad.";
    } else if (edad >= 18 && edad <= 25) {
        categoria = "Joven Adulto";
        descripcion = "Transición a la educación superior o al mundo laboral.";
    } else if (edad >= 26 && edad <= 59) {
        categoria = "Adulto";
        descripcion = "Posiblemente cursando estudios de posgrado o formación continua.";
    } else if (edad >= 60) {
        categoria = "Adulto Mayor";
        descripcion = "Participación en programas de aprendizaje permanente o por interés personal.";
    } else {
        categoria = "Edad no válida";
        descripcion = "Por favor, ingrese un número positivo.";
    }

    alert("Categoría: " + categoria + "\nDescripción: " + descripcion);
}

// CONVERSOR FLEXIBLE DEL TIEMPO


document.getElementById('conversor-btn').addEventListener('click', conversorDeTiempo);

function conversorDeTiempo () {

    alert('Este sistema permite realizar conversiones de tiempo.');

    let opcion = prompt("ingrese Dias o Meses");
    let Numero = parseInt(prompt("Ingrese un numero dependiendo si quiere meses o dias."));

    if (opcion == "Dias") {
    
        switch (Numero) {
        case 1:
            Dias = "Lunes";
            break;
        case 2:
            Dias = "Martes";
            break;
        case 3:
            Dias = "Miercoles";
            break;
        case 4:
            Dias = "Jueves";
            break;
        case 5:
            Dias = "Viernes";
            break;
        case 6:
            Dias = "Sabado";
            break;
        case 7:
            Dias = "Domingo";
            break;

        default:
            alert("ingreso un dia de la semana valido");
            break;
    }

    alert("El dia de la semana es: " + Dias);

    }
   else if(opcion == "Meses"){
        switch (Numero) {
        case 1:
            Meses = "Enero";
            break;
        case 2:
            Meses = "Febrero";
            break;
        case 3:
            Meses = "Marzo";
            break;
        case 4:
            Meses = "Abril";
            break;
        case 5:
            Meses = "Mayo";
            break;
        case 6:
            Meses = "Junio";
            break;
        case 7:
            Meses = "Julio";
            break;
        case 8:
            Meses = "Agosto";
            break;
        case 9:
            Meses = "Septiembre";
            break;
        case 10:
            Meses = "Octubre";
            break;
        case 11:
            Meses = "Noviembre";
            break;
        case 12:
            Meses = "Diciembre";
            break;

        default:
            alert("ingrese un mes valido");
    }
    alert("El mes es: " + Meses);
   }
    }


// MENU INTERACTIVO
document.getElementById('menu-btn').addEventListener('click', menuInteractivo);

function menuInteractivo(){
    alert("Este sistema es un menu interactivo que le permite hacer operaciones matematicas.");
    alert("Señor usuario por favor ingrese un valor")

    let operacion = parseInt(prompt("por favor ingrese el numero de la operacion a realizar: \n 1. SUMAR \n 2.RESTAR \n 3.MULTIPLICAR \n 4.DIVIDIR"))

    let N1 = parseFloat(prompt("Por favor ingrese el primer valor"))
    let N2 = parseFloat(prompt("Por favor ingrese el segundo valor"))

    let resultado = 0;

    switch (operacion) {
    case 1:
        resultado = N1 + N2;
        alert("la suma es: " + resultado);
        break;
    case 2:
        resultado = N1 - N2;
        alert("la resta es: " + resultado);
        break;
    case 3:
        resultado = N1 * N2;
        alert("la multiplicacion es: " + resultado);
        break;
    case 4:
        if (N2 !== 0) {
            resultado = N1 / N2;
            alert("la division es: " + resultado);
        } else {
            alert("No se puede dividir entre cero.");
        }
        break;
    case 5:
        alert("Saliendo del programa.");
        break;
    default:
        alert("Opción inválida. Por favor, elija una opción válida.");

}}



// CALCULO DE TARIFA DE SERVICIO PUBLICO CON CONTEXTO RESIDENCIAL

document.getElementById('estrato-btn').addEventListener('click', ServicioPublico);

function ServicioPublico (){

    alert('Este sistema permite evaluar la tarifa de su recibo en base a su estrato.');
    let estrato = parseInt(prompt("Ingrese el estrato de su vivienda"))


    if (estrato === 1,2,3,4,5,6) {

        switch (estrato) {
            case 1:
                estrato = "10.000";
                
                break;

            case 2:
                estrato = "15.000";
        
            
                break;

            case 3: 
            estrato = "20.000";


               break;

            case 4:
            case 5:
            case 6:
                estrato ="25.000"


                break;

                 default:

            alert('ingrese un estrato valido')

        }


          alert("La tarifa del servicio publico es: " + estrato);

         

        
    }


}


// CLASIFICACION DEL INDICE DE MASA MUSCULAR


document.getElementById('IMC-btn').addEventListener('click', IndiceMasaMuscular);

function IndiceMasaMuscular (){


    alert('Este sistema calcula su indice de masa muscular segun su peso y altura.');

    let peso = parseFloat(prompt("Ingrese su peso"));
    let altura = parseFloat(prompt("Ingrese su altura"));


    let resultado = (peso / (altura *2 ));


    if (resultado < 18.5) {
        alert(' IMC : ' + resultado)
        alert('Bajo peso - se recomienda ir a un nutricionista.')
          
    }

    else if (resultado < 25) {
         alert(' IMC : ' + resultado)
        alert(' Normal- !Manten un estilo de vida saludable!')
        
    }

    else if (resultado < 30) {
         alert(' IMC : ' + resultado)
        alert('Sobrepeso - Considera realizar mas actividad fisica y mejorar tu dieta.')
        
    }

    else {
         alert(' IMC : ' + resultado)
        resultado = "Obesidad";
        alert('Obesidad - Es importante buscar asesoramiento medico para un plan de salud integral.') 
    }

}



// CALCULADORA DE SUELDO CON BONIFICACIONES POR HIJOS EN UNA EMPRESA
document.getElementById('calculadora-btn').addEventListener('click', calculadoraDeSueldoConBonificacion);
function calculadoraDeSueldoConBonificacion() {
    alert("Este sistema calcula el sueldo total con base en el número de hijos del empleado.");

    let sueldoBase = parseFloat(prompt("Ingrese el sueldo base del empleado:"));
    let numeroHijos = parseInt(prompt("Ingrese el número de hijos que tiene el empleado:"));

    let bonificacion = 0;

    if (numeroHijos === 0) {
        bonificacion = 0;
    } else if (numeroHijos >= 1 && numeroHijos <= 2) {
        bonificacion = sueldoBase * 0.05;
    } else if (numeroHijos >= 3) {
        bonificacion = sueldoBase * 0.10;
    }

    // Evitar decimales largos sin usar toFixed ni Math.round
    bonificacion = parseInt(bonificacion * 100) / 100;
    let sueldoTotal = parseInt((sueldoBase + bonificacion) * 100) / 100;

    alert("Sueldo base: " + sueldoBase + 
          "\nBonificación: " + bonificacion + 
          "\nSueldo total a pagar: " + sueldoTotal);
}








// CLASIFICACION POR TIPO DE SANGRE Y COMPATIBILIDAD DE DONACION EN UN BANCO DE SANGRE


document.getElementById('TipoDeSangre-btn').addEventListener('click', clasificacionSangre);

function clasificacionSangre() {

    alert("Este sistema te permite conocer a quien le puedes donar sangre y de quien puedes recibir.");
    let tipoSangre = prompt("Ingrese su tipo de sangre (A, B, AB, O):");

    let donanteCompatible;
    let receptorCompatible;

    switch (tipoSangre) {
        case "A":
            donanteCompatible = "A, AB";
            receptorCompatible = "A, O";
            break;
        case "B":
            donanteCompatible = "B, AB";
            receptorCompatible = "B, O";
            break;
        case "AB":
            donanteCompatible = "AB";
            receptorCompatible = "A, B, AB, O";
            break;
        case "O":
            donanteCompatible = "A, B, AB, O";
            receptorCompatible = "O";
            break;
        default:
            alert("Tipo de sangre inválido.");
            return;
    }

    alert("Puede donar sangre a: " + donanteCompatible + "\nPuede recibir sangre de: " + receptorCompatible);
}

// CALCULADORA DE NOTAS CON DESEMPEÑO DETALLADO EN CURSO


document.getElementById('Calculadora-btn').addEventListener('click', Calculadora);

function Calculadora (){

    alert("Este algoritmo le permite calcular su desempeño basado en tres notas parciales.")

    let n1 = parseFloat(prompt("Ingrese la primera calificacion"));
    let n2 = parseFloat(prompt("Ingrese la segunda calificacion"));
    let n3 = parseFloat(prompt("Ingrese la tercera calificacion"));


    let promedio = (n1 + n2 + n3) / 3;


    if (promedio < 3.0) {
        alert('Nivel bajo - Requiere reforzar los conocimientos.')
        alert('Su calificacion es: " + promedio')
        
    }

    else if (promedio < 3.9) {
        alert('Nivel basico - Cumple con los aprendizajes fundamentales.')
        alert('Su calificacion es: " + promedio')
        
    }

    else if (promedio < 4.5) {
        alert('Nivel alto - Demuestra un buen dominio de los contenidos.')
        alert('Su calificacion es: " + promedio')
        
    }

   else if (promedio > 4.5) {
    alert('Nivel superior - Alcanza un desempeño sobresaliente.')
    
   }


    alert("Su nota es: " + promedio);


}


// DESCUENTO POR TIPO DE CLIENTE EN UNA TIENDA CON DETALLES DE COMPRA


document.getElementById('Tienda-btn').addEventListener('click', Tienda);


function Tienda (){

alert('Este algoritmo permite ofrecer descuentos en base a la frecuencia en la que es visitada la tienda.')

let frecuencia = prompt("Ingrese la frecuencia con la que visita la tienda, \n 1.Nuevo, \n 2.Frecuente, \n 3.Vip.");

let descuento = 0;

switch (frecuencia) {
    case "1": 
         descuento = "5% de descuento";
        
        break;


    case "2" :
         descuento = "10% de descuento";

        break;

    case "3": 
         descuento = "15% de descuento";

         break;

        default:
}

alert("El descuento aplicado es: " + descuento);


}


// CAJERO AUTOMATICO





// FRUTAS


document.getElementById('frutas-btn').addEventListener('click', explicacionArrives);


// UN ARREGLO ES UNA COLECCION DE DATOS ALMACENADOS EN UNA VARIABLE


function explicacionArrives (){ 
    let frutas = ["Manzanas", "Melon", "Pera", "Fresas", "Sandia"];


    // PODEMOS ACCEDER A LOS ELEMENTOS DEL ARREGLO UNO A LA VEZ

    alert (frutas[1]);

    // PODEMOS ACCEDER A TODOS LOS ELEMENTOS DEL ARREGLO CON JOIN
    alert (frutas.join (" - "));


    // PARA RECORRER TODOS LOS DATOS DE UN ARREGLO NECESITAMOS USAR UN FOR

    alert(frutas.length);

    for ( let i = 0; i < frutas.length; i++) {
        alert( "La fruta en la posicion" + i + "es" + frutas[i])
        
    }

    // INSERTAR DATOS A UN ARREGLO AL FINALS

    let nuevaFruta = prompt("Ingrese una fruta diferente");

    frutas.push(nuevaFruta);
    alert(frutas.join(" - "));

// INSERTAR DATOS A UN ARREGLO AL PRINCIPIO

    let frutaNueva2 = prompt("Ingrese  una fruta para poner al principio ");
    frutas.unshift(frutaNueva2);
    alert(frutas.length);
    alert(frutas.join(" / "));
   
// COMO ELIMINAR UN DATO SEGUN SU POSICION O INDEX
    frutas.splice(1,1); 
    alert(frutas.join(" - "));


// COMO ELIMINAR EL ULTIMO DATO DEL ARREGLO

frutas.pop();
alert(frutas.join(" - "))


// ELIMINAR EL PRIMER DATO DE UN ARREGLO

frutas.shift();
alert(frutas.join(" - "))

// EDITAR O REEMPLAZAR EL VALOR DE UNA POSICION O INDEX

frutas[2]= "Banana";
alert(frutas.join(" - "))


}
// EJERCICIOS CON BUCLE WHILE




// POSITIVOS Y NEGATIVOS

document.getElementById('positivos-btn').addEventListener('click', PositivosNegativos);


function PositivosNegativos () {

    alert ("SEÑOR USUARIO ESTE SISTEMA LE PERMITE LA CONTABILIDAD DE LOS NUMEROS TANTO COMO POSITIVOS COMO NEGATIVOS EXCLUYENDO EL CERO")
    let positivos = 0 
    let negativos = 0


    //PEDIMOS AL USUARIO QUE INGRESE UN NUMERO

    let numero  = parseFloat(prompt("INGRESE UN NUMERO POSITIVO O NEGATIVO, PRESIONE 0 PARA DETENER O FINALIZAR"));
    while (numero !== 0 ) {
         
        if (numero > 0) {
            positivos + positivos + 1;
            
        }

        else if (numero < 0) {
            negativos + negativos +1;
            
        }
        numero = parseFloat(prompt("POR FAVOR INGRESE OTRO NUMERO  U OPRIMA CERO PARA DETENER O FINALIZAR"))
    }

    alert("EL TOTAL DE NUMEROS POSITIVOS ES: " + positivos + "\n EL TOTAL DE NEGATIVOS ES:" + negativos)
}



// VALIDADOR DE CONTRASEÑA

document.getElementById('contrasena-btn').addEventListener('click', validarContrasena);

function validarContrasena() {
    alert("Este sistema le permite validar su contraseña.");
    let contrasena = prompt("Ingrese su contrasena:");
    let contraseaCorrecta = "s3cret0"; // CAMBIA ESTO POR LA CONTRASEÑA
    const contrasenaCorrecta = "s3cret0"; 
// CAMBIA ESTO POR LA CONTRASEÑA
    let intentos = 0;
    const maxIntentos = 3;

    while (intentos < maxIntentos) {
        if (contrasena === contrasenaCorrecta) {
            alert("Contrasena válida. Acceso concedido.");
            return;
        } else {
            intentos++;
            alert("Contrasena incorrecta. Intento " + intentos + " de " + maxIntentos);
            contrasena = prompt("Ingrese su contrasena:");
        }
    }

    alert("Demasiados intentos fallidos. Acceso denegado.");
}



// ACUMULADOR DE COMPRAS HASTA MONTO LIMITE



document.getElementById('acumulador-btn').addEventListener('click', AcumuladorDeCompras);

function AcumuladorDeCompras() {
    alert("Este sistema acumula el total de sus compras.");

    let totalCompras = 0; // Inicializamos el total en 0
    let cantidadCompras = 0; // Inicializamos la cantidad de compras en 0

    while (totalCompras < 100000) {
        let compra = parseFloat(prompt("Ingrese el monto de la compra:"));
        totalCompras += compra;
        cantidadCompras++;
    }

    alert("El total acumulado de sus compras es: $" + totalCompras);
    alert("Cantidad de compras realizadas: " + cantidadCompras);
}



// INGRESO DE ESTUDIANTES HASTA CUPO MAXIMO
document.getElementById('estudiantes-btn').addEventListener('click', ingresoEstudiantes);

function ingresoEstudiantes() {

    alert("Este sistema permite ingresar estudiantes hasta un cupo máximo de 30.");

    let cupoMaximo = 30;
    let estudiantes = [];
    let cantidadEstudiantes = 0;

    while (cantidadEstudiantes < cupoMaximo) {
        let nombreEstudiante = prompt("Ingrese el nombre del estudiante:");
        estudiantes.push(nombreEstudiante);
        cantidadEstudiantes++;
    }

    alert("Se han ingresado " + cantidadEstudiantes + " estudiantes.");
    alert("Lista de estudiantes: " + estudiantes.join(", "));
}



// AQUI VA EL DEL CAJERO AUTOMATICO









// EJERCICIOS CON BUCLE FOR


// TABLA DE MULTIPLICAR PERSONALIZADA



document.getElementById('multiplicar-btn').addEventListener('click', tablaMultiplicarPersonalizada);

function tablaMultiplicarPersonalizada() {
    alert("Este sistema genera una tabla de multiplicar personalizada.");

    let numero = parseInt(prompt("Ingrese el número para generar la tabla de multiplicar:"));
    let limite = parseInt(prompt("Ingrese el límite de la tabla:"));

    let tabla = "";
    for (let i = 1; i <= limite; i++) {
        tabla += numero + " x " + i + " = " + (numero * i) + "\n";
    }

    alert("Tabla de multiplicar del " + numero + ":\n" + tabla);
}

// SUMA DE LOS PRIMEROS NUMEROS NATURALES

document.getElementById('sumaNumeros-btn').addEventListener('click', sumaDeNumerosNaturales);

function sumaDeNumerosNaturales() {
    alert("Este sistema suma los primeros números naturales hasta un límite.");

    // AQUI EL USUARIO INGRESA UN NUMERO EN EL CUAL 

    let limite = parseInt(prompt("Ingrese el límite para la suma:"));
    let suma = 0;

    for (let i = 1; i <= limite; i++) {
        suma += i;
    }

    alert("La suma de los primeros " + limite + " números naturales es: " + suma);
}


// CONTADOR DE CARACTERES EN PALABRAS

document.getElementById('contador-btn').addEventListener('click', contarcaracteresPorPalabras);
function contarcaracteresPorPalabras() {
    alert("Señor usuario este sistema le permitira leer cada palabra y contar sus caracteres.");
    let cantidadPalabras = parseInt(prompt("¿Cuantas palabras desea ingresar"));

    for (let contador = 1; contador <= cantidadPalabras; contador = contador +1) {
         
        let palabra = prompt("INGRESE LA PALABRA #" + contador + " :");
        let cantidadCaracteres = palabra.length;

        alert( " LA PALABRA " + palabra + " tiene un total de " + cantidadCaracteres+ " de caracteres" );

    }
}


// GENERADOR DE SECUENCIa DE NUMEROS PARES
document.getElementById('pares-btn').addEventListener('click', generarPares);
function generarPares() {
    alert("Este sistema genera una secuencia de números pares.");

    let limite = parseInt(prompt("Ingrese el límite para la secuencia de números pares:"));
    let secuencia = "";

    for (let i = 0; i <= limite; i += 2) {
        secuencia += i + " ";
    }

    alert("Secuencia de números pares hasta " + limite + ":\n" + secuencia);
}




document.getElementById('objetos-btn').addEventListener('click', PracticaObjetos);

function PracticaObjetos(){
    let aprendiz = {
        nombre : "Valentina",
        apellidos : "Palacios",
        programa :"ADSO",
        ficha : 3065273,
    }

    // COMO ACCEDER A UN DATO DEL OBJETO

    
    //alert(aprendiz.apelllidos);
    // alert(aprndiz["nombres"]);
    let apellidos = aprendiz.apellidos;

    // como acceder a todos los datos del objeo

    for (let clave in aprendiz) {
        alert(clave + " : " + aprendiz[clave]);
        
    }

    // COMO INSERTAR VALORES A UN OBKJETO

    aprendiz.edad = parseInt(prompt("ingrese la edad"));

    // como modificar un valor de alguna clave o atributo

    aprendiz.apellidos =  prompt("ingrese su apellido")

      // como eliminar una clave y su valor
      delete aprendiz.contrato

        for (let clave in aprenduz) {
        alert(clave + " : " + aprendiz[clave]);
        
    }

    // como eliminar una clave y su valor

    

}



document.getElementById('iniciarSecion-btn').addEventListener('click', iniciarSecion);
function iniciarSecion(){
    let usuarios = [

            {

                nombre: "Valentian",
                email: "valentnaran@gmail.com",
                clave : "123abc",
                rol : "administrador"
            },

               {

                nombre: "Karen",
                email: "karen@gmail.com",
                clave : "123abc",
                rol : "administrador"
            },

               {

                nombre: "Antonia",
                email: "antonia@gmail.com",
                clave : "123abc",
                rol : "administrador"
            }

            

    ];


    let correoIngresado = prompt("ingrese su correo :");
    let claveIngresada = prompt("ingrese su contraseña :");
    let usuarioEncontrado = null;

   for (let i = 0; i < usuarios.length; i ++) {

    if (
        usuarios[i].email === correoIngresado &&
        usuarios [i].clave === claveIngresada 
    ) {
        usuarioEncontrado = usuarios[i];
        break;
    // el break rompe el bucle for
        
    }
   
    
   }

   if (usuarioEncontrado ) {
    alert("Bienvenido " + usuarioEncontrado.rol + " " + usuarioEncontrado.nombre)

   }

   else{
    alert("Datos incorrectos, verifique o registrese");
   }

}



// INICIAR SECION DINAMICO
document.getElementById('iniciarSecionDinamico-btn').addEventListener('click', iniciarSecionDinamico);
function iniciarSecionDinamico() {
    alert("Este es un  sistema de inicio de secion dinamico.");

// PASO 1 CREAR ARREGLO VACIO DE USUARIOS Y SOLICITAR LA CANTIDAD
    let usuarios = [];
    let cantidadUsuarios = parseInt(prompt("Ingrese la cantidad de usuarios que quiere que tenga el sistema"));

    // PASO 2 SOLICITar los diferentes datos de los usuarios segun la cantidad definida

    for (let  i = 0 ; i < cantidadUsuarios; i++) {
        let  variableNombre = prompt("Ingrese el nombre del usuario N");
            let  variableEmail = prompt("Ingrese el correo del usuario N");
              let  variableClave = prompt("Ingrese la clave del usuario N");
            let  variableRol = prompt("Ingrese el rol del usuario N");



            // paso 3 creamos el objeto y lo agregamos al objeto
            usuarios.push(

                {
                    nombre : variableNombre,
                    email : variableEmail,
                    clave : variableClave,
                    rol : variableRol
                }
            )
             
         
    }


    // PASO 4 SOLICITAMOS LAS CREDENCIALES DE ACCESO

    let correoIngresado = prompt("ingrese el correo con el que desea iniciar secion ");
    let claveIngresada = prompt("ingrese la clave con la que desea iniciar secion");

    let usuarioEncontrado = null;  

    // PASO 5 VALIDAR LOS DATOS DE LOS DIFERENTES OBJETOS VALIDADOS EN EL ARREGLO USUARIO

    for (let i = 0; i < usuarios.length; i++) {
        if (
            usuarios[i].email === correoIngresado &&
            usuarios[i].clave === claveIngresada
        ) {
            usuarioEncontrado = usuarios[i];
            break;
        }
        
    }

    if (usuarioEncontrado) {
        alert("Bienvenido " + usuarioEncontrado.rol + " " + usuarioEncontrado.nombre);  
    }     
    else {
        alert("Usuario y contraseña invalidos");

    
}
}

// ESTE SISTEMA REGISTRA NOTAS Y EL CALCULO DEL PROMEDIO GENERAL
document.getElementById('notas-btn').addEventListener('click', registroNotas);
function registroNotas() {
    alert("Este sistema permite registrar notas y calcular el promedio general.");

    let nombre = prompt("Ingrese el nombre del estudiante:");
    let cantidadNotas = parseInt(prompt("¿Cuántas notas vas a registrar?"));

    let notas = [];
    let sumaNotas = 0;
    let enRiesgo = false;

    for (let i = 0; i < cantidadNotas; i++) {
        let nota = parseFloat(prompt("Ingrese la nota #" + (i + 1) + ":"));
        notas.push(nota);
        sumaNotas += nota;
        if (nota < 3.0) {
            enRiesgo = true;
        }
    }

    let promedio = sumaNotas / cantidadNotas;

    // Mostrar todas las notas
    let mensajeNotas = "Notas del estudiante " + nombre + ":\n";
    for (let i = 0; i < notas.length; i++) {
        mensajeNotas += "Nota #" + (i + 1) + ": " + notas[i] + "\n";
    }

    mensajeNotas += "\nPromedio general: " + promedio.toFixed(2) + "\n";

    // Agregar mensaje según promedio
    if (promedio >= 4.5) {
        mensajeNotas += "¡Excelente trabajo!";
    } else if (promedio >= 3.5) {
        mensajeNotas += "Buen trabajo, sigue así.";
    } else if (promedio >= 3.0) {
        mensajeNotas += "Aprobaste, pero puedes mejorar.";
    } else {
        mensajeNotas += "Estás en riesgo académico.";
    }

    // Agregar si hay nota baja
    if (enRiesgo) {
        mensajeNotas += " Tienes al menos una nota menor a 3.0.";
    }

    // Mostrar resultado final
    alert(mensajeNotas);
}
    

// INVENTARIO DE PRODUCTOS CON DETALLES DE CADA UNO
document.getElementById('inventarioProductos-btn').addEventListener('click', inventarioProductos);
function inventarioProductos() {
    alert("Sistema de inventario basico.");
    let n = parseInt(prompt("¿Cuantos productos vas a registrar?"));
    let inventario = [];

    for (let i = 0; i < n; i++) {
        let nombre = prompt("Nombre del producto #" + (i + 1) + ":");
        let precio = parseFloat(prompt("Precio de " + nombre + ":"));
        let cantidad = parseInt(prompt("Cantidad de " + nombre + ":"));
        inventario.push({ nombre, precio, cantidad });
    }

    let opcion;
    do {
        opcion = prompt(
            "Elige una opción:\n1. Ver inventario\n2. Vender\n3. Reabastecer\n4. Salir"
        );

        if (opcion === "1") {
            let mensaje = "Inventario:\n";
            for (let i = 0; i < inventario.length; i++) {
                mensaje +=
                    (i + 1) + ". " +
                    inventario[i].nombre + " - $" +
                    inventario[i].precio + " - Cantidad: " +
                    inventario[i].cantidad + "\n";
            }
            alert(mensaje);

        } else if (opcion === "2" || opcion === "3") {
            let indice = parseInt(prompt("Número del producto:")) - 1;
            if (indice >= 0 && indice < inventario.length) {
                let cantidad = parseInt(prompt("Cantidad:"));
                if (cantidad > 0) {
                    if (opcion === "2") {
                        if (cantidad <= inventario[indice].cantidad) {
                            inventario[indice].cantidad -= cantidad;
                            alert("Venta realizada.");
                        } else {
                            alert("No hay suficiente stock.");
                        }
                    } else {
                        inventario[indice].cantidad += cantidad;
                        alert("Producto reabastecido.");
                    }
                } else {
                    alert("Cantidad inválida.");
                }
            } else {
                alert("Producto no válido.");
            }

        } else if (opcion !== "4") {
            alert("Opción no válida.");
        }
    } while (opcion !== "4");

    alert("Fin del programa.");
}


// ENCUESTA DE SATISFACCION DE CLIENTES
document.getElementById('encuesta-btn').addEventListener('click',encuestaSatisfaccion );
function encuestaSatisfaccion() {
    alert("Encuesta de satisfacción: califica del 1 al 5.");

    const respuestas = [];
    const totalUsuarios = 10;

    for (let i = 0; i < totalUsuarios; i++) {
        let calificacion = parseInt(prompt("Usuario #" + (i + 1) + ", ingresa tu calificación (1 a 5):"));
        respuestas.push(calificacion);
    }

    let conteo = [0, 0, 0, 0, 0];
    let suma = 0;

    for (let i = 0; i < respuestas.length; i++) {
        conteo[respuestas[i] - 1]++;
        suma += respuestas[i];
    }

    let promedio = suma / totalUsuarios;

    let mensaje = "Resultados de la encuesta:\n";
    for (let i = 0; i < conteo.length; i++) {
        mensaje += "Calificación " + (i + 1) + ": " + conteo[i] + " votos\n";
    }
    mensaje += "\nPromedio de satisfacción: " + promedio + "\n";

    let votosSatisfechos = conteo[3] + conteo[4];
    if (votosSatisfechos > totalUsuarios / 2) {
        mensaje += "La mayoría se mostró satisfecha.";
    } else {
        mensaje += "La mayoría no se mostró satisfecha.";
    }

    alert(mensaje);
}

// ANALISIS DE TEMPERATURAS SEMANALES
document.getElementById('temperatura-btn').addEventListener('click',analisisTemperaturas );
function analisisTemperaturas() {
    let temperaturas = [22, 24, 21, 23, 25, 26, 22];

    let suma = 0;
    let max = temperaturas[0];
    let min = temperaturas[0];
    let diasMayor23 = 0;

    for (let i = 0; i < temperaturas.length; i++) {
        let temp = temperaturas[i];
        suma += temp;

        if (temp > max) {
            max = temp;
        }

        if (temp < min) {
            min = temp;
        }

        if (temp > 23) {
            diasMayor23++;
        }
    }

    let promedio = suma / temperaturas.length;

    let mensaje = "Analisis de temperaturas semanales:\n";
    mensaje += "Temperatura promedio: " + promedio + "\n";
    mensaje += "Temperatura más alta: " + max + "\n";
    mensaje += "Temperatura más baja: " + min + "\n";
    mensaje += "Días con temperatura mayor a 23 grados: " + diasMayor23;

    alert(mensaje);
}


// FILTRADO DE ESTUDIANTES APROBADOS




// PRIMER EJERCICIO CON OBJETOS

// REGISTRO DE USUARIO Y VALIDACION DE ACCESO




// AGENDA DE CONTACTOS

document.getElementById('contactos-btn').addEventListener('click', agendaContactos);
function agendaContactos() {
    alert("Este sistema le permite agendar contactos");
    alert("Agenda: registra hasta 5 contactos.");

    let contactos = [];

    for (let i = 0; i < 5; i++) {
        let nombre = prompt("Nombre del contacto #" + (i + 1) + ":");
        let numero = prompt("Número del contacto #" + (i + 1) + ":");
        let correo = prompt("Correo del contacto #" + (i + 1) + ":");

        contactos.push({ nombre: nombre, numero: numero, correo: correo });
    }

    let buscar = prompt("Ingresa el nombre del contacto a buscar:");

    let encontrado = null;
    for (let i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre === buscar) {
            encontrado = contactos[i];
            break;
        }
    }

    if (encontrado) {
        alert("Contacto encontrado:\nNombre: " + encontrado.nombre + "\nNúmero: " + encontrado.numero + "\nCorreo: " + encontrado.correo);

        let editar = prompt("¿Quieres editar este contacto? (sí/no)");
        if (editar === "sí" || editar === "si") {
            encontrado.nombre = prompt("Nuevo nombre:", encontrado.nombre);
            encontrado.numero = prompt("Nuevo número:", encontrado.numero);
            encontrado.correo = prompt("Nuevo correo:", encontrado.correo);

            alert("Contacto actualizado.");
        }
    } else {
        alert("Contacto no encontrado.");
    }
}


// SISTEMA DE COMPRAS CON CARRITO

document.getElementById('compras-btn').addEventListener('click', sistemaCompras);
function sistemaCompras() {
    alert("Sistema de compras,agrega productos al carrito.");

    let carrito = [];
    let agregarMas = true;

    while (agregarMas) {
        let nombre = prompt("Nombre del producto:");
        let precio = parseFloat(prompt("Precio unitario:"));
        let cantidad = parseInt(prompt("Cantidad:"));

        carrito.push({ nombre: nombre, precio: precio, cantidad: cantidad });

        let respuesta = prompt("¿Quieres agregar otro producto? (sí/no)");
        if (respuesta !== "sí" && respuesta !== "si") {
            agregarMas = false;
        }
    }

    let total = 0;
    let resumen = "Resumen de tu carrito:\n";

    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        let subtotal = producto.precio * producto.cantidad;
        total += subtotal;
        resumen += producto.nombre + " - Precio: " + producto.precio + ", Cantidad: " + producto.cantidad + ", Subtotal: " + subtotal + "\n";
    }

    resumen += "\nTotal a pagar: " + total;

    alert(resumen);
}


// CATALOGO DE PELICULAS

document.getElementById('peliculas-btn').addEventListener('click', catalogoPeliculas);
function catalogoPeliculas() {
    alert("Este sistema le permite encontrar una pelicula en base a su genero preferido.");
    const peliculas = [
        { titulo: "Inception", genero: "Ciencia ficción", año: 2010 },
        { titulo: "Titanic", genero: "Romance", año: 1997 },
        { titulo: "Interstellar", genero: "Ciencia ficción", año: 2014 },
        { titulo: "Coco", genero: "Animación", año: 2017 }
    ];

    // Buscar por género
    let generoBuscado = prompt("Ingrese el género para buscar películas:");

    let peliculasGenero = [];
    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].genero === generoBuscado) {
            peliculasGenero.push(peliculas[i]);
        }
    }

    let mensajeGenero = "Películas del género " + generoBuscado + ":\n";
    if (peliculasGenero.length > 0) {
        for (let i = 0; i < peliculasGenero.length; i++) {
            mensajeGenero += peliculasGenero[i].titulo + " (" + peliculasGenero[i].año + ")\n";
        }
    } else {
        mensajeGenero += "No se encontraron películas de ese género.";
    }

    // Películas posteriores al 2000
    let peliculasRecientes = [];
    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].año > 2000) {
            peliculasRecientes.push(peliculas[i]);
        }
    }

    let mensajeRecientes = "\nPelículas estrenadas después del año 2000:\n";
    for (let i = 0; i < peliculasRecientes.length; i++) {
        mensajeRecientes += peliculasRecientes[i].titulo + " (" + peliculasRecientes[i].genero + ", " + peliculasRecientes[i].año + ")\n";
    }

    alert(mensajeGenero + mensajeRecientes);
}


// REGISTRO DE VEHICULOS Y BUSQUEDA POR PLACA


document.getElementById('buscarVehiculoPorPlaca-btn').addEventListener('click',buscarVehiculoPorPlaca );
function buscarVehiculoPorPlaca() {
    alert("Este algoritmo le permite buscar su vehiculo con el numero de su placa.");
    const vehiculos = [
        { placa: "ABC123", marca: "Toyota", modelo: 2020 },
        { placa: "XYZ789", marca: "Chevrolet", modelo: 2018 },
        { placa: "LMN456", marca: "Ford", modelo: 2022 }
    ];

    let placaBuscada = prompt("Ingresa la placa del vehículo a buscar:");
    let encontrado = null;

    for (let i = 0; i < vehiculos.length; i++) {
        if (vehiculos[i].placa === placaBuscada) {
            encontrado = vehiculos[i];
            break;
        }
    }

    if (encontrado) {
        alert("Vehículo encontrado:\nPlaca: " + encontrado.placa + "\nMarca: " + encontrado.marca + "\nModelo: " + encontrado.modelo);
    } else {
        alert("No se encontró ningún vehículo con esa placa.");
    }
}








































    



































document.addEventListener('DOMContentLoaded',function(){

});

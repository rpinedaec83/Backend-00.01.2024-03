
/*01) Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y 
      edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33” */
       
       let func_Arrow = (Nombre,Apellido,Edad) => { return console.log(`hola mi nombre es ${Nombre} ${Apellido} y mi edad es ${Edad} `)};

       //Test de la funcion
       console.log("Ejercicio 01: ");
       console.log(func_Arrow("marco","poma",32));
       console.log("************************************************************");




/*02)  Cree una función que tome números y devuelva la suma de sus cubos.
       sumOfCubes(1, 5, 9) ➞ 855
       Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855 */
       function Sum_Cubes(Num1,Num2,Num3) {
              let sum=0;
              sum = Num1**3+ Num2**3 + Num3**3;
              return sum
       }

        //Test de la Funcion
       console.log("Ejercicio 02: ");
       console.log("La suma de los cubos de los Numeros es: " + Sum_Cubes(1,5,9));
       console.log("************************************************************");




/*03)  Crear una funcion que me retorne el tipo de valor entregado, 
       invocar la función para los distintos tipos de js */
       function Tipo_Dato(param) {
              let Data_Type = typeof param;
              
              switch (Data_Type) {
                     case "number":
                            console.log("El dato ingresado es de tipo Numero")    
                     break;

                     case "string":
                            console.log("El dato ingresado es de tipo String")    
                     break;

                     case "boolean":
                            console.log("El dato ingresado es de tipo Booleano")    
                     break;

                     case "undefined":
                            console.log("El dato ingresado es de tipo Indefinido")    
                     break;
              
                     default:
                            break;
              }
              
       }

       //Test de la Funcion
       console.log("Ejercicio 03: ")
       Tipo_Dato("a");
       console.log("************************************************************");


       

/*04)  Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest) */
       function Sum_All(...Arr) {
              let sum=0;
              for(let arg of Arr){
                     sum+=arg
              }
              return sum
       }

       //Test de la Funcion
       console.log("Ejercicio 04: ")
       console.log(Sum_All(1,2,3,5,6));
       console.log("************************************************************");




/*05)  Crear una función que reciba un array de valores y filtre los valores que no son string */

       function filterList_Str(Arr) {
              let Arreglo=[];
              Arr.forEach(elem=>{if((typeof elem)=="string"){Arreglo.push(elem)}})
              return Arreglo
       }

       //Test de la Funcion
       console.log("Ejercicio 05: ");
       console.log(filterList_Str([1, 2, 3, "x", "y", 10]));
       console.log("************************************************************");





/*06)  Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
       minMax([1, 2, 3, 4, 5]) ➞ [1, 5] */
       function MinMax(Arr) {
              let T1=Math.min.apply(null,Arr);
              let T2=Math.max.apply(null,Arr);
              let Array_MinMax=[T1,T2];
              return Array_MinMax
       }
       
       //Test de la Funcion
       console.log("Ejercicio 06: ")
       console.log(MinMax([1,2,3,4,5]));
       console.log("************************************************************");




/*07)  Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma 
       de un número de teléfono.
       formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890" */

       function formatPhoneNumber(Arr) {
              let Arr_StrAux=Arr.toString();
              let Arr_Str="",Arr_Str00="",Arr_Str01="",Arr_Str02="",Arr_Str03="";

              for (let i = 0; i < Arr_StrAux.length; i++) {
                     if( Arr_StrAux[i]!=","){
                            Arr_Str00=  Arr_Str00+Arr_StrAux[i];
                     }
              }
              Arr_Str01=Arr_Str00.substring(0,3);
              Arr_Str02=Arr_Str00.substring(3,6);
              Arr_Str03=Arr_Str00.substring(6,10);
              Arr_Str="(".concat(Arr_Str01,") ",Arr_Str02,"-",Arr_Str03);

              return Arr_Str
              
       }

       //Test de la Funcion
       console.log("Ejercicio 07: ")
       console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
       console.log("************************************************************");


/*08)  Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con 
       el mayor número de cada uno.
       findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2] */

       function findLargestNums(arr) {
              let arreglo=[];
              arr.forEach(elem1 => {arreglo.push(Math.max.apply(null,elem1)) });
              return arreglo
       }

       //Test de la Funcion
       console.log("Ejercicio 08: ");
       console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));
       console.log("************************************************************");




/*09)  Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
       charIndex("hello", "l") ➞ [2, 3]
       The first "l" has index 2, the last "l" has index 3. 
       charIndex("circumlocution", "c") ➞ [0, 8]
       The first "c" has index 0, the last "c" has index 8. */

/*10)  Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
       toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]] */

/*11)  Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
       AgetBudgets([
            { name: "John", age: 21, budget: 23000 },
            { name: "Steve",  age: 32, budget: 40000 },
            { name: "Martin",  age: 16, budget: 2700 }
            ]) ➞ 65700 */

       function getBudgets(Arr) {
              let Sum=0
              let Arreglo=Arr.map(elem=>{return elem.budget});
       
              Sum=Arreglo.reduce((Acc,Val_Current)=>{return Acc+Val_Current});
              return Sum
       }

       //Test de la Funcion
       Array_Test=([
              { name: "John", age: 21, budget: 23000 },
              { name: "Steve",  age: 32, budget: 40000 },
              { name: "Martin",  age: 16, budget: 2700 }
              ])

       console.log("Ejercicio 11: ");
       console.log(getBudgets(Array_Test));
       console.log("************************************************************");





/*12)  Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
       getStudentNames([
            { name: "Steve" },
            { name: "Mike" },
            { name: "John" }
            ]) ➞ ["Becky", "John", "Steve"] */

       function getStudentNames(Arr) {
              let Arreglo=Arr.map(elem=>{return elem.name});
              return Arreglo
       }

       //Test de la Funcion
       Arr_Student=[{ name: "Steve" },{ name: "Mike" },{ name: "John" }]
       console.log("Ejercicio 12: ");
       console.log(getStudentNames(Arr_Student));
       console.log("************************************************************");




/*13)  Escriba una función que convierta un objeto en una matriz de claves y valores.
       objectToArray({
            likes: 2,
            dislikes: 3,
            followers: 10
            }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]] */


/*14)  Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
       squaresSum(3) ➞ 14
            1² + 2² + 3² =
            1 + 4 + 9 =
            14*/
            
            function squaresSum(n) {
                let sum=0;
                if (n!=NaN && n>0) {
                    for (let i = 1; i <= n; i++) {
                        sum=sum+i**3; 
                        //console.log(sum);
                    } 
                    
                }
                else{
                    console.log("Por favor,Ingrese un valor valido")
                }
                return sum
            }

            //Test de la Funcion
            Num=10;
            console.log("Ejercicio 14: ");
            console.log("La suma de los "+ Num + " primeros numeros enteros positivos es: "+ squaresSum(Num));
            console.log("************************************************************");




/*15)  Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
       multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]   */

       function multiplyByLength(Arr) {
              let len=Arr.length;
              let Arreglo=Arr.map(elem=>{return elem*len});
              return Arreglo   
       }

       //Test de la Funcion
       console.log("Ejercicio 15: ");
       console.log(multiplyByLength([2, 3, 1, 0]));
       console.log("************************************************************");




/*16)  Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este 
       número a cero.
       countdown(5) ➞ [5, 4, 3, 2, 1, 0]  */

       function countdown(n) {
              let Arreglo=[];
              if (n>0) {
                     for (let i = 0; i <= n; i++) {
                            Arreglo.push(n-i);          
                     }      
              }
               return Arreglo          
       }

       //Test de la Funcion
       console.log("Ejercicio 16: ");
       console.log(countdown(11));
       console.log("************************************************************");




/*17)  Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
       diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
       Smallest number is -50, biggest is 32.*/

       function diffMaxMin(Arr) {
              let Val_min=Math.min.apply(null,Arr);
              let Val_max=Math.max.apply(null,Arr);
              return Val_max-Val_min          
       }

       //Test de la Funcion
       console.log("Ejercicio 17: ");
       console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));
       console.log("************************************************************");




/*18)  Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
       filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]  */

       function filterList(Arr) {
              let Arreglo=[];
              Arr.forEach(elem=>{if((typeof elem)=="number"){Arreglo.push(elem)}})
              return Arreglo
       }

       //Test de la Funcion
       console.log("Ejercicio 18: ");
       console.log(filterList([1, 2, 3, "x", "y", 10]));
       console.log("************************************************************");




/*19)  Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que 
       necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. 
       Devuelve el resultado en una matriz.
       repeat(13, 5) ➞ [13, 13, 13, 13, 13] */
       function repeat(val,num) {
              let Arreglo=[];
              for (let i = 0; i < num; i++) {
                     Arreglo.push(val)
                     
              }
              return Arreglo
       }

        //Test de la Funcion
        console.log("Ejercicio 19: ");
        console.log(repeat(13, 5));
        console.log("************************************************************");




/*20)  Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una 
       cadena con una vocal especificada.
       "apples and bananas".vreplace("u") ➞ "upplus und bununus" */


/*21)  Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: 
       "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
       findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!" */


/*22)  Cree una función que capitalice la última letra de cada palabra.
       capLast("hello") ➞ "hellO" */

       /*console.log("************************************************************");
       let Arr_test=[13,2,5,7,8,9];
       let Arr_Str=Arr_test.toString();
       for (let arg of Arr_test) {
              console.log(arg)
              
       }
       console.log("************************************************************");
       console.log( Arr_Str)
       console.log("************************************************************");
       console.log(Arr_Str.length);

       for (let i = 1; i < Arr_Str.length ;i=i+2) {
              
              console.log(Arr_Str[i]);
       

       let xxtoArray=[{ a: 1, b: 2 }];
       let xxtoArray_Str=xxtoArray.toString();
       console.log(xxtoArray[0].b);
       console.log("************************************************************")
       for (let index = 0; index < xxtoArray_Str.length; index++) {
              console.log(xxtoArray_Str[index]);
              
       }}*/
      
      
      
      
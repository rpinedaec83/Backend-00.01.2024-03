const ejercicio1=(num1,num2)=>{
    num1=parseInt(prompt("escribe el numero 1"));
    num2=parseInt(prompt("escribe el numero 2"));
        resultado=num1 +num2;
    
        return alert(resultado);
    }
const ejercicio2=(num1,potencia)=>{
        num1=parseInt(prompt("escribe el numero 1"));
        potencia=parseInt(prompt("potencia de : "));
            resultado=num1**potencia
        
            return alert(resultado);
        }    
const ejercicio3=(num1,num2,num3)=>{
            num1=parseInt(prompt("escribe el numero 1"));
            num2=parseInt(prompt("escribe el numero 2"));
            num3=parseInt(prompt("escribe el numero 3"));
                resultado1=num1**3
                resultado2=num2**3
                resultado3=num3**3
            
                return alert(`${num1}+${num2}+${num3}= ${resultado1+resultado2+resultado3}`);
            }       
 const ejercicio4=(base,altura)=>{
                base=parseInt(prompt("base es :"));
                altura=parseInt(prompt("altura es : "));
                 
                let area=(base*altura)/2
                   
              return alert(`su area es : ${area}`);
               }             
 const ejercicio5=(num1,num2,caracter)=>{
    num1=parseInt(prompt("escribe el numero 1"));
        num2=parseInt(prompt("escribe el numero 2"));
        caracter=prompt("escribe un caracter +,-,/,x,%")
        
        if(caracter=="+"){
          resultado=num1+num2;
        }else if(caracter=="-"){
            resultado=num1-num2;
        }else if(caracter=="/"){
            resultado=num1/num2;
        }else if(caracter=="x"){
            resultado=num1*num2;
        }else if(caracter=="%"){
            resultado=num1%num2;
        }else{
            resultado="caracter no definido"
        }
            return alert(resultado);
      }
      const pregunta1=(nombre,apellido,edad)=>{
        nombre=prompt("escribe el Nombre :");
        apellido=prompt("escribe el Apellido :");
        edad=parseInt(prompt("Edad :"));
    
        
            return alert(`Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`);
        }

    const pregunta2=(num1,num2,num3)=>{
            num1=parseInt(prompt("escribe el numero 1"));
            num2=parseInt(prompt("escribe el numero 2"));
            num3=parseInt(prompt("escribe el numero 3"));
                resultado1=num1**3
                resultado2=num2**3
                resultado3=num3**3
            
                return alert(`${num1}+${num2}+${num3}= ${resultado1+resultado2+resultado3}`);
            }



   const pregunta3=()=>{
    const valor=prompt("Escribe el valor: ")

    alert(typeof eval(valor));
   }




   const pregunta4 = () => {
   const pregunta4B1 = (...numeros) => {
    let suma = numeros.reduce((total, num) => total + num, 0);
    alert(suma);
    }
pregunta4B1(1,3,2)
   }


const pregunta5 = () => {
const filtrar = (valores) => {
    return alert(valores.filter(valor => typeof valor === 'string'))
};

const valores = [1, 'Hola', true, 'Mundo', 5, 'Hacka'];
const cadenasFiltradas = filtrar(valores);
console.log(cadenasFiltradas); 
}

const pregunta6 = () => {
let num1=prompt("dame el arreglo separado en , ")
let arreglo=num1.split(",").map(Number);

max=Math.max(...arreglo)
min=Math.min(...arreglo)

return alert(`el numero minimo es : ${min} y el maximo es : ${max}`);

}
const pregunta7 = () => {
const pregunta7B1 = (a,b,c,d,e,f,g,h,i) => {

    return alert(`(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}  `);
    
    }
    pregunta7B1(1,2,3,4,5,6,7,8,9,0)
}

const pregunta8=()=>{
const pregunta8B1=(arr1,arr2,arr3)=>{
    return alert([Math.max(...arr1),Math.max(...arr2),Math.max(...arr3)])
}
pregunta8B1([4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0])
}

const pregunta9=()=>{
const pregunta9B1=(primer,ultimo)=>{

let primero=primer.indexOf(ultimo)
let segundo=primer.lastIndexOf(ultimo)
    return alert([primero, segundo])
}
pregunta9B1("hello",  "l")
}


const pregunta10 = () => {
    function pregunta10B1(objeto) {
        let resultado = Object.entries(objeto);
       return alert ("["+resultado[0]+"],"+"["+resultado[1]+"]");
    }
    
    pregunta10B1({ "a": 1, "b": 2 });
}

const pregunta11 = () => {
    const getBudgets=(objeto)=>{
        let suma=0;

        for(nombre of objeto){
            suma+=nombre.budget
        }
     return alert(parseInt(suma))
    }
    
    getBudgets([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve",  age: 32, budget: 40000 },
        { name: "Martin",  age: 16, budget: 2700 }
      ])
      
}

const pregunta12 = () => {
    const getStudentNames=(objeto)=>{
        let nombres=[];

        for(nombre of objeto){
            nombres.push(nombre.name)
        }
     return alert(nombres)
    }
    
    getStudentNames([
        { name: "Steve" },
        { name: "Mike" },
        { name: "John" }
      ])
      
      
}

const pregunta13 = () => {
    const objectToArray=(objeto)=>{
     return alert(Object.entries(objeto))
    }
    
    objectToArray({
        likes: 2,
        dislikes: 3,
        followers: 10
      })
}
const pregunta14=()=>{
const pregunta14B1=(n)=>{
let suma=0;
let repre=[];
for(i=1;i<=n;i++){
suma+=i**2
repre.push(i**2)
}
represen=repre.join("+")
return alert(represen+"="+suma)

}
pregunta14B1(3)
}


const pregunta15=()=>{
    const pregunta15B1=(array)=>{
    
    
    return alert(array.map(valor=>valor*array.length))
    
    }
    pregunta15B1([2,3,0,1])
    }


    const pregunta16=()=>{
        const pregunta16B1=(n)=>{
            let array=[]
        for(i=n;i>=0;i--){
        array.push(i);
         }
        ele=array.join(",")
        return alert(ele)
        
        }
        pregunta16B1(5)
        }

        const pregunta17=()=>{
            const pregunta17B1=(arrays)=>{
            let max=Math.max(...arrays)
            let min=Math.min(...arrays)
            return alert(max-min)
            
            }
            pregunta17B1([10, 4, 1, 4, -10, -50, 32, 21])
            }

         const pregunta18=()=>{
                const filterList=(arrays)=>{
                numeros=arrays.filter(valor=>typeof valor==='number')
                return alert(numeros)
                
                }
                filterList([1, 2, 3, "x", "y", 10])
                }
        
                const pregunta19=()=>{
                    const repetir=(num,cant)=>{
                    let array=[]
                    for(i=0;i<=cant;i++){
                        array.push(num)
                    }
                    return alert(array)
                    }
                    repetir("13",5)
                    }

               const pregunta20=()=>{
               const vreplace=(cadena, vocal)=>{
                 return alert(cadena.replace(/[aeiou]/gi, vocal))
                 }
                 vreplace("apples and bananas", "u")
              }

              const pregunta21=()=>{
                const findNemo=(cadena,busca)=>{
                    array=cadena.split(" ");
                    encontrar=array.indexOf(busca)
                  return alert("Encontre a Nemo a las "+(encontrar+1))
                  }
                  findNemo("I am finding Nemo !","Nemo")
               }

               const pregunta22=()=>{
                const findNemo=(cadena)=>{
                
                  dividir=cadena.split(" ")
                   for(i=0;i<dividir.length;i++){
                    div=dividir[i]
                    div=(div.slice(0,-1) )+div.slice(-1).toUpperCase()
                    dividir[i]=div
                   }
                  
                  return alert(dividir)
                  }
                  findNemo("nemo")
               }

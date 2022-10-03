class calculadora{
divisores(){  
        let num=result.value
    if (num != "") {
        let result=document.getElementById("result")
        let i =1
        let num = parseInt(result.value)
        result.value=`Los divisores del número ${num.toString()} son:` 
        if (isNaN(num) == false){
            if(num>0){
                while(i<num){
                    if (num%i==0){
                        result.value+=`${i.toString()},\n` 
                    }
                    i++
                }
            }else{
                result.value=`Los números negativos no se pueden calcular`
            } 
        }else{
            result.value=`No se puede calcular, se ingresaron valores incorrectos`
        }
    } else {
        result.value="No se puede calcular, ningun valor se ha ingresado."          
    }
}
invertir(){
    let num=result.value
    if (num !="") {
        let result=document.getElementById("result")
        let num = parseInt(result.value)
        let digito,invertido=""
        if (isNaN(num) == false){
            if(num>0){
                while(num>0){
                    digito=num%10
                    num=Math.floor(num/10)
                    invertido=invertido+digito.toString()
                }
                result.value=`El numero invertido es: ${invertido.toString()}`                 
            } else {
                result.value=`Los números negativos no se pueden calcular`
            }
        } else {
            result.value=`No se puede calcular, se ingresaron valores incorrectos`
        }
    }else{
        result.value="No se puede calcular, ningun valor se ha ingresado."          
    }
}
primo(){
        let num=result.value
        if (num !="") {
            let result = document.getElementById("result")
            let i =1,cont=0
            let num = parseInt(result.value)
            if (isNaN(num) == false){
                if(num>0){
                    if (num >= 0 ){
                        while(i <= num && cont <= 2 ){
                         if (num % i == 0 ){
                            cont = cont + 1  
                         }
                         i++
                        }
                        if (cont == 2 ){
                         result.value=`El numero ${num.toString()} es un número primo`;
                        }else{
                         result.value=`El numero ${num.toString()} no es un  número primo`;
                        }
                    } 
                } else {
                    result.value=`Los números negativos no se pueden calcular`
                }
            } else {
                result.value=`No se puede calcular, se ingresaron valores incorrectos`
            }  
        } else {
            result.value="No se puede calcular, ningun valor se ha ingresado."          
        }
        
}
perfecto(){
    let num=result.value
    if (num !="") {  
        let result = document.getElementById("result")
        let num = parseInt(result.value)
        let i=1, acum=0
        if (isNaN(num) == false){
            if(num>0){
                while (i<num){
                    if (num%i==0){
                        acum=acum+i
                    }
                    i++
                }
                if (acum==num){
                    result.value=`El numero ${num.toString()} es Perfecto`             
                }else{
                    result.value=`El numero ${num.toString()} no es Perfecto`             
                }                               
            } else {
                result.value=`Los números negativos no se pueden calcular`
            }  
        } else {
            result.value=`No se puede calcular, se ingresaron valores incorrectos`
        }

    } else {
        result.value="No se puede calcular, ningun valor se ha ingresado."          
    } 
}
fibonacci(){
    let num=result.value
    if (num !="") {  
        let result = document.getElementById("result")
        let num = parseInt(result.value)
        let a=1,b=0,i=1,res=0
        result.value=`La serie fibonacci de los primeros ${num} numeros es: 0,\n`
        if (isNaN(num) == false){
            if(num>0){
                while (i<num) {
                    res=a+b;
                    a=b;
                    b=res; 
                    i++
                    result.value+=`${res},\n`
                }             
            } else {
                result.value=`Los números negativos no se pueden calcular`
            }  
        } else {
            result.value=`No se puede calcular, se ingresaron valores incorrectos`
        }

    } else {
        result.value="No se puede calcular, ningun valor se ha ingresado."          
    }
}




base10_2(){
    let num=result.value
if (num !="") {  
    let result = document.getElementById("result")
    let num = parseInt(result.value)
    if (isNaN(num) == false){
        if(num>0){
            let result=document.getElementById("result")
            let num = result.value
            let arreglo=[],cont=0
            result.value=`El número en base 10 [${num}] a base 2 es `
                while(num>0){
                    arreglo[cont]=num%2
                    cont=cont+1
                    num=Math.trunc(num/2)
                }
                for(let i=cont-1; i>=0; i--){
                    let resp= arreglo[i]
                    result.value+=resp
                }                 
        } else {
            result.value=`Los números negativos no se pueden calcular`
        }  
    } else {
        result.value=`No se puede calcular, se ingresaron valores incorrectos`
    }

} else {
        result.value="No se puede calcular, ningun valor se ha ingresado valor"          
}
   

                

}
base10_16(){
    let num=result.value
if (num !="") {  
    let result = document.getElementById("result")
    let num = parseInt(result.value)
    if (isNaN(num) == false){
        if(num>0){
            let result = document.getElementById("result")
        let muestra=result.value
        let num = parseInt(result.value)
        let numeros=[],pos=0,base16="",aux=0
    while (num >= 16){
        numeros[pos] = num % 16
        num = Math.floor(num / 16)
        pos= pos + 1 
    }
    numeros[pos]=num
    for (aux= numeros.length - 1; aux >= 0; aux-- ){
        switch(numeros[aux]){
            case 10:
                base16 = base16 + "A"
                break
            case 11:
                base16 = base16 + "B"
                break
            case 12:
                base16 = base16 + "C"
                break
            case 13:
                base16 = base16 + "D"
                break
            case 14:
                base16 = base16 + "E"
                break
            case 15:
                base16 = base16 + "F"
                break
        default:
            base16 = base16 + numeros[aux]
        }
    }
    result.value=`El número en base 10 [${muestra}] a base 16 es [${base16.toString()}]`
                          
        } else {
            result.value=`Los números negativos no se pueden calcular`
        }  
    } else {
        result.value=`No se puede calcular, se ingresaron valores incorrectos`
    }

} else {
        result.value="No se puede calcular, ningun valor se ha ingresado valor"          
}
    

    

    
}
base10_8(){
    let num=result.value
if (num !="") {  
    let result = document.getElementById("result")
    let num = parseInt(result.value)
    if (isNaN(num) == false){
        if(num>0){
            let num = document.getElementById("result").value;
            let numero = num
            let resp=[]
            let con=0
            num = parseInt(num);
            while(num > 0) {
                resp[con] = num % 8
                num = Math.trunc(num/8)
                con = con + 1
            }
            result.value = `El número en base 10 [${numero}] en base 8 es [`
            for(let i=con-1; i>=0; i--)result.value += resp[i];
            result.value+="]"
        } else {
            result.value=`Los números negativos no se pueden calcular`
        }  
    } else {
        result.value=`No se puede calcular, se ingresaron valores incorrectos`
    }

} else {
        result.value="No se puede calcular, ningun valor se ha ingresado valor"          
}
       

            

}
base2_10(){
    let num=result.value
    if (num !="") {  
        let result = document.getElementById("result")
        let num = parseInt(result.value)
        let decimal=0,i=0,resto;
        let m=num
        if (isNaN(num) == false){
            if(num>0){
                    while (num != 0) {
                        resto = num % 10;
                        num = Number.parseInt(num/10);
                        decimal = decimal + resto * Math.pow(2, i);
                        ++i;
                      }
                      result.value=`El número de base 2 [${m}] a base 10 es [${decimal}]`                                                  
            } else {
                result.value=`Los números negativos no se pueden calcular`
            }  
        } else {
            result.value=`No se puede calcular, se ingresaron valores incorrectos`
        }
    
    } else {
        result.value="No se puede calcular, ningun valor se ha ingresado."          
    }    
}
base2_16(){
    let num=result.value
if (num !="") {
    let call=[],i,contandor=0,pollo=[],cantidad=0,valor=0,soporte=" ",mai;
    let num=document.getElementById("result").value
    for(let i=0; i<num.length;i++){
       call[i]=num.charAt(i)
    }
    for(let i=0; i<call.length;i++){
        if(call[i]==1){
            contandor=contandor+Math.pow(2, call.length-i-1)
        }
    }
    while(contandor>0){
        cantidad=contandor%16;
        contandor=Math.floor(contandor/16);
        switch(cantidad>9 || cantidad<16){
            case cantidad==10:
                cantidad= "A";
                break;
            case cantidad==11:
                cantidad= "B";
                break;
            case cantidad==12:
                cantidad= "C";
                break;
            case cantidad==13:
                cantidad= "D";
                break;
            case cantidad==14:
                cantidad= "E";
                break;
            case cantidad==15:
                cantidad= "F"
                break;
        }
        pollo.unshift(cantidad)
    }
    if(cantidad){
        result.value=`El número en base 2 [${num}] La base 16 es [` +pollo.join("")
        result.value+=`]`
    }else{
        if(num>1){
            result.value="Debe ingresar un numero en binario"
        }else{
            result.value=`No se puede calcular, se ingresaron valores incorrectos`
        }
    }  

} else {
    result.value="No se puede calcular, ningun valor se ha ingresado valor"          
}

    
}




contar_palabras(){
    let num=result.value
    if (num !="") {  
        let gu=[]
        let cont=0, cont2=0
        let result = document.getElementById("result")
        let num = result.value
        if (isNaN(num) !== false){
            let num2=num.length
            num2=num2-1
            for(let i=num2; i>=0; i--){
                gu[i]=num.substring(i,i+1)
            }
            while(cont<num2){
                if(gu[cont]==" "){
                    if(gu[cont+1]!=" "){if(isNaN(gu[cont+1])==true){
                        cont2=cont2+1
                    } }
                }  cont=cont+1
            }
            if(gu[0]!=" "){
                if(isNaN(gu[0])==true){
                cont2=cont2+1
                }
            }
            if(cont2!==0){
                result.value=`La cadena [${num}] tiene ${cont2.toString()} palabras`
            }

        } else {
            result.value=`No se puede calcular, se ingresaron valores incorrectos`
        }
    
    } else {
            result.value="No se puede calcular, ningun valor se ha ingresado valor"          
    }
}
palindromo(){
    let num=result.value
if (num !="") {  
    let result = document.getElementById("result")
    let num = parseInt(result.value)
    if (isNaN(num) !== false){
        let arreglo=[], cont=0, espacios=0
        let result=document.getElementById("result")
        let num = result.value
        let long=0, pos=0, cot=0
        let longitud=num.length
            for(let i=0; i<longitud; i++){
                if (num.substring(i,i+1) !=" "){
                    arreglo[long]=num.substring(i,i+1)
                    pos=pos+1
                    long=long+1
                }  
            }
            long=long-1
            for(let i=0; i<=pos; i++){
                if(arreglo[i]!=arreglo[long])cont=cont+1;
                long=long-1                 
            }
            if(cont!==0){
                result.value=`La palabra que ingreso no es palíndromo.`  
            } else{
                result.value=`La palabra que ingreso si es palíndromo.` 
            }  
    } else {
        result.value=`No se puede calcular, se ingresaron valores incorrectos`
    }

} else {
        result.value="No se puede calcular, ningun valor se ha ingresado valor"          
}
       

}
invertir_frase(){ 
    let num=result.value
if (num !="") {  
    let arreglo = document.getElementById("result").value
    if (isNaN(num) !== false){
        result.value=`La frase invertida es: `
        for(let i=(arreglo.length-1); i>=0; i--){
            result.value+=`${arreglo[i]}\n`
        }
    } else {
        result.value=`No se puede calcular, se ingresaron valores incorrectos`
    }
} else {
        result.value="No se puede calcular, ningun valor se ha ingresado valor"          
}
}
contar_caracteres(){
    let num=result.value
if (num !="") {
    let result = document.getElementById("result")
    let arreglo =result.value
    let vocales=0, caracteres=0, consonantes=0, numeros=0
    for(let i=0; i<arreglo.length; i++)
    switch (arreglo[i]) {
        case "a":
        case "A":
        case "e":
        case "E":
        case "i":
        case "I":
        case "o":
        case "O":
        case "u":
        case "U":
            vocales++
            break;
        case "(":
        case ")":
        case "[":
        case "]":
        case "{":
        case "}":
        case ",":
        case ".":
        case ";":
        case ":":
        case "/":
        case "*":
        case "-":
        case "+":
        case "=":
        case "-":
        case "_":
        case "<":
        case ">":
        case "¡":
        case "!":
        case "$":
        case "%":
        case "&":
        case "#":
            caracteres++
            break;
        default:
            if(isNaN(arreglo[i])==false && arreglo[i] !==" "){
                numeros++
            }else{
                if(isNaN(arreglo[i])==true && arreglo[i] !==" "){
                    consonantes++
                }else{
                    if (arreglo[i] !==" ") {
                        caracteres++
                    }
                }
            }
    }
    result.value=`El número total de vocales es: [${vocales.toString()}], consonantes: [${consonantes.toString()}], numeros: [${numeros.toString()}], caracteres: [${caracteres.toString()}]`
} else {
        result.value="No se puede calcular, ningun valor se ha ingresado valor"          
}

}
buscar_cadena(){
    let num=result.value
    if (num !="") {  
        let result = document.getElementById("result")
        let num = parseInt(result.value)
        if (isNaN(num) !== false){
            let result = document.getElementById("result")
        let cadena = result.value
        let enco_cadena = prompt("ingrese cadena a buscar")
        let bandera=false, ini=0, pos1 = 0, pos2 = 0 , new_cadena="",ini_posicion = 0 
        while(ini < cadena.length && bandera == false){
            if( cadena[ini] == enco_cadena[0]){
                pos1 = ini 
                ini_posicion= pos1
                pos2 = 0
                while(pos2 < enco_cadena.length){
                    if(cadena[pos1] == enco_cadena[pos2]){
                       new_cadena = new_cadena + cadena[pos1]
                    }
                    pos2++
                    pos1++ 
                }
                if(new_cadena == enco_cadena){
                    bandera= true 
                }
            }
            ini++
        }
        if(bandera == true){
            pos1 = pos1 - 1
            result.value=`La cadena [${enco_cadena.toString()}] fue encontrada: `
            result.value+=`inicia en la posición ${ini_posicion.toString()} y finaliza en ${pos1.toString()}`
        }else{
            result.value=`La cadena no ha sido encontrada `
        }
        } else {
            result.value=`No se puede calcular, se ingresaron valores incorrectos`
        }
    
    } else {
            result.value="No se puede calcular, ningun valor se ha ingresado valor"          
    }
}




mayor(){
    let num=result.value
if (num !="") {  
    let result = document.getElementById("result")
    let num =result.value
    let arreglo = num.split(";")
    let mayor = 0,pos=0 
    if (isNaN(parseInt(arreglo)) == false){
            for (let i=0; i < arreglo.length;i++){
                if(i==0){
                    mayor=arreglo[0]
                }
                if (parseInt(arreglo[i]) > mayor){
                    mayor = parseInt(arreglo[i])
                    pos = i
                    result.value=`El mayor del arreglo [${arreglo}]\n`
                }
            }
            result.value+=` es ${mayor.toString()} y esta en la posicion [${pos.toString()}]`              
    } else {
        result.value=`No se puede calcular, se ingresaron valores incorrectos`
    }

} else {
        result.value="No se puede calcular, ningun valor se ha ingresado valor"          
}

}
promedio(){
    let num=result.value
if (num !="") {  
    let result = document.getElementById("result")
    let num = parseInt(result.value)
    if (isNaN(num) == false){
        let result = document.getElementById("result")
        let num = result.value
        let arreglo = num.split(";")
        let longitud=arreglo.length
        let cont=0, ignorar=0
        for(let i=0; i<longitud; i++){
            if(!isNaN(arreglo[i])) {
                cont = cont + (parseFloat(arreglo[i]))
            } else {
                ignorar = ignorar + 1;
            }
        }
        if(cont > 0) {
            longitud = longitud - ignorar;
            cont = (cont/longitud)
            result.value=`El promedio del arreglo [${num}] es de: ${cont.toString()}`
        }        
    } else {
        result.value=`No se puede calcular, se ingresaron valores incorrectos`
    }

} else {
        result.value="No se puede calcular, ningun valor se ha ingresado valor"          
}
}
buscar_arreglo(){
    let num=result.value
    if (num !="") {  
        let result = document.getElementById("result")
        let num = result.value
        let arreglo = num.split(";")
        let c=1
        if (isNaN(parseInt(arreglo)) == false){
            let num2= prompt("Ingresar número a buscar en el arreglo")
            for(let i=0; i<arreglo.length; i++){
                if (arreglo[i]==num2){
                    result.value = `En la arreglo [${arreglo}] se ha encontrado el valor ${num2} en la posicion ${i}`
                    c=2
                }
            }
            if (c==1){
                result.value = `El valor que inserto no se encuentra en el arreglo`
            }
        } else {
            result.value=`No se puede calcular, se ingresaron valores incorrectos`
        }
    } else {
            result.value=`No se puede calcular, ningun valor se ha ingresado valor`          
    }
}
eliminar(){
    let num=result.value
if (num !="") {  
    let result = document.getElementById("result")
    let num = parseInt(result.value)
    if (isNaN(num) == false){
        let result = document.getElementById("result")
    let arreglo = result.value
    arreglo=arreglo.split(";")
    let eliminar=parseInt(prompt("Ingrese el valor a eliminar"))
    let i=0, nuevo_arreglo=[], bandera=false, nuevo_cont=0
    let longitud=arreglo.length
    while (i<longitud && bandera==false){
        if(arreglo[i]==eliminar){
            bandera=true
        }i++
    }
    if (bandera==true) {
        for(i=0; i<longitud; i++){
            if (arreglo[i]==eliminar){
                arreglo[i]=" "
            } else {
                nuevo_cont++
            }
        }
        i=0
        let cont=0
        while (i<=nuevo_cont){
            if (arreglo[cont] !== " "){
                nuevo_arreglo[i]=arreglo[cont]
                i++
            }
            cont++
        }
        result.value=`El valor se ha eliminado del arreglo [${nuevo_arreglo.toString()}]`
    }else{
        result.value=`El valor a eliminar no se encuentra en el arreglo`
    }

    } else {
        result.value=`No se puede calcular, se ingresaron valores incorrectos`
    }

} else {
        result.value="No se puede calcular, ningun valor se ha ingresado valor"          
}
    
}
insertar(){
    let num=result.value
if (num !="") {  
    let result = document.getElementById("result")
    let num = parseInt(result.value)
    if (isNaN(num) == false){
        let result = document.getElementById("result")
    let arreglo = result.value
    arreglo = arreglo.split(";")
    let insertar= prompt("Ingrese el valor a insertar")
    let posicion=parseInt(prompt("Ingrese la posicion a insertar el valor"))
    let longitud=arreglo.length
    let inicio=0 
    let nuevo_arreglo=[]
    if (isNaN(insertar)==false){
        insertar=parseInt(insertar)
    }
    if (posicion>longitud){
        longitud=posicion
    }
    longitud=longitud
    let bandera=false
    let cont=0
    while(inicio<=longitud && bandera==false){
        if (inicio==posicion){
            nuevo_arreglo[inicio]=insertar
            bandera=true
        }else{
            nuevo_arreglo[inicio]=arreglo[inicio]
        }
        cont++
        inicio++
    }
    cont=cont-1
    if (bandera==true){
        while(cont<=longitud){
            nuevo_arreglo[cont+1]=arreglo[cont]
            cont++
        }   
    }else{
        while(cont<=longitud){
            nuevo_arreglo[cont]=arreglo[cont]
            cont++
        }
    }
    result.value=`El valor se ingreso en el arreglo [${nuevo_arreglo.toString()}]`
    } else {
        result.value=`No se puede calcular, se ingresaron valores incorrectos`
    }

} else {
        result.value="No se puede calcular, ningun valor se ha ingresado valor"          
}
    
}
}
let cal = new calculadora()
/*
let num=result.value
if (num !="") {  
    let result = document.getElementById("result")
    let num = parseInt(result.value)
    if (isNaN(num) == false){
        if(num>0){
                          
        } else {
            result.value=`Los números negativos no se pueden calcular`
        }  
    } else {
        result.value=`No se puede calcular, se ingresaron valores incorrectos`
    }

} else {
        result.value="No se puede calcular, ningun valor se ha ingresado valor"          
}
*/
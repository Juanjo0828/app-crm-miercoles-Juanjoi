import{ expresionesRegulaeres }from "./services/utils.js"

let camposForm = document.querySelectorAll(".formulario__entrada")
camposForm.forEach((campo) => {
    campo.addEventListener("keyup", function(e) {
    switch(e.target.id){
        case  "nombre" :
            console.log("imput nombre")
            if(expresionesRegulaeres.regexTexto.test(e.target.value)){
                console.log("cumple la expresion regular")
                document.getElementById("nombre").style.outline = "none"
                document.getElementById("nombre").style.borderColor = "green"
                document.getElementById("nombre").style.borderwidht = "2px"
                document.getElementById("nombre").style.color = "black"
             } else {
            console.log("no cumple la expresion regular") 
                document.getElementById("nombre").style.outline = "none"
                document.getElementById("nombre").style.borderColor = "red"
                document.getElementById("nombre").style.borderwidht = "2px"
                document.getElementById("nombre").style.color = "red"
            }
            break;
                  case  "apellido" :
            console.log("imput apellido")
            if(expresionesRegulaeres.regexTexto.test(e.target.value)){
                console.log("cumple la expresion regular")
                document.getElementById("apellido").style.outline = "none"
                document.getElementById("apellido").style.borderColor = "green"
                document.getElementById("apellido").style.borderwidht = "2px"
                document.getElementById("apellido").style.color = "black"
             } else {
            console.log("no cumple la expresion regular") 
                document.getElementById("apellido").style.outline = "none"
                document.getElementById("apellido").style.borderColor = "red"
                document.getElementById("apellido").style.borderwidht = "2px"
                document.getElementById("apellido").style.color = "red"
            }
            break;
                  case  "documento" :
            console.log("imput documento")
            if(expresionesRegulaeres.regexNumeros.test(e.target.value)){
                console.log("cumple la expresion regular")
                document.getElementById("documento").style.outline = "none"
                document.getElementById("documento").style.borderColor = "green"
                document.getElementById("documento").style.borderwidht = "2px"
                document.getElementById("documento").style.color = "black"
             } else {
            console.log("no cumple la expresion regular") 
                document.getElementById("documento").style.outline = "none"
                document.getElementById("documento").style.borderColor = "red"
                document.getElementById("documento").style.borderwidht = "2px"
                document.getElementById("documento").style.color = "red"
            }
            break;
                              case  "telefono" :
            console.log("imput telefono")
            if(expresionesRegulaeres.regexNumeros.test(e.target.value)){
                console.log("cumple la expresion regular")
                document.getElementById("telefono").style.outline = "none"
                document.getElementById("telefono").style.borderColor = "green"
                document.getElementById("telefono").style.borderwidht = "2px"
                document.getElementById("telefono").style.color = "black"
             } else {
            console.log("no cumple la expresion regular") 
                document.getElementById("telefono").style.outline = "none"
                document.getElementById("telefono").style.borderColor = "red"
                document.getElementById("telefono").style.borderwidht = "2px"
                document.getElementById("telefono").style.color = "red"
            }
            break;

   }
  })
})

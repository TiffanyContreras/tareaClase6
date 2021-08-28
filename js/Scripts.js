

const Persona1= {Nombre:'juan',nota: 10};
const Persona2= {Nombre:'maria',nota: 30};
const Persona3= {Nombre:'carlos',nota: 20};
const Persona4= {Nombre:'karla',nota: 40};

const Persona5= {Nombre:'Lili',nota: 30};
const Persona6= {Nombre:'Cleo',nota: 40};
const Persona7= {Nombre:'Pedro',nota: 33};
const Persona8= {Nombre:'Marco',nota: 21};


    function userTemplate(Persona) {
        var color ="";
        if(parseInt(Persona.nota) <= 10){ color = "red";}
        else if(parseInt(Persona.nota) >= 21){ color = "blue";}
        else {color ="green"}  
        return `        
            <p> ${Persona.Nombre} &nbsp;&nbsp;&nbsp;<FONT COLOR="${color}">${Persona.nota} </FONT><br></p>
        `;
      }
      
    document.write(`<h3>Desarrollo web </h3>`);
    document.write(userTemplate( Persona1));
    document.write(userTemplate( Persona2));
    document.write(userTemplate( Persona3));
    document.write(userTemplate( Persona4));
    document.write(`<h3>Programacion 2 </h3>`);
    document.write(userTemplate( Persona5));
    document.write(userTemplate( Persona6));
    document.write(userTemplate( Persona7));
    document.write(userTemplate( Persona8));


    function crear()
{
    var numero=document.getElementById("numero").value;
    tabla="<table border>";
    tabla+="<tr>";
    tabla+=`<td> <FONT  COLOR="blue"> Multiplicacion </FONT> </td>`;
    tabla+=`<td> <FONT  COLOR="blue"> Total </FONT> </td>`;
    tabla+=`<td> <FONT  COLOR="blue"> division </FONT> </td>`;
    tabla+=`<td> <FONT  COLOR="blue"> Total </FONT> </td>`;
    tabla+=`<td> <FONT  COLOR="blue"> suma </FONT> </td>`;
    tabla+=`<td> <FONT  COLOR="blue"> Total </FONT> </td>`;
    tabla+=`<td> <FONT  COLOR="blue"> resta </FONT> </td>`;
    tabla+=`<td> <FONT  COLOR="blue"> Total </FONT> </td>`;
    tabla+="</tr>";
    for (var i = 1; i <= 10; i++){
        tabla+="<tr>";
        tabla+="<td>"+numero+" * "+i+"</td>";
        tabla+=`<td> <FONT  COLOR="red">`+(numero*i)+" </FONT> </td>";
        tabla+="<td>"+(numero*i)+" / "+numero+"</td>";
        tabla+=`<td> <FONT  COLOR="red">`+(parseInt(numero*i)/numero)+" </FONT> </td>";
        tabla+="<td>"+numero+" + "+i+"</td>";
        tabla+=`<td> <FONT  COLOR="red">`+(parseInt(numero)+parseInt(i))+" </FONT> </td>";
        tabla+="<td>"+numero+" - "+i+"</td>";
        tabla+=`<td> <FONT  COLOR="red">`+(numero-i)+" </FONT> </td>";
        tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("resultado").innerHTML=tabla;
}
function borrar(){
    document.getElementById("resultado").innerHTML="";
}
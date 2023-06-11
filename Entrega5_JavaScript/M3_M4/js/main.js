const tabladato = [
    ["Enero", 1500, 1500],
    ["Febrero", 2500, 2500],
    ["Marzo", 84683, 1155],
    ["Abril", 135353, 1533],
    ["Mayo", 1535, 5434],
    ["Junio", 4343354, 5434543],
    ["Julio", 435453, 4543],
    ["Agosto", 78351, 7816],
    ["Septiembre", 1878, 95634],
    ["Octubre", 48483, 9433],
    ["Noviembre", 35483, 53133],
    ["Diciembre", 3843, 348133]
];
/*M4 EJ1*/
function retorno(flujocaja){
    if(flujocaja == null){
       return console.log(0)
    }else if(flujocaja == false ){
       return console.log(-1)
    }else if(flujocaja == true){
       return  console.log(1)
    }
  }
/*M3 EJ1*/
  function flujocaja(){
    var positivo = null;
    for(var i = 0; i<tabladato.length; i++){
        
        if(tabladato[i][1] == tabladato[i][2]){
            console.log("En el mes de " + tabladato[i][0] + " no se genero ni ingresos ni egresos");
            positivo = null;
        } if (tabladato[i][1] < tabladato[i][2]){
            console.log("En el mes de " + tabladato[i][0] + " se generaron mas egresos que ingresos");
            positivo = false
        } if(tabladato[i][1] > tabladato[i][2]){
            console.log("En el mes de " + tabladato[i][0] + " se generaron mas ingresos que egresos");
            positivo = true;
        }
        
        retorno(positivo)
    }
    
    
  }
  flujocaja()
  console.log("-----------------------------------------------------------")
  
  


  /*M4 EJ2*/
  var interes = []

  var ofertasCreditos = [["Plan 001", 150000, 30, 15], ["Plan 002", 300000, 180, 10], ["Plan 003", 485000, 60, 23]];

  function obinteres(){
    for(var e = 0; e < ofertasCreditos.length; e++){
        interes[e] = ofertasCreditos[e][1] * ofertasCreditos[e][2] * ofertasCreditos[e][3] / 100;
        console.log("En el " + ofertasCreditos[e][0] + " hay un interés de: " + interes[e]) 
    }
    return console.log(interes)
  }
obinteres()

console.log("-----------------------------------------------------------")
/*m4 ej2*/
function m4ej2(interes){
    for(var o = 0; o < interes.length; o++){
        ofertasCreditos[o].push(interes[o])
        
    }
    console.log(ofertasCreditos)
    
}
m4ej2(interes)
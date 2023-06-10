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


  function flujocaja(){
    
    for(var i = 0; i<tabladato.length; i++){

        if(tabladato[i][1] == tabladato[i][2]){
            console.log("En el mes de " + tabladato[i][0] + " no se genero ni ingresos ni egresos");
        } if (tabladato[i][1] < tabladato[i][2]){
            console.log("En el mes de " + tabladato[i][0] + " se generaron mas egresos que ingresos");
        } if(tabladato[i][1] > tabladato[i][2]){
            console.log("En el mes de " + tabladato[i][0] + " se generaron mas ingresos que egresos");
        }
    }

  }
  flujocaja()




var form = document.getElementById('formulario');

form.addEventListener('submit', function(e){

    var frm = e.target;

    /*Si los inputs que frm recibe son required entonces:*/ 
    if(frm.checkValidity()){

        var data = {}

        for(var i = 0; i<frm.length; i++){
            var field = frm[i]
            if(field.getAttribute("submitable") == "true"){
                data[field.id] = field.value;
                console.log(data);
            }

            
        }
        
        var resta = data['PV'] - data['CV'];
        var cv = data['CF'] 
        alert(resta /= cv)
        
    }
    





})
var form2 = document.getElementById('calculadora');
form2.addEventListener('submit', function(e){
    e.stopPropagation;
    var calc = e.target;

    if(form2.checkValidity()){
        var data2 = {}
        
        for(var i = 0; i<form2.length; i++){
            var field2 = form2[i];
            if(field2.getAttribute("submitable") == "true"){
                data2 = field2.value;

            }
        }
        var presupuesto50 = data2 * 0.5;
        var presupuesto30 = data2 * 0.3;
        var presupuesto20 = data2 * 0.2;
        alert("El 50% de tu presupuesto para gastos necesarios es: " + presupuesto50)
        alert("El 30% de tu presupuesto para gastos opcionales es: " + presupuesto30)
        alert("Y el 20% para ahorro e inversion es: " + presupuesto20)
    }



})
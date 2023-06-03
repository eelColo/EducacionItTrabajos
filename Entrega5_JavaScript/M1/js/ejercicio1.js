
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

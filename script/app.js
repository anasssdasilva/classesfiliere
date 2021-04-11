$(document).ready(function () {

$.ajax({
    url: 'http://localhost/gestionpointage50/controller/gestionclasses.php',
    data: {op:'hrap'},
    type: 'POST',
    success: function (data) {
                console.log(data);
                var filiere = [];
                var compte = [];
    
                for (var i in data){
                filiere.push( data[i].IdFiliere);
                
                compte.push(  data[i].compte) ;

             }
                  
                var chartdata = {
                 labels: filiere,
                 datasets : [
                     {
                         label: 'nombre de classes',
                         backgroundColor: "rgba(200,200,200,0.75)",
                         borderColor:   "rgba(200,200,200,0.75)",
                         hoverBackgroundColor: "rgba(200,200,200,1)",
                         hoverBorderColor: "rgba(200,200,200,1)",
                         data: compte
                     }
                     
                     
                
                 ]
                 
             };
                var ctx= $("#mycanvas");
                var barGraph = new Chart(ctx,{
                    type: "bar",
                    data: chartdata
                });
         },    
    error: function (data) {
            console.log(data);
                }


        });
        
});




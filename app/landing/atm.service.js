function doGet(){
	var atmPin = document.getElementById('atmPin').value;
	var passcode = document.getElementById('passcode').value;
     $.ajax({
        type: "GET",
        async: "false",
        dataType:'text',
        url: 'http://apirise16.azurewebsites.net/api/getPasscode?atmpin='+atmPin+'&passcode='+passcode,
        success: function(data) {
        	console.log('html' + data);
       	    var arr= JSON.parse(data);
            console.log('html1' + arr._id);
            
            if(arr._id){
            	$.ajax({
        	        type: "GET",
        	        async: "false",
        	        dataType:'text',
        	        url: 'http://apirise16.azurewebsites.net/api/deletePasscode?atmpin='+atmPin+'&passcode='+passcode,
        	        success: function(data) {
        	        	console.log(data);
        	        }
        	        });
        	   
        	   $('#successMessage').text(arr.amount+" amount withdrawn successfully!");
            }else{
            	$('#successMessage').text("unsuccessful");
            }
        }
    });
 }



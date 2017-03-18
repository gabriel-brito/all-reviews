$(document).ready(function(){
	var $cep = $("#cep");
	var $busca = $("#busca");
	var $resultadoBusca = $("#resultadoBusca");
	var url = "https://apiwv-v2.negocie.online/api/location/";  //https://apiwv-v2.negocie.online/api/location/
	var array = {"CEP":"09725526", "lat":null, "lng":null};
	var data = JSON.stringify(array);
	var myCep;

	function stopRefreshing (event) {
		$cep.keypress(function(e){
			if(e.which == 13){
				event.preventDefault();
			}
		});
	};


	//function postApi(){
			

		//$cep.keypress(function(e) {
		//	stopRefreshing();
		//	if(e.which == 13) {
		//		myCep = $cep.val();
		//	};		    
		//});
		


		        $.ajax({
				type: "POST",
				url: url,
				dataType: "JSON",
				contentType: "application/json",
				data: data,
				success: function (data){
						console.log(data);
					},
				error: function(){
						alert("AJAX Error");
					}
			


			});
			
	//};

});
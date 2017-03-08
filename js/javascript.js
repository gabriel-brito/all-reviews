$(document).ready(function(){
	var $cep = $("#cep");
	var $busca = $("#busca");
	var $resultadoBusca = $("#resultadoBusca");
	var url = "";//I will not show the url, because it is from a interview API


	function clearResult(){
		$resultadoBusca.empty();
	}


	$.ajax({
		type: "POST",
		url: url,
		dataType: "JSON",
		success: function(data){
			console.log(data);
			},
		error: function(){
			alert("Error");
		}


	});




});
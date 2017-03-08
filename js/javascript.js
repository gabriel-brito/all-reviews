$(document).ready(function(){
	function valor (argument){
		$("#buscaCep").on("click",function(cep){
			cep = $("#buscaCep").val();
		});
		return cep;
	};

	var valorCep = valor();


	var url = ''; //I will not show the API url, because it is from a interview test


	$("#buscaCep").on("click", function(cep){
		var order = {
			cep: $cep.val()
		}
	})


	$.ajax({
		type: "POST",
		url: url,
		dataType: "JSON",
		success: function(data){
			$("#buscaCep").on("click",function(){
				alert(valorCep);
			})			
		},
		error: function(){
			alert("Error");
		}


	});




});
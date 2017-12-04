var consulta = $("#searchTabla").DataTable();

$("#inputBusqueda").keyup(function(){
	consulta.search($(this).val()).draw();

	$(".resultados").css({
		"height": "100vh",
		"background": "rgba(0,0,0,0.5)"
	});

	if ($("#inputBusqueda").val() == ""){
		$(".resultados").css({
			"height": "auto",
			"background": "none"
		});

		$("#search").hide();

	} else {
		$("#search").fadeIn("fast");
	}
});

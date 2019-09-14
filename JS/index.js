$(document).ready(function(){
	var Projet = $("#Projet").html();
	var Prenom = $("#About").html();
	var Contact = $("#Contact").html();

	$(".Projet").on("click",function(){
		$(".col-md-9").html(Projet);
	});

	$(".About").on("click",function(){
		$(".col-md-9").html(Prenom);
	});

	$(".Contact").on("click",function(){
		$(".col-md-9").html(Contact);
	});

})
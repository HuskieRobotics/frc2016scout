$(document).ready(function(){
	$("#submit_button").click(function () {
		$.post("/save", $("#main_form").serialize()).done(function(data){
			alert(data)
		});
	});
});
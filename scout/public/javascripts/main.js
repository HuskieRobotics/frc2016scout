$(document).ready(function(){
	$("#submit_button").click(function () {
		$.post("/save", $("#main_form").serialize()).done(function(data){
			alert(data);
		});
	});
	$("#pit_submit").click(function() {
		alert('hey');
		// $.post("/save_pit", $("#match_form").serialize()).done(function(data){
			// alert(data);
		// });
	});
});
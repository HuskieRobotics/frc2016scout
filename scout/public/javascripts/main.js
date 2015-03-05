$(document).ready(function(){
	$('[data-toggle="popover"]').popover()
	$("#submit_button").click(function () {
		$.post("/save", $("#main_form").serialize()).done(function(data){
			alert(data);
		});
	});
	$("#pit_submit").click(function() {
		alert('pit clicked');
		$.post("/save_pit", $("#pit_form").serialize()).done(function(data){
			alert(data);
		});
	});
	$("#match_submit").click(function() {
		alert('match clicked');
		$.post("/save_match", $("#match_form").serialize()).done(function(data){
			alert(data);
		});
	});
});
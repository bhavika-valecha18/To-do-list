$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.StopPropogation();
})
$("input[type='text']").keypress(function(e){

	if(e.which === 13)
	{
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li><span> <i class='fa fa-trash-o' aria-hidden='true'></i> </span>" + text + "</li>");

	}


})
$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
})
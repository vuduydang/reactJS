$(document).ready(function(){
	$("#submit").attr('disabled','');
	$(".form-control").keyup(function(event) {
		$(".form-control").each(function() {
			var validation 	= $(this).data('validation');
			var value 		= $(this).val();
			if (validation=='required' && value=="") {
				$('#submit').attr( "disabled"," " );
			}else{
				$('#submit').removeAttr( "disabled" );
			}
		});
		var value = $(this).val();
		if (value == "") {
			$(this).css('border-color','#e31010');
			$('#submit').attr( "disabled"," " );
		}else{
			$(this).css('border-color','#000000');
		}
	});
});

function confirmDel(){
	var check = confirm('bạn có chắc chắn muốn xóa ?');
	var id = $(this).data("id");
	alert(id);
	if (check) {
		location.assign("http://localhost/PHP2/product/delete/<?=$v->id?>");
	}
}
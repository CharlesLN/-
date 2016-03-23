$(function() {
	var str;
	String.prototype.nospace = function() {
		return this.replace(/\s+/g, "");
	}
	$('input').click(function() {
		if ($(this).attr("checked")) {
			$(this).attr("checked", false);
		} else
			$(this).attr("checked", true);
	});
	$('#save').on('click', function() {
		$("input[type='checkbox']").each(function() {
			if ($(this).attr('checked'))
				str += $(this).parent().parent().text() + "||";
		});

		str = str.replace(/undefined/, '')
		str = str.nospace();
		//alert(str);
		//ajax
		$("#mymodal-data1").removeClass();
		$("#mymodal-data1").addClass('modal fade');
		$("#mymodal-data1").css("display", "none");
		$('body').removeClass();
		$('#fade').removeClass();
		$('#tip').html("<em>管理员已保存</em>");
		//后端看这里ajax
		$.post('test.jsp', {
				data: str
			},
			function(resault) {
				if (resault) {
					$('#tip').html("<em>保存成功！</em>");
					str = '';
				}
			});
		$
		str = ' ';
	});
})
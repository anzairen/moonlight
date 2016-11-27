var selectOptions=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var ansStr;
var index = 0, num;

var imgNum;
var minImgNum = 1;
var maxImgNum = 40;


function shuffle(ops, min, max ){
	for(var i=0; i< (max-min); i++){
		var first = Math.floor(Math.random() * max) + min;
		var second = Math.floor(Math.random() * max) + min;
		var firstCon = ops[first];
		ops[first] = ops[second];
		ops[second] = firstCon;
	}
}

function renderHTML(){

	$("input[type='radio']").attr("checked",false).checkboxradio("refresh");
	
	if(index === 0){
		$("#btn-left").prop('disabled', true);
	}else{
		$("#btn-left").prop('disabled', false);
	}
	if(index === (selectOptions.length -1)){
		$("#btn-right").prop('disabled', true);
	}else{
		$("#btn-right").prop('disabled', false);
	}
	
	imgNum = Math.floor(Math.random() * maxImgNum) + minImgNum;
	var beforeUrl = "url('./img/before/b" + imgNum + ".png')";
	$("#img-before").css({ "background-image": beforeUrl});
	
	num = selectOptions[index];
	$("#img-after").css({ "background-image": "none"});
	$("#btn-right").prop('disabled', true);
	
	var questionUrl = "url('./img/question/q" + num + ".jpg')";
	$("#img-question").css({ "background-image": questionUrl});
	
	var ans = options[num].ans;
	var ops = options[num].ops;
	ops.push(ans);
	shuffle(ops, 0, 4);
	
	$("#option-0-type").html(ops[0].pre || "");
	$("#option-1-type").html(ops[1].pre || "");
	$("#option-2-type").html(ops[2].pre || "");
	$("#option-3-type").html(ops[3].pre || "");
	
	$("#option-0-value").html(ops[0].main || "");
	$("#option-1-value").html(ops[1].main || "");
	$("#option-2-value").html(ops[2].main || "");
	$("#option-3-value").html(ops[3].main || "");
	
	ansStr = ans.pre + ans.main;
	$("#options-0").prop("value", ops[0].pre + ops[0].main);
	$("#options-1").prop("value", ops[1].pre + ops[1].main);
	$("#options-2").prop("value", ops[2].pre + ops[2].main);
	$("#options-3").prop("value", ops[3].pre + ops[3].main);
}

$(document).on('pageinit', function() {
	shuffle(selectOptions, 0, 20);
	renderHTML();
});

$(document).ready(function() { 
	$('.question-container').on("change", function() {
		var value = $("input[name='options']:checked").val();
		if (value == ansStr){
			right();
		}else{
			wrong();
		}
	});
	
	$("#btn-left").click(function() {
		index--;
		renderHTML();
	});
	$("#btn-right").click(function() {
		index++;
		renderHTML();
	});
	
	function right(){
		var afterUrl = "url('./img/after/a" + imgNum + ".png')";
		$("#img-after").css({ "background-image": afterUrl});
		$("#btn-right").prop('disabled', false);
	};
	function wrong(){
		console.log("wrong");
		var wrongUrl = "url('./img/wrong.png')";
		$("#img-after").css({"background-image": wrongUrl});
		 $("#img-after").fadeOut(10).fadeIn(500);
		$("#btn-right").prop('disabled', true);
	};
});
interval=1000

sec=1
min=0
middle=":0"
hourMiddle="0"

	$(".clock").html("0:00")
function second(){
	setTimeout(function(){
		$(".clock").html(hourMiddle+min+middle +sec)
		sec +=1
		second()
	},interval);

	if(sec>9){
		middle=":"
	}else{
		middle=":0"
	}
	if(min>9){
		hourMiddle=""
	}else{
		hourMiddle="0"
	}

	if(sec==60){
		sec=0
		min +=1
		// $(".clock").append("hello")		
	}
	if(min==60){
		min=0
		// min +=1
		// $(".clock").append("hello")		
	}

}

second()


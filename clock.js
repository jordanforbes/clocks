interval=1000

sec=1

function second(){
	// $(".clock").html(sec)
	setTimeout(function(){
		$(".clock").html(sec)
		sec +=1
		second()
	},interval);

	if(sec==60){
		sec=0
		// $(".clock").append("hello")
		
	}

}

second()


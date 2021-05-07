const counter = document.querySelector('#count');
async function count(){
	setTimeout(function(){
		if (parseInt(counter.innerHTML) == 1){
			counter.innerHTML = 30;
		}
		else{
			counter.innerHTML = parseInt(counter.innerHTML) - 1;
		}
		count()
	},1000);
}

count();
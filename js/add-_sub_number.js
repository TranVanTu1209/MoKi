
function add() {
	
	var t =document.querySelector("#quantity").value;
	document.querySelector("#quantity").value=parseInt(t)+1;

}
function sub() {
	
	var t =document.querySelector("#quantity").value;
	if(t>0){
		document.querySelector("#quantity").value=parseInt(t)-1;
	}

}
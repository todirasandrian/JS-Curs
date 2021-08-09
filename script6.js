//1
function toggleTextt(){
	var x = document.getElementById("Myid");
	if (x.style.display === "none") {
	x.style.display = "block";
} else {
x.style.display = "none";
}
}


//2
var hidden = false;
    function action() {
        hidden = !hidden;
        if(hidden) {
            document.getElementById('togglee').style.visibility = 'hidden';
        } else {
            document.getElementById('togglee').style.visibility = 'visible';
        }
    }



		//3
		let panes = document.querySelectorAll('.pane');
    for(let pane of panes) {
      pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
      pane.firstChild.onclick = () => pane.remove();
    }


		//4
		//function js_style() 
		//text.style.fontSize ="14pt";
		//{
		//	text.style.color ="blue";
		//	text.style.fontFamily ="Comic Sans MS";
		//}




		//5





		//6
		//function set_background() {
		//	docBody = document.getElementsByTagName("body")[0];
		//	 //Get all the p elements that are descendants of the body
		//	 myBodyElements = docBody.getElementsByTagName("p");
		// // get the first p elements
		//	 myp1 = myBodyElements[0];
		//	 myp1.style.background = "rgb(255,0,0)";
		// // get the second p elements
		//	 myp2 = myBodyElements[1];
		//	 myp2.style.background = "rgb(255,255,0)";
		// }





		//7
		function toggleText(){
			var x = document.getElementById("Myidd");
			if (x.style.display === "none") {
			x.style.display = "block";
		} else {
		x.style.display = "none";
		}
		}
		
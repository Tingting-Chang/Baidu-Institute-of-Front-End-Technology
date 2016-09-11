window.onload = function () {
	var oInput = document.getElementsByClassName('input')[0],
		oAddLeft = document.getElementsByClassName('addLeft')[0],
		oAddRight = document.getElementsByClassName('addRight')[0],
		oDelLeft = document.getElementsByClassName('delLeft')[0],
		oDelRight = document.getElementsByClassName('delRight')[0],
		oQuery = document.getElementById('query');

	var data = [];
// console.log(oInput.value);
// alert(oInput.value);

	function addData() {
		
	}

	function renderAqiList() {
		oQuery = "";
		for(var i=0; i<data.length; i++) {
			var oDiv = document.createElement('span');
			oDiv.innerHTML = data[i];
			oDiv.className = 'item';
			oQuery.appendChild(oDiv);
		}
		
	}

	function addLeftHandler() {
		data.unshift(oInput.value);
		console.log(data);
		renderAqiList();
	}
	oAddLeft.addEventListener('click', addLeftHandler,false);
};
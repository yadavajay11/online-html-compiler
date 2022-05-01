(function(){
	'use strict'
	document.querySelector("#run").addEventListener("click", function(){
		var html = document.querySelector("#html-code").value;
		// console.log(html);
		var css = document.querySelector("#css-code").value;
		// console.log(css);

		document.querySelector("#output").innerHTML = html;
		document.querySelector("head style").innerHTML = css;
	});

	document.querySelector("#reset").addEventListener("click", function(){
		document.querySelector("#html-code").value = "";
		document.querySelector("#css-code").value = "";
		document.querySelector("#output").innerHTML = "";
		document.querySelector("head style").innerHTML = "";
	});
})();
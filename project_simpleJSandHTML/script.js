var image1, 
	image2, 
	image3, 
	pole_hov, 
	pol_x, 
	pol_y;
window.onload = function(){
	image1 = document.getElementById("image1");
	image2 = document.getElementById("image2");
	image3 = document.getElementById("image3");
	pole_hov = document.getElementById("pole_hov");
	
	image1.onmouseout = function(){
		image2.style.display = "none";
		pole_hov.style.display = "block";
	}
	
	image1.onmousemove = function(e){
		image2.style.display = "block";
		pole_hov.style.display = "block";
		pol_x = e.clientX-image1.offsetLeft;
		pol_y = e.clientY-image1.offsetTop;
		pole_hov.style.left = (pol_x-75)+"px";
		pole_hov.style.top = (pol_y-75)+"px";
		if((pol_x-75)>image1.offsetHeight) 
			pole_hov.style.left = (image1.offsetHeight)+"px";
		if((pol_x-75)<0) 
			pole_hov.style.left = 0 + "px";
		if((pol_y+75)>image1.offsetHeight) 
			pole_hov.style.top = (image1.offsetHeight-pole_hov.offsetHeight)+"px";
		if((pol_y-75)<0) 
			pole_hov.style.top = 0 + "px";

		var procX = image1.offsetWidth/150;
		var procY = image1.offsetHeight/150;
		var tx = image3.offsetWidth/150;
		var ty = image3.offsetHeight/150;
		var now_pol_x = (pole_hov.offsetLeft/procX).toFixed(0);
		var now_pol_y = (pole_hov.offsetTop/procY).toFixed(0);
		image3.style.marginTop = -(ty*now_pol_y)+"px";
		image3.style.marginLeft = -(tx*now_pol_x)+"px";
	}

}

$(".add-button").click(function (e) {

	console.log(this.getAttribute("data-id"));
	let productId = this.getAttribute("data-id");
	$.ajax({
		url : "/Catalog/ShopCartPost",
		type :"POST",
		data : {
			productId : productId
		},
		success : function(response){
			alert(response);
		}
	})
})
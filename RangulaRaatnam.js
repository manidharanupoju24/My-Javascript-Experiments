function show_pattern(){
		var top_position=75 , left_position=525;
		var width=300 ,height=300;
		var colors=["#EC407A","#3F51B5","#388E3C","#FFA000","#E65100","#D50000","#42A5F5"];
		var the_body = document.getElementById("myBody");

		while (width > 50){
			var this_div = document.createElement("div");
			var random_number = Math.random() * 7;
			random_number = Math.floor(random_number);
			this_div.style.top = top_position + "px";
			this_div.style.left = left_position + "px";
			this_div.style.width = width + "px";
			this_div.style.height = height + "px";
			this_div.style.background = colors[random_number];
			the_body.appendChild(this_div);
			top_position += 10; left_position += 10; 
			width -= 20; height -= 20;
			} 
}
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$("#pixel_canvas").on("click","td", function(evt){
	var color = $("#colorPicker").val();
	$(evt.target).css("background-color",color)
});

$("#sizePicker").on("submit", function(evt){
	var height = $("#input_height").val();  
    var width = $("#input_width").val();
    evt.preventDefault();
	makeGrid(height,width)
});

function makeGrid(height,width) {
	var grid = "";
	for (var c = 0 ; c < height ; c++){
		grid +="<tr>";

		for (var w = 0 ; w < width ; w++){
				grid += "<td></td>"
			}
			grid += "</tr>";
		}

		$("#pixel_canvas").html(grid);
	};


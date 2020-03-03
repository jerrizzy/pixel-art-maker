// Select color input
// Select size input
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const colors = document.getElementById("colorPicker");

// When size is submitted by the user, call makeGrid()

document.getElementById("sizePicker").submit(function (event) {
    event.preventDefault();
    height.valueOf();
    width.valueOf();
    event.makeGrid(height, width);
    //console.log("height: " + height + "and width: " + width)
});


function makeGrid(arg1, arg2) {
    document.getElementsByTagName("tr").removeChild();
    for (var i = 1; i <= arg1; i++) {
        document.getElementById("pixelCanvas").appendChild("<tr id=table" + i + "></tr>");
        for (var j = 1; j<=arg2; j++) {
            document.getElementById("#table" + i).appendChild("<td></td>");
        }
    }

    document.getElementsByTagName("td").click(function coloring() {
        colors.valueOf();
        if (document.attr("style")) {
            document.removeAttr("style")
        }else{
            (document.attr("style", "background-color" + colors));
        }
    })
}

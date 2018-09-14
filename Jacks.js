var ctx;
function canvasStart(idOfCanvas, dimensions) {
  var canvas = document.getElementById(arguments[0]);
  ctx = canvas.getContext(arguments[1]);
  return "ctx has been created. Use this for your canvas!";
}
var canvas = {
	rectangle: function rectangle(left, top, width, height) {
		ctx.fillRect(arguments[0], arguments[1], arguments[2], arguments[3]);
	}
}

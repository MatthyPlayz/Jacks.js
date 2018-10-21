var http = require("http");
var time = 0;
var server;
server = http.createServer(function(req, res) {
  setInterval(function() {time += 1;}, 1);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Running Jacks.js platform...");
  res.end("0 functions loaded\n");
  var ctx;
  function canvasStart(idOfCanvas, dimensions) {
    var canvas = document.getElementById(arguments[0]);
    ctx = canvas.getContext(arguments[1]);
    return "ctx has been created. Use this for your canvas!";
  }
  res.end("1 function(s) loaded\n");
  var fontSizing;
  var font;
  var canvas = {
    fontSizing: (fontSizing = "50px"),
    font: (font = "Times New Roman"),
    rectangle: function rectangle(left, top, width, height) {
      ctx.fillRect(arguments[0], arguments[1], arguments[2], arguments[3]);
    },
    fillColor: function fillColor(hexcolor) {
      ctx.fillStyle = arguments[0];
    },
    strokeColor: function strokeColor(hexcolor) {
      ctx.strokeStyle = arguments[0];
    },
    text: function text(text, left, top) {
      ctx.font = canvas.fontSizing + " " + canvas.font;
      ctx.fillText(arguments[0], arguments[1], arguments[2]);
    },
    addCanvas: function addCanvas(layer_number, width, height, id) {
      var c = document.createElement("canvas");
      c.setAttribute("width", arguments[1]);
      c.setAttribute("height", arguments[2]);
      c.setAttribute("id", arguments[3]);
      c.style.zIndex = arguments[0];
      c.stlye.position = "absolute";
      document.body.appendChild(c);
    },
    line: function line(x1, y1, x2, y2) {
      ctx.beginPath();
      ctx.moveTo(arguments[0], arguments[1]);
      ctx.lineTo(arguments[2], arguments[3]);
      ctx.stroke();
    }
  };
  clearInterval(1);
  res.end("Done in " + time + " ms.");
});
server.listen(8080);

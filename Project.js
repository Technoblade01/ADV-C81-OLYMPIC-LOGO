canvas = 
document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
color = "red";
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 2;
ctx.rect(10, 10, 200, 100);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = "2";
ctx.arc(30, 30, 10, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = "2";
ctx.arc(40, 40, 10, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.arc(50, 30, 10, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = "2";
ctx.arc(60, 40, 10, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = "2";
ctx.arc(70, 30, 10, 0, 2 * Math.PI);
ctx.stroke();
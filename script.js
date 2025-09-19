console.log("hello");
var canvas = document.querySelector('canvas');
canvas.height = window.innerHeight ;
canvas.width = window.innerWidth ;

const ctx = canvas.getContext('2d');



ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 100);
ctx.fillStyle = 'red'
ctx.fillRect(120, 120, 120, 120);
ctx.fillStyle = 'green';
ctx.fillRect(250, 250, 150, 150);

//line 
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(120, 459);
ctx.strokeStyle = 'blue';

ctx.stroke();
ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 2, false);
ctx.strokeStyle = 'red';

ctx.stroke();
for (var i = 0; i < 34; i++) {
    var x=Math.random() * window.innerWidth;
    
    var y=Math.random() * window.innerHeight;
    ctx.beginPath();
    ctx.arc(x,y , 50, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'green';

    ctx.stroke();
}





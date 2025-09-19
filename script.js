console.log("hello");
var canvas = document.getElementById('demo');
canvas.height = window.innerHeight ;
canvas.width = window.innerWidth ;

const ctx = canvas.getContext('2d');




var x = Math.random() *innerWidth ;
var y=Math.random() *innerHeight;
var dx =(Math.random()-0.5) *8;
var dy = (Math.random()-0.5) *8;
var radius=30;
function animate(){
    requestAnimationFrame(animate);
         ctx.clearRect(0,0,innerWidth,innerHeight);

        ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI * 2, false);
ctx.strokeStyle = 'red';
ctx.stroke();
 
if(x+ radius >innerWidth || x-radius <0){
    dx=-dx ;
}
if(y+radius >innerHeight || y-radius<0 ){
    dy=-dy;
}
x+=dx ;
 y+=dy;
    }

animate();

// for (var i = 0; i < 34; i++) {
//     var x=Math.random() * window.innerWidth;
    
//     var y=Math.random() * window.innerHeight;
//     ctx.fillStyle = 'red';
//     ctx.beginPath();
//     ctx.arc(x,y , 50, 0, Math.PI * 2, false);
//     // ctx.strokeStyle = 'green';
   

//     ctx.stroke();

// }

// for(let i=0 ; i<34 ; i++){
//     var x=Math.random() * window.innerWidth;
    
//     var y=Math.random() * window.innerHeight;
//     var z=Math.random() * window.innerWidth;
    
//     var a=Math.random() * window.innerHeight;
    
//     ctx.moveTo(z,a);
//     ctx.lineTo(x,y);
   
//  ctx.stroke();
// }


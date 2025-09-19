console.log("hello");
var canvas = document.getElementById('demo');
canvas.height = window.innerHeight ;
canvas.width = window.innerWidth ;
const ctx = canvas.getContext('2d');






function circle(x,y,dx,dy,radius){
 this.x =x;
 this.y = y;
this.dx = dx;
this.dy = dy;
this.radius = radius;

 this.draw = function(){
ctx.beginPath();
ctx.arc(this.x,this.y,this.radius ,0,Math.PI*2,false);
ctx.strokeStyle ="red";
ctx.stroke();
 }
 this.update = function(){
    if(this.x + this.radius >innerWidth || this.x-this.radius <0){
    this.dx=-this.dx ;
}
if(this.y+this.radius >innerHeight || this.y-this.radius<0 ){
    this.dy=-this.dy;
}
this.x += this.dx ;
 this.y += this.dy;

 this.draw();
    }
 }


 var circleArray = [];
 for(var i=0 ;i< 100 ;i++){
    var x = Math.random() * (innerWidth-2*radius)+radius;
    var y =Math.random() *innerHeight ;
    var dx =(Math.random()-0.5);
    var dy= (Math.random()-0.5);
    var radius =30;
    circleArray.push(new circle(x,y,dx,dy,radius))
 }

var circle = new circle(200,200,3,3 ,30);



function animate(){
    requestAnimationFrame(animate);
         ctx.clearRect(0,0,innerWidth,innerHeight);
         circle.update();

        for(var i=0 ; i<circleArray.length ;i++){
            circleArray[i].update();
        }
 

    }
animate();


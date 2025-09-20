console.log("hello");
var canvas = document.getElementById('demo');
canvas.height = window.innerHeight ;
canvas.width = window.innerWidth ;
const ctx = canvas.getContext('2d');


var mouse = {
    x:undefined,
y:undefined

}
const maxRadius =40;
const minRadius =5;
window.addEventListener('mousemove',function(event){
    mouse.x =event.x;
    mouse.y =event.y;
    console.log(mouse);
});


function circle(x,y,dx,dy,radius){
 this.x =x;
 this.y = y;
this.dx = dx;
this.dy = dy;
this.radius = radius;
this.color =`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()
})`;

 this.draw = function(){
ctx.beginPath();
ctx.arc(this.x,this.y,this.radius ,0,Math.PI*2,false);
ctx.fillStyle = this.color;
ctx.stroke();
ctx.fill();
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
//interactivity
if(mouse.x- this.x <50 && mouse.x - this.x >-50
    && mouse.y-this.y <50 && mouse.y- this.y>-50
){
    if(this.radius < maxRadius){
        this.radius+=1;
    }
  
}
else if(this.radius>minRadius){
    this.radius-=1;
}

 this.draw();
    }
 }


 var circleArray = [];
 for(var i=0 ;i< 150;i++){
    var radius = 30;
    var x = Math.random() * (innerWidth-2*radius)+radius;
    var y =Math.random() *innerHeight ;
    var dx =(Math.random()-0.5);
    var dy= (Math.random()-0.5);
    
    circleArray.push(new circle(x,y,dx,dy,radius));
 }




function animate(){
    requestAnimationFrame(animate);
         ctx.clearRect(0,0,innerWidth,innerHeight);
         

        for(var i=0 ; i<circleArray.length ;i++){
            circleArray[i].update();
        }
 

    }
animate();


console.log("hello");
var canvas = document.getElementById('demo');
canvas.height = window.innerHeight ;
canvas.width = window.innerWidth ;
const ctx = canvas.getContext('2d');

// const gravity = 0.5;
// const friction = 0.8;  // controls energy loss when bouncing



// var mouse = {
//     x:undefined,
// y:undefined

// }
// const maxRadius =40;
// const minRadius =5;
// window.addEventListener('mousemove',function(event){
//     mouse.x =event.x;
//     mouse.y =event.y;
//     console.log(mouse);
// });


function circle(x,y,dx,dy,radius){
 this.x =x;
 this.y = y;
this.dx = dx;
this.dy = dy;
 this.radius = radius;
// this.color =`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${0.9
// })`;

 this.draw = function(){
ctx.beginPath();
ctx.arc(this.x,this.y,this.radius ,0,Math.PI*2,false);
ctx.fillStyle = 'white';
ctx.shadowBlur =10;
 ctx.shadowColor =  'white';
ctx.stroke();
ctx.fill();
 }
 
 this.update = function() {
// if(this.y+this.radius >innerHeight || this.y-this.radius<0 ){
//     this.dy=-this.dy;
// }
// this.x += this.dx ;
// this.y += this.dy;

this.y += this.dy;
if(this.y- this.radius >innerHeight){
    this.y = -this.radius;
    this.x =Math.random()* innerWidth;
    this.dy =1+ Math.random() *2;
    this.radius = Math.random() *3 +2;
};
this.draw();}



// Bounce off the bottom with gravity and friction
// if (this.y + this.radius + this.dy > innerHeight) {
//     this.dy = -this.dy * friction;  // reverse and reduce speed
// } else {
//     this.dy += gravity;  // gravity pulls down
// }

// // Bounce off left/right walls
// if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//     this.dx = -this.dx;
// }

// this.x += this.dx;
// this.y += this.dy;



//interactivity
// if(mouse.x- this.x <50 && mouse.x - this.x >-50
//     && mouse.y-this.y <50 && mouse.y- this.y>-50
// ){
//     if(this.radius < maxRadius){
//         this.radius+=1;
//     }
  
// }
// else if(this.radius>minRadius){
//     this.radius-=1;
// }

//  this.draw();
    }
//  }


 var circleArray = [];
 for(var i=0 ;i< 550;i++){
   
    // var radius = 30;
var x =Math.random()* innerWidth;
var y =Math.random() * innerHeight;
var dy =1 + Math.random() *2;
var radius =Math.random() *3 +2;
var dx =4 ;
    
    // var x = Math.random() * (innerWidth-2*radius)+radius;
    // var y =Math.random() *innerHeight ;
    // var dx =0 ;
    // var dy =Math.random()* 1+0.5 ;
    
    // var dx =(Math.random()-0.5);
    // var dy= (Math.random()-0.5);
    
    circleArray.push(new circle(x,y,dx,dy,radius));
 }




function animate(){
    requestAnimationFrame(animate);
    ctx.fillStyle='rgba(0,0,0,0.1)';
         ctx.clearRect(0,0,innerWidth,innerHeight);
         

        for(var i=0 ; i<circleArray.length ;i++){
            circleArray[i].update();
        }
 

    }
animate();


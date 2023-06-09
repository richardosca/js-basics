var dad = new Image();
dad.src = "food.jpg";
var pic1 = new Picture(10,100,100,100,dad);
function Picture(x,y,w,h,imagename) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.imagename = imagename;
    this.draw = drawpic;
    this.overcheck = overrect;
   }
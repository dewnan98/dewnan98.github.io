function Tongkat (img,x, y ,lebar,tinggi)
{

  this.img = img;
  this.x = x ;
  this.y = y;
  this.tinggi = tinggi;
  this.lebar = lebar;

  this.show = function ()
  {
    push();
    translate(playerBall.pos.x,playerBall.pos.y);
    var jarak = playerBall.r + this.tinggi/2+(p*3)+10;

       var ms = new Vektor (mouseX , mouseY);
        var dir = ms.dif(playerBall.pos);
  //      dir.normalized();

      //  dir.y *=-1;

        //dir.mult(-1);

      var a = atan2(dir.y,dir.x);

        this.x = jarak*cos(a);
        this.y = jarak*sin(a);




  push();
  translate(this.x,this.y);
     var r = atan2(playerBall.pos.y-(this.y+playerBall.pos.y) , playerBall.pos.x-(this.x+playerBall.pos.x))+3/2*PI;
      r+=PI;
   rotate(r);

  image(this.img ,0,0);

   pop();
    imageMode(CENTER);


    // fill(255);
    // ellipse(this.x,this.y,30,30);


    pop();

  }

}

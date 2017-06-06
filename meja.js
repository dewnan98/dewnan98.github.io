function Dinding (x , y , lebar ,tinggi,a) {
this.x = x;
this.y = y ;
this.tinggi = tinggi;
this.lebar = lebar;
this.a = a;

  this.show = function()
  {
    fill (color(32,54,243));
   rect(this.x , this.y , this.lebar , this.tinggi);
  }
  this.collision = function (object)
  {

    if (object.pos.x -object.r< this.x + this.lebar &&
       object.pos.x + object.r > this.x &&
       object.pos.y -object.r< this.y + this.tinggi &&
       object.pos.y + object.r > this.y) {


      if(this.a =='x')
      {
        object.vel.x *=-1;
      }

      else
      {
        object.vel.y *=-1;
      }
    }
  }

}


function Hole (x ,y ,r)
{
  this.pos  = new Vektor(x,y);

   this.r = r;


   this.isMasuk = function (object)
   {
     var d = object.pos.jarak(this.pos);

     if(d<this.r)
     {
       return true;
     }
   }


   this.masuk = function(object) {

     if(isMasuk(object))
     {

     }
   }

   this.show = function()
   {
     fill(color(255,56,12));
     ellipseMode(CENTER);
     ellipse(this.pos.x , this.pos.y,this.r*2,this.r*2);
   }
}

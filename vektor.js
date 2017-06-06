function Vektor (x , y )
{
  this.x = x;
  this.y = y;


  this.tambahVektor = function (that)
  {
    this.x +=that.x;
    this.y +=that.y;

  }
  this.kurangVektor = function (that)
  {
    this.x-=that.x;
    this.y-=that.y;

  }

  this.jarak = function (that)
  {
    var a  = pow(this.x-that.x ,2);
    var b = pow (this.y-that.y,2);
    var d = a+b;
    return sqrt(d);
  }


  this.magnitude = function (){

    var m = (this.x*this.x)+(this.y*this.y);
    return sqrt(m);

  }

    this.normalized = function ()
    {
      var vector = new Vektor (0,0);


      var length = this.magnitude();

      if(length != 0){

          vector.x = this.x/length;
          vector.y = this.y/length;
      }

      return vector;

  }
  this.div = function (n)
  {
    this.x /=n;
    this.y /=n;
  }

  this.dif= function (that)
  {
    var vector = new Vektor(0,0);
    vector.x = this.x - that.x;
    vector.y = this.y - that.y;

    return vector;
  }
  this.dot = function (that)
  {
    return this.x*that.x+this.y*that.y;
  }


  this.mult = function (n) {

     this.x*=n;
    this.y*=n;

  }


  this.reset = function ()
  {
    this.x = 0;
    this.y = 0;
  }


}

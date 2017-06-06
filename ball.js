function Ball (x , y , m,img)
{

  this.pos = new Vektor (x,y);
//  this.friction = 0.03;
  this.vel = new Vektor(0,0);
  this.m = m;
  this.img=img;
  this.r = 10;



  this.active = function (a) {
    this.draws();
    this.update();
    this.hittin();


    for(var b = 0 ; b<balls.length;b++)
      {

          if (b!=a)
          {
            this.collision(balls[b]);
          }

      }


  }

  this.isCollision = function(that)
  {

    var d = this.pos.jarak(that.pos);

    if(d <= this.r + that.r)
    return true;

    else return false;
  }
  this.collision = function (that)
  {

    if(this.isCollision(that))
    {
    //   var dif = this.pos.dif(that.pos);
    //   dif.div(this.pos.jarak(that.pos));
    //   var normal = dif
    //   var dv = this.vel.dif(that.vel);
    //   var dot = dv.dot(normal);
    //   console.log(dot);
    //   console.log(normal);
    //   console.log(dv);
    //
    //   if(dot>0)
    //   {
    //     var c= 100;
    //     var impulseStrengh = (1+c)*dot*(1/this.m+1/that.m);
    //     normal.mult(impulseStrengh);
    //
    //     var impulse = normal;
    //
    //
    //
    //  that.applyForce(impulse);
    //  impulse.mult(-1);
    //  this.applyForce(impulse);

        // this.vel.kurangVektor(impulse);


    //    console.log(impulse);
      //}
      // console.log("NABRAK");
      // console.log(impulse);
    //  console.log(playerBall);

    //
    // var ax = this.vel.x;
    // var ay = this.vel.y;
    // var bx = that.vel.x;
    // var by = that.vel.y;
    //
    // var avel = this.vel.magnitude();
    // var bvel = that.vel.magnitude();
    // var atheta = atan2(ay ,ax);
    // var btheta = atan2(by,bx);
    //
    // var dxvel = ax -bx;
    // var dyvel = ay-by;
    //
    // var dx = this.pos.x - that.pos.x;
    // var dy = this.pos.y - that.pos.y;
    //
    // var contact = atan2(dy,dx);
    // var theta = atan2(dyvel , dxvel);
    //
    // var newAx = bvel*cos(btheta-contact)*cos(contact)+avel*sin(atheta-contact)*cos(contact-45);
    // var newAy = bvel*cos(btheta-contact)*sin(contact)+avel*sin(atheta-contact)*sin(contact-45);
    // var newBx = avel*cos(atheta-contact)*cos(contact)+bvel*sin(btheta-contact)*cos(contact-45);
    // var newBy = avel*cos(atheta-contact)*sin(contact)+bvel*sin(btheta-contact)*sin(contact-45);
    //
    //
    //
    // this.vel.x = -newAx;
    // this.vel.y = newAy;
    //
    //
    //   that.vel.x = newBx;
    //   this.vel.y = newBy;

//     // distances x,y
//    var dx = this.pos.x-that.pos.x;
//    var dy = this.pos.y-that.pos.y;
//
//    // distance squared, radii sum
//    var dl2  = dx*dx+dy*dy;
//    var dr = this.r+that.r;
//
//
//
//    // mass a,b
//    var am = this.m;
//    var bm = that.m;
//
//    // inverse sum of mass
//    var m  = 1/(am + bm);
//
//    // distance non-squared, inverse of distance
//    var dl = sqrt(dl2);
//    var idl = 1/dl
//
//    // normal vectors
//    var nx = dx*idl;
//    var ny = dy*idl;
//
//    // separation vector
//    var sd = (dr-dl)*m;
//
//    // separation x,y
//    var sx= nx*sd;
//    var sy = ny*sd;
//
// //   separating circles
//    this.pos.x += sx*(am/2);
//    this.pos.y += sy*(am/2);
//    that.pos.x -= sx*(bm/2);
//    that.pos.y -= sy*(bm/2);
//
//    // velocity x,y
//    var vx = this.vel.x-that.vel.x;
//    var vy = this.vel.y-that.vel.y;
//
//    // dot product
//    var dot= vx*nx+vy*ny;
//
//    // if dot is positive, collide
//    if(dot>0)
//    {
//
//
//    // impulse and x,y
//    var e = 0.5;
//    var j = -(1+e)*dot*m;
//    var jx = nx*j;
//    var jy = ny*j;
//
//    // velocity change based upon the impulse and mass
//    this.vel.x += jx*am;
//    this.vel.y += jy*am;
//    that.vel.x -= jx*bm;
//    that.vel.y -= jy*bm;

 //}
 
 var Dx1, Dx2, Dy1, Dy2; //Distances to the collision point
 var X1, X2, Y1, Y2; //distances to bewteen centers and collision
 var DxR, DyR; //real distances (collision overlap)
 var Dx, Dy; //imaginary distances (no overlap)
 var Vp1, Vp2, Vs1, Vs2; //normal and perpendicular velocities to collision
 var newVs1, newVs2; //for storing new straigth velocites during calculations
 var distance; //real distance between ball centers

 X1 = this.pos.x + this.r;
 X2 = that.pos.x + that.r;
 Y1 = this.pos.y + this.r;
 Y2 = that.pos.y + that.r;

 DxR = (X2 - X1);
 DyR = (Y2 - Y1);

 distance = sqrt(DxR * DxR + DyR * DyR);


 Dx =  (this.r+that.r) * DxR / distance;
 Dy =  (this.r+that.r) * DyR / distance;


 //GESER POSISI KETIKA TUBRUKAN

 if (this.m < that.m)
 {
   X1 = (X1 - (Dx - DxR));
   Y1 = (Y1 - (Dy - DyR));

   this.pos.x = X1 - this.r;
   this.pos.y = Y1 - this.r;
 }
 else
 {
   X2 = (X2 + (Dx - DxR));
   Y2 = (Y2 + (Dy - DyR));

   that.pos.x = X2 - that.r;
   that.pos.y = Y2 - that.r;
 }

 //JARAK ANTARA BOLE KE TITIK TUMBUKAN

 Dx1 = (this.r /  (this.r+that.r)) * (X2 - X1);
 Dx2 = (that.r /  (this.r+that.r)) * (X2 - X1);

 Dy1 = (this.r /  (this.r+that.r)) * (Y2 - Y1);
 Dy2 = (that.r /  (this.r+that.r)) * (Y2 - Y1);


//FORMULAS

 Vs1 = this.vel.x * Dx1 / this.r + this.vel.y * Dy1 / this.r;
 Vp1 =	 this.vel.y * Dx1 / this.r - this.vel.x * Dy1 / this.r;

 Vs2 =that.vel.x * Dx1 / that.r + that.vel.y * Dy1 / that.r;
 Vp2 = that.vel.y * Dx1 / that.r - that.vel.x * Dy1 / that.r;


 newVs1 =  CollisionVelocity(Vs1, Vs2, this.m, that.m);
 newVs2 = CollisionVelocity(Vs2, Vs1, that.m, this.m);

 this.vel.x = XVelocity(newVs1, Vp1, Dx1, Dy1, this.r);
 this.vel.y = YVelocity(newVs1, Vp1, Dx1, Dy1, this.r);

 that.vel.x = XVelocity(newVs2, Vp2, Dx2, Dy2, that.r);
 that.vel.y = YVelocity(newVs2, Vp2, Dx2, Dy2, that.r);





    }



  }


  this.draws = function ()
  {
    fill(255);
    imageMode(CENTER);
    image(this.img,this.pos.x , this.pos.y , this.r*2, this .r*2);

    textSize(12);
    textAlign(LEFT);
    fill(255);
    text(round(this.vel.x*100)/100+','+round(this.vel.y*100)/100 , this.pos.x+(this.r+3),this.pos.y-(this.r+3));


  }

  this.hit = function (vx,vy)
  {

    var power = new Vektor(vx,vy);

    this.vel.tambahVektor(power);


  }

  this.move = function ()
  {
  //  console.log(this.pos);
    this.pos.tambahVektor(this.vel);
  }
  this.update = function ()
  {
    this.move();

    this.stop();

   this.vel.mult(0.99);

    // var friction = this.vel;
    //
    //  friction = friction.normalized();
    //        friction.mult(-1);
    //     //   console.log(friction);
    //   var c = 1;
    //   friction.mult(c);
    // this.applyForce(friction);

  }
  this.applyForce = function (f)
  {

    f.div(this.m);
    this.vel.tambahVektor(f);
  }

  this.hittin = function ()
  {
    if (this.pos.x>lebar)
    {
      this.vel.x *= -1;
      //this.vel.x/2;
    }
    if (this.pos.x<0)
    {
      this.vel.x *= -1;
    //  this.vel.x/2;
    }
    if (this.pos.y>tinggi)
    {
      this.vel.y *= -1;
    //  this.vel.y/2;
    }
    if (this.pos.y<0)
    {
      this.vel.y *= -1;
  //   this.vel.y/2;
    }


  }
  this.stop = function()
  {
    if(this.vel.magnitude() <=0.3 )
    {
      this.vel.reset();
    }
  }
}





	function XVelocity( Vs,   Vp,   Dx, Dy,  R)
	{
		return Vs * Dx / R - Vp * Dy / R;
	} //x velocity from S and P
	function YVelocity(Vs,   Vp,   Dx,   Dy,   R)
	{
		return Vs * Dy / R + Vp * Dx / R;
	} //y velocity from S and P
	function CollisionVelocity( V1,   V2,   m1,   m2) //Returns velocity of a ball after collision
	{
		return V1 * (m1-m2) / (m1+m2) + V2 * (2 * m2) / (m1 + m2);
	}


var balls = [];
var playerBall;
var dinding = [];
var ballsImage = [];
var playerImage ;
var holes = [];
var p = 0;
var val = 20;
var tongkat;
var tongkatImg;
var bisaNgeclick = true;
var siapMukul = false;
var modeKekeran= true;
var mouseHold = false;
// var dt = 0.3

var lebar = 1000 ,  tinggi = 600;
var meja ;
function preload()
{
  playerImage = loadImage("img/p.png");
  tongkatImg = loadImage("img/tongkat.png");
  meja = loadImage("img/meja.png");
  for(var a = 1 ; a<=9 ; a++ )
  {
    var i = loadImage("img/"+a+".png");
    ballsImage.push(i);
  }

  tongkat= new Tongkat(tongkatImg , 0 , 0 , 12 , 346);


}
function setup()
{
  //

  createCanvas(lebar,tinggi);


  createBall();
  createDinding();
  createHoles();

}

function draw ()
{

  imageMode(CORNER);
    background(meja);

    if(mouseHold)
    {
      playerBall.pos.x = mouseX;
      playerBall.pos.y= mouseY;

      playerBall.vel.reset();
    }
  //  console.log(mouseX , mouseY);
  playerBall.active(-1);

  for (var a = 0 ;a<balls.length;a++)
  {
    balls[a].active(a);
  }

  //DINDING


  for (var a = 0 ; a<dinding.length;a++)
  {
  //  dinding[a].show();
    dinding[a].collision(playerBall);
    for(var b = 0 ; b<balls.length;b++)
    {
      dinding[a].collision(balls[b]);
    }
  }

  //LUBANG

  for(var a= 0 ; a<holes.length;a++)
  {
//    holes[a].show();
    if(holes[a].isMasuk(playerBall))
    {
      mouseHold = true;
      playerBall.vel.reset();
    }
    for(b = 0 ; b<balls.length;b++)
    {

      if(holes[a].isMasuk(balls[b]))
      {
        balls.splice(b,1);

      }
    }
  }


  //pengecekan semua bola berhenti

  if(allBallsisStop())
  {
    bisaNgeclick = true;
  }

  //mousedi pencet

  if (mouseIsPressed)
  {
    var ms = new Vektor (mouseX,mouseY);
    var d = playerBall.pos.jarak(ms);
   if(d<playerBall.r)
   {

    bisaNgeclick = false;
    mouseHold = true;
   }

    else if(bisaNgeclick)
   {
      siapMukul = true;
      p+=0.3;

      if(p>=20)
      {
       p=20;
     }
  //   console.log(p);
    }

  //console.log(mouseX+","+mouseY);

  }

//jika mouse masih de=itekan posisibola sama dengan posisi mouse

// jika keyboard ditekan

  if(keyIsPressed)
  {
    if(key == " ")
    {
      if(bisaNgeclick)
     {
        siapMukul = true;
        p+=0.3;

        if(p>=20)
        {
         p=20;
       }
    //   console.log(p);
      }
    }
  }


  if(bisaNgeclick &&!mouseHold)
  {
    tongkat.show();
    if(modeKekeran)
      kekeran();

  }

}

function mouseReleased()
{
  if(siapMukul &&!mouseHold)
  {
    var ms = new Vektor (mouseX , mouseY);
    var dir = ms.dif(playerBall.pos);
  dir =  dir.normalized();
  // \\ dir.mult(-1);
    dir.mult(p);
    dir.mult(-1);

    playerBall.vel.tambahVektor( dir);

    siapMukul = false;
    bisaNgeclick =false;

    p=0;
    console.log(playerBall.vel.x+" , "+ playerBall.vel.y);




  }
  mouseHold =false;

}

function keyReleased()
{

  if(key == " ")
  {
  if(siapMukul = true)
  {
    var ms = new Vektor (mouseX , mouseY);
    var dir = ms.dif(playerBall.pos);
  dir =  dir.normalized();
  // \\ dir.mult(-1);
    dir.mult(p);
    dir.mult(-1);

    playerBall.vel.tambahVektor( dir);

    siapMukul = false;
    bisaNgeclick =false;

    p=0;
}

  }


}

function allBallsisStop ()
{
  if(playerBall.vel.magnitude() !=0)
  {
    return false;

  }

  for (var a=0 ;a<balls.length; a++)
  {
    if(balls[a].vel.magnitude()!=0)
    {
      return false;
    }
  }

  return true;
}


function kekeran()
{

  var ms = new Vektor (mouseX , mouseY);
  var dir = ms.dif(playerBall.pos);
dir =  dir.normalized();
// \\ dir.mult(-1);

 dir.mult(-1);

  for(var a =0 ; a<50; a++)
  {
    var ang = atan2(dir.y,dir.x);
    var xk = playerBall.pos.x+(a*val+playerBall.r+10)*cos(ang);
    var yk = playerBall.pos.y+(a*val+playerBall.r+10)*sin(ang);

   fill(255,500-(a*val));
   noStroke();
    ellipse(xk,yk,6,6);
  }


}


function keyPressed()
{

  if(keyCode ==UP_ARROW)
  {
val+=5;
  }

  if(keyCode ==DOWN_ARROW)
  val-=5;
}


function createBall()
{

    for(var a = 0 ; a<9;a++)
    {
      var tempy  ;
      var tempx ;

      if(a==0)
      {
        tempx = lebar-lebar/4-40;
        tempy = tinggi/2;
      }
      if(a==1)
      {
        tempx = lebar-lebar/4-20;
        tempy = tinggi/2+10;
      }
      if(a==2)
      {
        tempx = lebar-lebar/4-20;
        tempy = tinggi/2-10;
      }

      if(a==3)
      {
        tempx = lebar-lebar/4;
        tempy = tinggi/2+20;
      }
      if(a==4)
      {
        tempx = lebar-lebar/4;
        tempy = tinggi/2-20;
      }
      if(a==5)
      {
        tempx = lebar-lebar/4+20;
        tempy = tinggi/2+10;
      }
      if(a==6)
      {
        tempx = lebar-lebar/4+20;
        tempy = tinggi/2-10;
      }
      if(a==7)
      {
        tempx = lebar-lebar/4+40;
        tempy = tinggi/2;
      }
      if(a==8)
      {
          tempx = lebar-lebar/4;
          tempy = tinggi/2;
      }
      var b = new Ball (tempx,tempy,30,ballsImage[a]);
      balls.push(b);
    }

    playerBall = new Ball ( lebar/4,tinggi/2 ,30,playerImage);

}

  function createHoles()
  {
    holes.push(new Hole(48,48,27));
      holes.push(new Hole(48,547,27));
        holes.push(new Hole(498,35,27));
          holes.push(new Hole(496,563,27));
            holes.push(new Hole(946,48,27));
              holes.push(new Hole(946,547,27));

  }

  function createDinding()
  {
    dinding.push(new Dinding (0 ,87,55,512-87,'x'));
    dinding.push(new Dinding (90 ,0,460-80,55,'y'));
   dinding.push(new Dinding (528 ,0,460-80,58,'y'));
   dinding.push(new Dinding (88 ,540,460-80,495,'y'));
    dinding.push(new Dinding (528 ,540,460-80,500,'y'));
    dinding.push(new Dinding (lebar-60 ,83,300,512-83,'x'));
  }

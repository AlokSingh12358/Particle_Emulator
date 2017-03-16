var inpvx;
var inpvy;
var inpax;
var inpay;
var inpm;
var togp;
var togw;
var togf;
var pause=0;
var tog;
var x;
var y;
var speedx=1;
var speedy=1;
var valb;
var allb=[];
var canv;
var accx=0;
var accy=0;
var flor=-1;
var wal=-1;
var cl;
function setup() 
{
  inpvx=select('#inpvx');
  inpvy=select('#inpvy');
  inpax=select('#inpax');
  inpay=select('#inpay');
  inpm=select('#inpm');
  togp=select('#togp');
  togf=select('#togf');
  togw=select('#togw');
  cl=select('#cl');
  togp.mousePressed(stop)
  togf.mousePressed(florc)
  togw.mousePressed(wall);
  cl.mousePressed(clrs);
  canv=createCanvas(1300,550);
  canv.position(10,100);
  canv.mousePressed(mou);
}
function clrs()
{
  for(var j=0;j<100;j++)
  {
  	allb.pop();
  }
}
function florc()
{
	flor=flor*(-1);
}
function wall()
{
	wal=wal*(-1);
}
function bubble()
{
  this.accx=(float(inpax.value()))/10;
  this.accy=(float(inpay.value()))/10*(-1);
  this.x=mouseX;
  this.y=mouseY;
  this.spx=(inpvx.value())/10;
  this.spy=(inpvy.value())/10*(-1);
  this.mass=int(inpm.value());
  
  this.move=function()
  {
  this.spy=this.spy+this.accy;
  this.spx=this.spx+this.accx;
  this.x+=this.spx;
  this.y+=this.spy;
  if(this.y>550&&flor==1)
  {
	  this.spy=this.spy*(-1);
  }
  else if(wal==1)
  {
  	if(this.y>550||this.y<0)
  	{
  		this.spy=this.spy*(-1);
  	}
  	if(this.x<0||this.x>1300)
  	{
  		this.spx=this.spx*(-1);
  	}
  }
  }

  this.disp=function()
  {
    ellipse(this.x,this.y,this.mass,this.mass);
  }
}

function mou()
{
  allb.push(new bubble());
}

function stop()
{
	if(pause===0)
	   pause=1;
	else
	   pause=0;
}

function draw() 
{
  
  background(200);
  strokeWeight(10);
  rect(0,0,1300,550);
  fill(100);
  for(var j=0;j<allb.length;j++)
  {
  if(pause===0)
  allb[j].move();
  allb[j].disp();
  }
}

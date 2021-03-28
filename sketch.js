//let nb;
//let nb2;
//let nb3;
function getRandom(c){return Math.floor(Math.random()*c);}
r = getRandom(255);
g = getRandom(255);
b = getRandom(255);
let nbarray = [];
// 初始內容
function setup() {
  createCanvas(600, 600, WEBGL); // 決定 使用 3D 方式進行渲染
  detailY = createSlider(5,0,10);
  detailY.position(10, height + 5);
  //detailY.style('width', '80px');
  for(let i=0;i<7;i+=1){
    // 怎麼把東西放到 nbarray 袋子裡面的公式
    nbarray.push(new myBox(50,-height/2+(height/5)*i,0,50));
    //button = createButton('說明');
  //button.position(120, 710);
  //button.mousePressed(changeBG);
  }
  //nb = new myBox(50,50,0,50);
  //nb2 = new myBox(-50,150,0,25);
  //nb3 = new myBox(-150,100,0,50);
  // here we set the element to autoplay
  // The element will play as soon
  // as it is able to do so.
 
  function changeBG() {
  let val = random(100);
  background(val);
}

}
function draw() {
  background(mouseX,mouseY,0);
  push();
  rotateY(millis() / 1000);
  stroke(mouseX,150,mouseY);
  strokeWeight(10); // Beastly
  //line(20, 70, 80, 70);
  noFill(255,255,mouseX,mouseY);
  //sphere(800, 16, detailY.value());
  //torus(30,15);
  pop();
  //cursor('https://piskel-imgstore-b.appspot.com/img/271dbd5c-8ee9-11eb-b935-5d8d3323ed77.gif');
  // 將袋子中 所有 東西 稱為 V 執行他的相關函式
  nbarray.forEach((v)=>{
    /*
    if (mouseIsPressed){
      fill(0,255,0);
    }else{
      fill(255,0,0);
    }
    */
    v.display();
  })
  //nb.display();
  //nb2.display();
  //nb3.display();
}
// 自訂一個類別物件
class myBox{
  // 怎樣建構這個物件 只執行一次
  constructor(x = random(width)-width/2,y = random(height)-height/2,z,size = random(30,50)){
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.mx = 1.5
    this.my = 1.2
    this.cc = color(random(255),random(255),random(255));
    this.rx = (random(0.03,0.07));
    this.ry = (random(0.03,0.07));
    this.rz = (random(0.03,0.07));
    this.stela = new stela(this.x,this.y,this.z,this.size*0.25,this.size);
    this.stela2 = new stela2(this.x,this.y,this.z,this.size*0.25,this.size*1.5);
    this.stela3 = new stela3(this.x,this.y,this.z,this.size*0.25,this.size*2.5);
  }
  // 定義一些能力 我們呼叫時 執行 
  // 能力1:顯現這box
  display(){
    push();
       translate(this.x,this.y);
    //滑鼠於範圍內時方塊放大並加速
    if(mouseX-width/2 > this.x-this.size/2 &&
       mouseX-width/2 < this.x+this.size/2 &&
       mouseY-height/2 > this.y-this.size/2 &&
       mouseY-height/2 < this.y+this.size/2 ){
      this.size = this.size + 2;
      if(this.mx>0){this.mx = this.mx + 0.2;}
      if(this.mx<0){this.mx = this.mx - 0.2;}
      if(this.my>0){this.my = this.my + 0.3;}
      if(this.my<0){this.my = this.my - 0.3;}
    }
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    this.stela.display();
    this.stela2.display();
     this.stela3.display();
    stroke(mouseX,mouseY,600);
      noFill(255);
      torus(30, 15);
    pop();
    this.move();
  }
  //能力2:移動規則
  move(){
    if (this.x>width/2){this.mx = -1*this.mx;}
    if (this.x<-width/2){this.mx = -1*this.mx;}
    this.x = this.x + this.mx;
    if (this.y>height/2){this.my = -1*this.my;}
    if (this.y<-height/2){this.my = -1*this.my;} 
    this.y = this.y + this.my;
  }
}
//衛星一號 球
class stela{
  constructor(x,y,z,size,cdx){
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.cdx = cdx;
  }
  display(){
    push();
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.02);
    rotateZ(frameCount*-0.05);
    translate(this.cdx,0,0);
    stroke(mouseX,mouseY,255);
    noFill(mouseY,mouseX,150);
    sphere(this.size);
    pop();
  }
}
class stela2{
  constructor(x,y,z,size,cdx){
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.cdx = cdx;
  }
  display(){
    push();
    rotateZ(frameCount*-0.05);
    translate(this.cdx,0,0);
    stroke(mouseX,mouseY,100);
    noFill(mouseX,mouseY,150);
    sphere(this.size);
    pop();
  }
}
class stela3{
  constructor(x,y,z,size,cdx){
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.cdx = cdx;
  }
  display(){
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount*-0.1);
    translate(this.cdx,0,0);
    stroke(mouseX,mouseY,50);
    noFill(mouseX,mouseY,255);
    torus(this.size,this.size*1.3);
    pop();
  }
}
function setup()
{
    createCanvas(700,800)
    background(100);
}

function Box(nr,color)
{
    this.color=color;
    this.nr=nr;
}

function printBox(box,row,column)
{

    fill(box.color);
    square(column, row, 55); 
    fill("white");
    textSize(20);
    textAlign(CENTER, CENTER);
    text(box.nr, column, row, 50, 50); 

}

function draw()
{
    printBox(box1,row1,column1)
    printBox(box2,row1,column2)
    printBox(box3,row1,column3)
    printBox(box4,row1,column4)
    printBox(box5,row1,column5)
    printBox(box6,row1,column6)
    printBox(box7,row1,column7)
    printBox(box8,row2,column1)
    printBox(box9,row2,column2)
    printBox(box10,row2,column3)
    printBox(box11,row2,column4)
    printBox(box12,row2,column5)
    printBox(box13,row2,column6)
    printBox(box14,row2,column7)
    printBox(box15,row3,column1)
    printBox(box16,row3,column2)
    printBox(box17,row3,column3)
    printBox(box18,row3,column4)
    printBox(box19,row3,column5)
    printBox(box20,row3,column6)
    printBox(box21,row3,column7)
    printBox(box22,row4,column1)
    printBox(box23,row4,column2)
    printBox(box24,row4,column3)
    printBox(box25,row4,column4)
    printBox(box26,row4,column5)
    printBox(box27,row4,column6)
    printBox(box28,row4,column7)
    

}
const box1 = new Box("1","rgb(0, 0, 0)");
const box2 = new Box("2","rgb(0, 0, 100)");
const box3 = new Box("3","rgb(0, 0, 200)");
const box4 = new Box("4","rgb(0, 0, 255)");

const box5 = new Box("1","rgb(100, 0, 0)");
const box6 = new Box("2","rgb(100, 0, 100)");
const box7 = new Box("3","rgb(100, 0, 200)");
const box8 = new Box("4","rgb(100, 0, 255)");

const box9 = new Box("1","rgb(0, 100, 0)");
const box10 = new Box("2","rgb(0, 100, 100)");
const box11 = new Box("3","rgb(0, 100, 200)");
const box12 = new Box("4","rgb(0, 100, 255)");

const box13 = new Box("1","rgb(200, 0, 0)");
const box14 = new Box("2","rgb(200, 0, 100)");
const box15 = new Box("3","rgb(200, 0, 200)");
const box16 = new Box("4","rgb(200, 0, 255)");

const box17 = new Box("1","rgb(100, 100, 0)");
const box18 = new Box("2","rgb(100, 100, 100)");
const box19 = new Box("3","rgb(100, 100, 200)");
const box20 = new Box("4","rgb(100, 100, 255)");

const box21 = new Box("1","rgb(200, 100, 0)");
const box22 = new Box("2","rgb(200, 100, 100)");
const box23 = new Box("3","rgb(200, 100, 200)");
const box24 = new Box("4","rgb(200, 100, 255)");

const box25 = new Box("1","rgb(200, 200, 0)");
const box26 = new Box("2","rgb(200, 200, 100)");
const box27 = new Box("3","rgb(200, 200, 200)");
const box28 = new Box("4","rgb(200, 200, 255)");

const row1=0;
const row2=60;
const row3=120;
const row4=180;
const column1=0;
const column2=60;
const column3=120;
const column4=180;
const column5=240;
const column6=300;
const column7=360;

 
    
    
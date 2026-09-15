const canvas = document.getElementById("canvasId");
const ctx = canvas.getContext("2d");


let Rook = new Image();
let Knight = new Image();
let Bishop = new Image();
let Queen = new Image();
let King = new Image();
let Pawn = new Image();


Rook.src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Chess_piece_-_White_rook.JPG";
Knight.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCdILrpAkJSpUbNSA-B95ZTFCq6KJv4xXqw&s";
Bishop.src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Chess_bishop_0970.jpg/250px-Chess_bishop_0970.jpg";
Queen.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9x41F1Z57F_nJQ1oAf0McXVpcZ2VRsYP5zQ&s";
King.src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Chess_piece_-_White_king.jpg";
Pawn.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-LvccWrJjlsevRNn9tIloPgG4A-8veVFmA&s";



let BRook=new Image();
let BKnight=new Image();
let BBishop=new Image();
let BQueen=new Image();
let BKing=new Image();
let BPawn=new Image();


BRook.src="https://media.istockphoto.com/id/94192519/photo/rook-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1zVmkyNoOpYqIcADuNqHHuppe7jLK74pNDkewnIfjTI=";
BKnight.src="https://thumbs.dreamstime.com/b/knight-black-chess-piece-6258018.jpg";
BBishop.src="https://www.shutterstock.com/image-photo/elegant-black-chess-bishop-left-600nw-2546579497.jpg";
BQueen.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgiQQH4JyLwyEexG-CfSczZ15fvqE2mb94kQ&s";
BKing.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2vm-13ajS9gbrwuoiz8ceJ1Jvjmir9HFiGw&s";
BPawn.src="https://img.freepik.com/premium-vector/black-chess-piece-pawn-with-highlights-white-background_490191-310.jpg";












let images=[Rook,Knight,Bishop,Queen,King,Pawn];

let BotamImage=[BRook,BKnight,BBishop,BQueen,BKing,BPawn];



const board = {
x:250,
y:65,
width:500,
height:500
};

const cols=8;
const rows=8;

const cellWidth=board.width/cols;
const cellHeight=board.height/rows;




for(let row=0;row<rows;row++){

for(let col=0;col<cols;col++){

let x=board.x + col*cellWidth;
let y=board.y + row*cellHeight;

ctx.fillStyle=(row+col)%2===0?"white":"brown";
ctx.fillRect(x,y,cellWidth,cellHeight);

}

}





function drawPieces(){

let x=board.x;


let firstRow=[Rook,Knight,Bishop,Queen,King,Bishop,Knight,Rook];

for(let i=0;i<8;i++){

ctx.drawImage(firstRow[i],x,board.y,cellWidth,cellHeight);

x+=cellWidth;

}


// pawn row
let pawnY=board.y+cellHeight;
let pawnX=board.x;

for(let i=0;i<8;i++){

ctx.drawImage(Pawn,pawnX,pawnY,cellWidth,cellHeight);
pawnX+=cellWidth;

}

}


// LOAD IMAGES FIRST
function loadImages(arr,callback){

let loaded=0;

arr.forEach(img=>{

if(img.complete){
loaded++;

if(loaded===arr.length) callback();
}
else{
img.onload=()=>{
loaded++;


if(loaded===arr.length) callback();
};

}

});

}



loadImages(images,()=>{
drawPieces();

});



loadImages(BotamImage,()=>{
drawdownPieces();
});















function drawdownPieces(){

    let botamy=board.y+(6*cellHeight);
let x=board.x;


let firstRow=[BRook,BKnight,BBishop,BQueen,BKing,BBishop,BKnight,BRook];






for(let i=0;i<8;i++){

ctx.drawImage(BPawn,x,botamy,cellWidth,cellHeight);
x+=cellWidth;

}



 botamy+=cellHeight;
let pX=board.x;

for(let i=0;i<8;i++){

ctx.drawImage(firstRow[i],pX,botamy,cellWidth,cellHeight);
pX+=cellWidth;

}

}






canvas.addEventListener("click" ,e=>{


    console.log("this is a client x="+e.clientX);
    console.log("this is a client Y="+e.clientY);

     const rect = canvas.getBoundingClientRect();

     console.log(rect);


const x = e.clientX - rect.left;
const y = e.clientY - rect.top;


console.log("this is a X_x ="+x);
console.log("this is a YX="+y);
   
})

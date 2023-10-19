const player=document.querySelector('.header');
const boxes=document.querySelectorAll('.box');
const newGame=document.querySelector('.newGame');



let board=['','','','','','','','',''];

const win=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

let currentPlayer='X';
updatePlayer();

function updatePlayer(){
    if(currentPlayer=='X'){
        player.innerText="Current Player-X";
    }else{
        player.innerText="Current Player-O";
    }
}
function changePlayer(){
    if(currentPlayer=='X'){
        currentPlayer='O';
    }else{
        currentPlayer='X';
    }
    updatePlayer();
}
let ans;
function isWin(){
    
    
    win.forEach((position)=>{
        


        
        if((board[position[0]]!=='' || board[position[1]]!=='' || board[position[2]]!=='' ) &&
        (board[position[0]]===board[position[1]] && board[position[0]]===board[position[2]])){
            
            if(board[position[0]]=='X'){
                ans='X';
                
             
                
            }else{
                ans='O';
            }
            // color change kro unn boxes pr
            boxes[position[0]].style.backgroundColor="green";
            boxes[position[1]].style.backgroundColor="green";
            boxes[position[2]].style.backgroundColor="green";
            
            return true;
        }
        
        
        
    })
    if(ans=='X' || ans=='Y'){
        
        
        return true;
    }
    
    return false;
}
function isDraw(){
    let count=0;
    for(let i=0;i<9;i++){
        if(board[i]!=''){
            count++;
        }
    }
    if(count==9){
        return true;
    }
        return false;
    
}

function updateBoard(index){
    board[index]=currentPlayer; 
    // console.log(board);
    boxes[index].innerText=currentPlayer;
    boxes[index].style.pointerEvents='none';


    if(isWin() ){
        player.innerText=`Winner Player-${ans}`;
        boxes.forEach((box,index)=>{
            boxes[index].style.pointerEvents='none';
        })
        newGame.classList.add('active');
    }else{
        changePlayer();
    }

    if(isDraw()){
        player.innerText="Game tied!";
        newGame.classList.add('active');
    }


    





   
}

boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        updateBoard(index)}
    )
})


function makeDefault(){
    ans='';
    board=['','','','','','','','',''];
    boxes.forEach((box)=>{
        box.innerText="";
        box.style.pointerEvents='initial';
        box.style.backgroundColor='initial'
    });
    currentPlayer='X';
    updatePlayer();
    newGame.classList.remove('active')
}
newGame.addEventListener('click',()=>{
    makeDefault();
})
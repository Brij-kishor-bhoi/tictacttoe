console.log('tic tac toe');

let music=new Audio('music.mp3');
let turnAudio=new Audio('ting.mp3');
let gameOver=new Audio('gameover.mp3');
let turn='x';
let turnText=document.getElementsByClassName('turn');
let isgameover=false;
let reset=document.getElementsByClassName('reset');
let gif=document.getElementsByClassName('image');
// function for turn

const changeTurn=()=>{
    if(turn=='x'){
        return 'o';
    }
    else{
        return 'x';
    }
}

// function for game over

const gameend=()=>{
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    let boxes=document.getElementsByClassName('box');
    // console.log('a')
    wins.forEach(element => {
        if((boxes[element[0]].innerText==boxes[element[1]].innerText) && (boxes[element[1]].innerText==boxes[element[2]].innerText) && boxes[element[0]].innerText!=''){
            isgameover=true;
            turnText[0].innerText=boxes[element[0]].innerText + ' won';
            gif[0].style.width='98px';
        }
        
    });

}

let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(Element=>{
    Element.addEventListener('click',()=>{
        if(Element.innerText==''){
            Element.innerText=turn;
            turnAudio.play();
            turn=changeTurn();
            gameend();
            if(isgameover==false){
                turnText[0].innerText='Turn for '+turn;
            }
            
        }
    })
})

// event for reset button
reset[0].addEventListener('click',()=>{
    let boxes=document.getElementsByClassName('box');
    Array.from(boxes).forEach(e=>{
        e.innerText='';
        isgameover=false;
        turn='x';
        if(isgameover==false){
            turnText[0].innerText='Turn for '+turn;
        }
    })
})

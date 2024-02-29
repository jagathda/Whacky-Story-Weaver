//Array with card objects
const cardArray = [
    {
        name:'1',
        img: 'images/1.jpg'
    },
    {
        name:'2',
        img: 'images/2.jpg'
    },
    {
        name:'3',
        img: 'images/3.jpg'
    },
    {
        name:'4',
        img: 'images/4.jpg'
    },
    {
        name:'5',
        img: 'images/5.jpg'
    },
    {
        name:'6',
        img: 'images/6.jpg'
    },
    {
        name:'1',
        img: 'images/1.0.jpg'
    },
    {
        name:'2',
        img: 'images/2.0.jpg'
    },
    {
        name:'3',
        img: 'images/3.0.jpg'
    },
    {
        name:'4',
        img: 'images/4.0.jpg'
    },
    {
        name:'5',
        img: 'images/5.0.jpg'
    },
    {
        name:'6',
        img: 'images/6.0.jpg'
    }
];

//Function to shuffle array
function shuffleArray(array){
    return array.sort(() => 0.5 - Math.random());
}

//Shuffling array
shuffleArray(cardArray); 

const result = document.querySelector("#result");
const board = document.querySelector("#board");
const resultBoard = document.querySelector("#resultBoard");
const reload = document.querySelector("#reload");
const sound = document.getElementById("#sound");
console.log(sound);

//Function to create game board
function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/cover.jpg');
        card.setAttribute('id', i);
        card.addEventListener('click', flipCard);
        board.appendChild(card); //Appending card 
    }
}

//Function to create result board
// function createResultBoard(){
// } 

createBoard();

let cardsClicked = [];
let cardsClickedId = [];
let cardsMatched = [];

//Function to check matches
function checkForMatch(){

    const cards = document.querySelectorAll('#board img');

    if(cardsClicked[0] == cardsClicked[1]){
        cards[cardsClickedId[0]].setAttribute('src', 'images/matched.jpg');
        cards[cardsClickedId[1]].setAttribute('src', 'images/matched.jpg');
        
        cards[cardsClickedId[0]].removeEventListener('click', flipCard);
        cards[cardsClickedId[1]].removeEventListener('click', flipCard);
    
        cardsMatched.push(cardsClicked);
    }else{
        cards[cardsClickedId[0]].setAttribute('src', 'images/cover.jpg');
        cards[cardsClickedId[1]].setAttribute('src', 'images/cover.jpg');
    }

    cardsClicked = []; //Reinitializing
    cardsClickedId = []; //Reinitializing
    
    //Function to play music
    function playAudio() { 
        sound.play(); 
    }

    if(cardsMatched.length === cardArray.length/2){ //When all cards are matched
        result.textContent = "Time to buckle up for Baby #2";
        reload.textContent = "Try again";
        playAudio();
    }
}

//Function to flip cards
function flipCard(){
    let cardId = this.getAttribute('id');
    
    cardsClicked.push(cardArray[cardId].name);
    cardsClickedId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);

    if(cardsClicked.length === 2){
        setTimeout(checkForMatch, 500); //Wait for 5 seconds
    }
}

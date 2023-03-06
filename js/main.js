// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali

const bigSquareDom = document.getElementById('big-square');
let newButtonDom = document.getElementById('btn');
let blacklistNumber=[];
let score=0;
const scoreDom = document.getElementById('score')

let difficultyDom= document.getElementById('difficulty');



newButtonDom.addEventListener('click',
    function(){
        blacklistNumber=[];
        score=0;
        scoreDom.innerHTML=`Il tuo punteggio è di: ${score}`;
        bigSquareDom.innerHTML='';
        let bombaEsplosa = false;

        for (let c=1; c <= 16; c++ ){
            let numberGenerated = generateUniqueRandomNumber(blacklistNumber, 1, difficultyDom.value);
            blacklistNumber.push(numberGenerated);
            console.log(numberGenerated);
        }
        
        for (let i = 0; i < difficultyDom.value; i++){
            

            const squareCreation = createNewSquare(i+1, difficultyDom.value);
            
            if(blacklistNumber.includes(i+1)){
                squareCreation.classList.add('bomba');
            }
                        
            squareCreation.addEventListener('click',
            
            function(){
                if(bombaEsplosa == false && score < (difficultyDom.value - 16)){
                    
                    if(this.classList.contains('bomba')){
                        this.classList.add('clicked-bomb');
                        let esplose = document.getElementsByClassName('bomba');
                        scoreDom.innerHTML=`Hai perso`;
                        
                        for(let d = 0; d < esplose.length; d++){
                            esplose[d].classList.add('clicked-bomb');                        
                        }

                        bombaEsplosa = true;
                        
                    }else{
                        this.classList.add('clicked');
                        console.log(squareCreation.innerHTML);
                        score += 1;
                        scoreDom.innerHTML=`Il tuo punteggio è di: ${score}`;                        
                    }
                    
                }else if(score == (difficultyDom.value - 16)){
                    
                }else{

                }

            }
            );
            
            bigSquareDom.append(squareCreation);
           
            
        }
        
    }
    );
    
    
    function bombGenerator(number){
        squareNew.classList.add('bomb');
    }
    
let squareNew = '';

function createNewSquare(number, difficultyClass){
    const squareCreation = document.createElement('div');
    squareCreation.classList.add(`d-${difficultyClass}`);
    squareCreation.classList.add('square');
    squareCreation.append(number);

    return squareCreation;
}

function generateRandomNumber(min, max) {
    const number = Math.floor(Math.random() * (max - min +1)) + min;
    return number;
}

function generateUniqueRandomNumber(blacklist, min, max) {

    let isValidNumber = false;
    let randomNumber;

    while (!isValidNumber) {
        randomNumber = generateRandomNumber(min, max);
        if (!blacklist.includes(randomNumber)) {
            isValidNumber = true;
        }
    }

    return randomNumber;
}




console.log(blacklistNumber);

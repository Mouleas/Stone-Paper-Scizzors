let userSelection = 0;

let myscore = 0;
let compscore = 0;

const images = [ 'stone.avif', 'paper.jpg', 'scizzors.png' ]

function changePic(num){
    document.getElementById("userImg").src = "assets/images/"+images[num];
    userSelection = num;
}

function predictWinner(){
    var random  = Math.floor(Math.random() * 3);
    document.getElementById("compImg").src = "assets/images/"+images[random];

    console.log(images[random]+" "+images[userSelection]);
    var result = "You Won😀";
    if (random === userSelection){
        result = "Draw🤝";
    }
    else if (random === 0 && userSelection === 2){
        result = "Computer Wins😪";
        compscore ++;
    }
    else if (random === 1 && userSelection === 0){
        result = "Computer Wins😪";
        compscore ++;
    }
    else if (random === 2 && userSelection === 1){
        result = "Computer Wins😪";
        compscore++;
    }
    else {
        myscore++;
    }
    document.getElementById("compScore").innerText = "💻: "+compscore;
    document.getElementById("myScore").innerText = "🙍‍♂️: "+myscore;
    document.getElementById("result").innerHTML = '<mark>'+result+'</mark>';

}
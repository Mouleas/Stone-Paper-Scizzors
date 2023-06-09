let userSelection = -1;

let myscore = 0;
let compscore = 0;

const images = [ 'stone.avif', 'paper.jpg', 'scizzors.png' ]

function changePic(num){
    document.getElementById("userImg").src = "assets/images/"+images[num];
    userSelection = num;
}

async function predictWinner(){
    if (userSelection === -1){
        document.getElementById("userImg").src = "assets/images/"+images[0];
        userSelection = 0;
    }
    for (var i=0; i < 5; i++){
        document.getElementById("compImg").src = "assets/images/"+images[i%3];
        await new Promise(resolve => setTimeout(resolve, 100));
    }

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
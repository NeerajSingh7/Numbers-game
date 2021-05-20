var playing = false;
var score;
var action;

// on clicking start/reset button
document.getElementById("startreset").onclick = function(){
    // if we are playing
    if(playing == true){
        location.reload();
        

    }
    // if we are not playing
    else{
        // changing to the reset mode
        playing = true;

        // setting score to 0 at start
        score = 0;

        document.getElementById("score-value").innerHTML = score;

        // showing the coundown box
        show("timeremaining");

        // changing the start game button to reset game button
        document.getElementById("startreset").innerHTML = "Reset Game";

        var time = 60;
        // reduce the timer
        startCountdoun(time);
        generateQA();
    }
}


// this will start the countdown
function startCountdoun(time){
    
    // it will hide the game over element
    hide("gameover");

    // setinterval will call itself after one second
    action = setInterval(function(){

        // if time becomes 0 timer will stop
        if(time == 0) {
            clearInterval(action);
            // this will update actual score
            document.getElementById("actualscore").innerHTML = score;

            // this will display game over element
            show("gameover");

            // this will hide the timer
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
        document.getElementById("timeremainingvalue").innerHTML = time--;

    }, 1000);
}


// this function will hide elements with particular ID
function hide(ID){
    document.getElementById(ID).style.display = "none";
}


// this function will show elements with particular ID
function show(ID){
    document.getElementById(ID).style.display = "block";
}


// this function will generate a new question everytime
function generateQA(){
    var firstNo = Math.floor((Math.random() * 100) + 1);
    var secondNo = Math.floor((Math.random() * 100) + 1);
    var operatorIndex = Math.floor((Math.random() * 3) + 1);

    if(operatorIndex == 0) operator = '+';
    else if(operatorIndex == 1) operator = '-';
    else if(operatorIndex == 2) operator = '*';
    else operator = '/';

    document.getElementById("question").innerHTML = firstNo + " " + operator + " " + secondNo;
    var ans;
    switch(operator){
        case '+': ans = firstNo+secondNo;
                break;
        case '-': ans = firstNo-secondNo;
                break;
        case '*': ans = firstNo*secondNo;
                break;
        case '/': ans = firstNo/secondNo;
                break;
    }

    if(!Number.isInteger(ans)){
        ans = ans.toFixed(2);
    }

    var randomAnsIndex = Math.floor((Math.random() * 3) + 1);
    if(randomAnsIndex == 0){
        document.getElementById("box1").innerHTML = ans;
        document.getElementById("box2").innerHTML = Math.floor((Math.random() * 100) + 1);
        document.getElementById("box3").innerHTML = Math.floor((Math.random() * 100) + 1);
        document.getElementById("box4").innerHTML = Math.floor((Math.random() * 100) + 1);
        
    } 
    else if(randomAnsIndex == 1){
        document.getElementById("box2").innerHTML = ans;
        document.getElementById("box1").innerHTML = Math.floor((Math.random() * 100) + 1);
        document.getElementById("box3").innerHTML = Math.floor((Math.random() * 100) + 1);
        document.getElementById("box4").innerHTML = Math.floor((Math.random() * 100) + 1);
    } 
    else if(randomAnsIndex == 2){
        document.getElementById("box3").innerHTML = ans;
        document.getElementById("box1").innerHTML = Math.floor((Math.random() * 100) + 1);
        document.getElementById("box2").innerHTML = Math.floor((Math.random() * 100) + 1);
        document.getElementById("box4").innerHTML = Math.floor((Math.random() * 100) + 1);
    }
    else{
        document.getElementById("box4").innerHTML = ans;
        document.getElementById("box1").innerHTML = Math.floor((Math.random() * 100) + 1);
        document.getElementById("box3").innerHTML = Math.floor((Math.random() * 100) + 1);
        document.getElementById("box2").innerHTML = Math.floor((Math.random() * 100) + 1);
    }

    document.getElementById("box1").onclick = function(){
        var userInput = document.getElementById("box1").innerText; 
        if(ans == userInput){
            score++;
            document.getElementById("score-value").innerHTML = score;
            show("correct");
            setTimeout(function(){
                hide("correct");
            }, 1000);
            generateQA();
        }
        else{
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            }, 1000); 
        }
        
    }

    document.getElementById("box2").onclick = function(){
        var userInput = document.getElementById("box2").innerText; 
        if(ans == userInput){
            score++;
            document.getElementById("score-value").innerHTML = score;
            show("correct");
            setTimeout(function(){
                hide("correct");
            }, 1000);
            generateQA();
        }else{
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            }, 1000); 
        }
        
    }

    document.getElementById("box3").onclick = function(){
        var userInput = document.getElementById("box3").innerText; 
        if(ans == userInput){
            score++;
            document.getElementById("score-value").innerHTML = score;
            show("correct");
            setTimeout(function(){
                hide("correct");
            }, 1000);
            generateQA();
        }
        else{
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            }, 1000); 
        }
        
    }


    document.getElementById("box4").onclick = function(){
        var userInput = document.getElementById("box4").innerText; 
        if(ans == userInput){
            score++;
            document.getElementById("score-value").innerHTML = score;
            show("correct");
            setTimeout(function(){
                hide("correct");
            }, 1000);
            generateQA();
        }
        else{
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            }, 1000); 
        }
        
    }

}

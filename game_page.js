var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;
var number1=0
var number2=0
document.getElementById("player1_name").innerHTML=player1_name + " : ";
document.getElementById("player2_name").innerHTML=player2_name + " : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("playerquestion").innerHTML="Question Turn- " + player1_name;
document.getElementById("playeranswer").innerHTML="Answer Turn- " + player2_name;

function sendword(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    questionword="<h4 id='word_display'> Q. "+number1+" x " + number2 +" </h4>";
    inputBox="<br> Answer: <input id='input_check_box' type='number' >";
    checkButton="<br> <br> <button onclick='check()' class='btn btn-info'> Check </button>";
    row=questionword+inputBox+checkButton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

var questionturn="player1";
var answerturn="player2";
function check(){
    answer=document.getElementById("input_check_box").value;
    console.log(answer);

    if(answer==number1*number2){
        if(answerturn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score
        }
    }

    if(questionturn=="player1"){
        questionturn="player2";
        document.getElementById("playerquestion").innerHTML="Question turn - "+player2_name;
    }

    else{
        questionturn="player1";
        document.getElementById("playerquestion").innerHTML="Question turn - "+player1_name;
    }

    if(answerturn=="player1"){
        answerturn="player2";
        document.getElementById("playeranswer").innerHTML="Answer turn - "+player2_name;
    }

    else{
        answerturn="player1";
        document.getElementById("playeranswer").innerHTML="Answer turn - "+player1_name;
    }

    document.getElementById("output").innerHTML="";
}
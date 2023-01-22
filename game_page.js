player1_name = localStorage.getItem("player1_info");
player2_name = localStorage.getItem("player2_info");
player1score = 0;
player2score = 0;
document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;
document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;
document.getElementById("question_player").innerHTML = "question turn :" + player1_name;
document.getElementById("answer_player").innerHTML = "answer turn :" + player2_name;

function sendnumber() {
    num1 = parseInt(document.getElementById("number1").value);
    num2 = parseInt(document.getElementById("number2").value);
    cproduct = num1*num2;
    question_tag = '<h4>'+ num1 + " x " + num2 +'</h4>';
    input_tag = '<input id="answer" class="form-control" type="number" placeholder="emter asmwer"> <br>';
    
    button_tag  = '<button class="btn btn-success " onclick="check()">check </button> ';
    row = question_tag + input_tag + button_tag;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    

}
question_turn = "p1";
answer_turn = "p2";

function check(){
    user_answer = document.getElementById("answer").value;
    if(cproduct == user_answer){
        if(answer_turn == "p1"){
            player1score = player1score + 1;
            document.getElementById("player1_score").innerHTML = player1score;
    
        }
        else{
            player2score = player2score + 1
            document.getElementById("player2_score").innerHTML = player2score;
        }

    }
    else{
        alert("sorry wrong answer :( , the correct answer is " +  cproduct)
    }
    if(question_turn == "p1"){
        question_turn = "p2";
        answer_turn = "p1";
        document.getElementById("question_player").innerHTML = "question turn :" + player2_name;
        document.getElementById("answer_player").innerHTML = "answer turn :" + player1_name;;
    }

    else{
        question_turn = "p1";
        answer_turn = "p2";
        document.getElementById("question_player").innerHTML = "question turn :" + player1_name;
        document.getElementById("answer_player").innerHTML = "answer turn :" + player2_name;

    }
    document.getElementById("output").innerHTML = "";




}




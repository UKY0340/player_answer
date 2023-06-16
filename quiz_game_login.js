function addUser() 
{
player1_login=document.getElementById("player1_login").value;
player2_login=document.getElementById("player2_login").value;
localStorage.setItem("player1",player1_login);
localStorage.setItem("player2",player2_login);
window.location ="game_page.html";
}
function send()
{
number1= document.getElementById("number1_input").value;
number2= document.getElementById("number2_input").value;
actual_answer = parseInt(number1) * parseInt(number2);
question_number = "<h4>" + number1 + "X"+ number2+"<h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box>'";
check_button ="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("number1_input").value="";
document.getElementById("number2_input").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function check()
{
get_answer = document.getElementById("output").value;
if(get_answer == actual_answer)
{
if(answer_turn == "player_1")
{
update_player1_score = player1_score +1;
document.getElementById("player1_score").innerHTML = update_player1_score;
}
else
{
update_player2_score = player2_score +1;
document.getElementById("player2_score").innerHTML = update_player2_score;


};

};

if(question_turn == "player1")
{

question_turn = "player2"

document.getElementById("player_question").innerHTML = "question Turn -" + player2_name ;
}
else
{
question_turn = "player1"
document.getElementById("player_question").innerHTML = "question Turn -"+ player1_name ;


}

if(answer_turn == "player1")
{

answer_turn = "player2"

document.getElementById("player_answer").innerHTML = "answer Turn -" + player2_name ;
}
else
{
answer_turn = "player1"
document.getElementById("player_answer").innerHTML = "answer Turn -" +player1_name ;


}
















}

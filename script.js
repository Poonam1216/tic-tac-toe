function myfunc(){
    let a1,a2,a3,a4,a5,a6,a7,a8,a9;
    a1 = document.getElementById("a1").value;
    a2 = document.getElementById("a2").value;
    a3 = document.getElementById("a3").value;
    a4 = document.getElementById("a4").value;
    a5 = document.getElementById("a5").value;
    a6 = document.getElementById("a6").value;
    a7 = document.getElementById("a7").value;
    a8 = document.getElementById("a8").value;
    a9 = document.getElementById("a9").value;

    if((a1 == "x" || a1 =="X") && (a2 == "x"|| a2 == "X") &&(a3 == "x" || a3 == "X")){
        document.getElementById("turn").innerHTML =  "Player X won";
        document.getElementById("a4").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;

        window.alert("Player X won the game");
    }
    else if((a1 == "x" || a1 =="X") && (a4 == "x"|| a4 == "X") &&(a7 == "x" || a7 == "X")){
        document.getElementById("turn").innerHTML =  "Player X won";
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;

        window.alert("Player X won the game");
    }
    else if((a7 == "x" || a7 =="X") && (a8 == "x"|| a8 == "X") &&(a9 == "x" || a9 == "X")){
        document.getElementById("turn").innerHTML =  "Player X won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a6").disabled = true;

        window.alert("Player X won the game");
    }
    else if((a3 == "x" || a3 =="X") && (a6 == "x"|| a6 == "X") &&(a9 == "x" || a9 == "X")){
        document.getElementById("turn").innerHTML =  "Player X won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a9").disabled = true;

        window.alert("Player X won the game");
    }
    else if((a1 == "x" || a1 =="X") && (a5 == "x"|| a5 == "X") &&(a9 == "x" || a9 == "X")){
        document.getElementById("turn").innerHTML =  "Player X won";
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a8").disabled = true;

        window.alert("Player X won the game");
    }
    else if((a3 == "x" || a3 =="X") && (a5 == "x"|| a5 == "X") &&(a7 == "x" || a7 == "X")){
        document.getElementById("turn").innerHTML =  "Player X won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;

        window.alert("Player X won the game");
    }
    else if((a2 == "x" || a2 =="X") && (a5 == "x"|| a5 == "X") &&(a8 == "x" || a8 == "X")){
        document.getElementById("turn").innerHTML =  "Player X won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a9").disabled = true;

        window.alert("Player X won the game");
    }
    else if((a4 == "x" || a4 =="X") && (a5 == "x"|| a5 == "X") &&(a6 == "x" || a6 == "X")){
        document.getElementById("turn").innerHTML =  "Player X won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;

        window.alert("Player X won the game");
    }


    // 0 turn
    else  if((a1 == "o" || a1 =="O") && (a2 == "o"|| a2 == "O") &&(a3 == "o" || a3 == "O")){
        document.getElementById("turn").innerHTML =  "Player O won";
        document.getElementById("a4").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;

        window.alert("Player O won the game");
    }
    else if((a1 == "o" || a1 =="O") && (a4 == "o"|| a4 == "O") &&(a7 == "o" || a7 == "O")){
        document.getElementById("turn").innerHTML =  "Player O won";
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;

        window.alert("Player O won the game");
    }
    else if((a7 == "o" || a7 =="O") && (a8 == "o"|| a8 == "O") &&(a9 == "o" || a9 == "O")){
        document.getElementById("turn").innerHTML =  "Player O won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a6").disabled = true;

        window.alert("Player O won the game");
    }
    else if((a3 == "o" || a3 =="O") && (a6 == "o"|| a6 == "O") &&(a9 == "o" || a9 == "O")){
        document.getElementById("turn").innerHTML =  "Player O won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a9").disabled = true;

        window.alert("Player O won the game");
    }
    else if((a1 == "o" || a1 =="O") && (a5 == "o"|| a5 == "O") &&(a9 == "o" || a9 == "O")){
        document.getElementById("turn").innerHTML =  "Player O won";
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a8").disabled = true;

        window.alert("Player O won the game");
    }
    else if((a3 == "o" || a3 =="O") && (a5 == "o"|| a5 == "O") &&(a7 == "o" || a7 == "O")){
        document.getElementById("turn").innerHTML =  "Player O won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;

        window.alert("Player O won the game");
    }
    else if((a2 == "o" || a2 =="O") && (a5 == "o"|| a5 == "O") &&(a8 == "o" || a8 == "O")){
        document.getElementById("turn").innerHTML =  "Player O won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a9").disabled = true;

        window.alert("Player O won the game");
    }
    else if((a4 == "o" || a4 =="O") && (a5 == "o"|| a5 == "O") &&(a6 == "o" || a6 == "O")){
        document.getElementById("turn").innerHTML =  "Player O won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;

        window.alert("Player O won the game");
    }
    else if( (a1 == "X" || a1 == "O")
            && (a2 == "X" || a2 == "O")
            && (a3 == "X" || a3 == "O" )
            && (a4 == "X" || a4 == "O" )
            && (a5 == "X" || a5 == "O" )
            && (a6 == "X" || a6 == "O" )
            && (a7 == "X" || a7 == "O" )
            && (a8 == "X" || a8 == "O" )
            && (a9 == "X" || a9 == "O" )
            ){
                document.getElementById("turn").innerHTML = "MATCH IS TIE";
                window.alert("MATCH IS TIE");
            }
            else{
                if(flag == 1){
                    document.getElementById("turn").innerHTML = "Player X Turn";
                }
                else{
                    document.getElementById("turn").innerHTML = "Player O is Turn";
                }
            }
}

function myfunc2(){
    location.reload();
    document.getElementById("a1").value = "";
    document.getElementById("a2").value = "";
    document.getElementById("a3").value = "";
    document.getElementById("a4").value = "";
    document.getElementById("a5").value = "";
    document.getElementById("a6").value = "";
    document.getElementById("a7").value = "";
    document.getElementById("a8").value = "";
    document.getElementById("a9").value = "";
}

flag = 1;

function myFunction1(){
    if(flag ==1){
        document.getElementById("a1").value = "X";
        document.getElementById("a1").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a1").value = "O";
        document.getElementById("a1").disabled = true;
        flag = 1;
    }
}

function myFunction2(){
    if(flag ==1){
        document.getElementById("a2").value = "X";
        document.getElementById("a2").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a2").value = "O";
        document.getElementById("a2").disabled = true;
        flag = 1;
    }
}

function myFunction3(){
    if(flag ==1){
        document.getElementById("a3").value = "X";
        document.getElementById("a3").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a3").value = "O";
        document.getElementById("a3").disabled = true;
        flag = 1;
    }
}

function myFunction4(){
    if(flag ==1){
        document.getElementById("a4").value = "X";
        document.getElementById("a4").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a4").value = "O";
        document.getElementById("a4").disabled = true;
        flag = 1;
    }
}


function myFunction5(){
    if(flag ==1){
        document.getElementById("a5").value = "X";
        document.getElementById("a5").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a5").value = "O";
        document.getElementById("a5").disabled = true;
        flag = 1;
    }
}


function myFunction6(){
    if(flag ==1){
        document.getElementById("a6").value = "X";
        document.getElementById("a6").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a6").value = "O";
        document.getElementById("a6").disabled = true;
        flag = 1;
    }
}


function myFunction7(){
    if(flag ==1){
        document.getElementById("a7").value = "X";
        document.getElementById("a7").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a7").value = "O";
        document.getElementById("a7").disabled = true;
        flag = 1;
    }
}


function myFunction8(){
    if(flag ==1){
        document.getElementById("a8").value = "X";
        document.getElementById("a8").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a8").value = "O";
        document.getElementById("a8").disabled = true;
        flag = 1;
    }
}


function myFunction9(){
    if(flag ==1){
        document.getElementById("a9").value = "X";
        document.getElementById("a9").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a9").value = "O";
        document.getElementById("a9").disabled = true;
        flag = 1;
    }
}
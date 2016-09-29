" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}

function oneToTen (){
  var output = "oneToTen()<br>";
  output = output + "***Output***<br>";
  for (var i=1; i<=10; i++){
    output = output + i + "<br>";
  }
  display.innerHTML = output;
}

function oddNumbers (){
  var output = "oddNumbers()<br>";
  output = output + "***Output***<br>";
  for (var i=1; i<=20; i++){
    if(i % 2 === 1){
      output = output + i + "<br>";
    }
  }
  display.innerHTML = output;
}

function squares(){
  var output = "squares()<br>";
  output = output + "***Output***<br>";
  for (var i=1; i<=10; i++){
      output = output + Math.pow(i,2) + "<br>";
  }
  display.innerHTML = output;
}

function random4(){
  var output = "random4()<br>";
  output = output + "***Output***<br>";
  for (var i=1; i<=4; i++){
    output = output + Math.floor(Math.random()*10) + "<br>";
  }
  display.innerHTML = output;
}

function even (){
  var output = "even(20)<br>";
  output = output + "***Output***<br>";
  for (var i=1; i<20; i++){
    if(i % 2 == 0){
      output = output + i + "<br>";
    }
  }
  display.innerHTML = output;
}

function powers(){
  var output = "powers(8)<br>";
  output = output + "***Output***<br>";
  for (var i=1; i<=8; i++){
      output = output + Math.pow(2,i) + "<br>";
  }
  display.innerHTML = output;
}

function areWeThereYet (){
  var output = "Arewethereyet?<br>";
  do{
    var yesOrNo = prompt("Are we there yet?");
    output = output + yesOrNo + "<br>";
    if (yesOrNo === "Yes"){
      output = output + "Good!<br>";
    }
    else if (yesOrNo != null){
      output = output + "Arewethereyet?<br>";
    }
  }while(yesOrNo !== "Yes");

  display.innerHTML = output;
}

function triangle(){
  var output = "triangle()<br>";
  output = output + "***Output***<br>";
  for (var i=1;i<=5;i++){
    for(var j=1; j<=i; j++){
      output = output + "* ";
    }
    output = output + "<br>";
  }
  display.innerHTML = output;
}

function tableSquare(){
  var output = "tableSquare()<br>";
  output = output + "***Output***<br>";
  output = output + "A4x4tablesquare<br>";
  for (var i=1;i<=4;i++){

    for(var j=1; j<=4; j++){
      output = output + "|" + j*i;
    }
    output = output + "|<br>";
  }
  display.innerHTML = output;
}


function tableSquares(){
  var output = "tableSquares(6)<br>";
  output = output + "***Output***<br>";
  output = output + "A6x6tablesquare<br>";
  for (var i=1;i<=6;i++){

    for(var j=1; j<=6; j++){
      output = output + "|" + j*i;
    }
    output = output + "|<br>";
  }
  display.innerHTML = output;
}

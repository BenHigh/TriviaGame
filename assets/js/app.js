var quiz = [
  {
    question: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
  },
  {
    question: "How much wood would a wood chuck chuck?",
    answers: {
      a: "if a wood chuck could chuck wood?",
      b: "700 pounds",
      c: "2 dams worth"
    },
    correctAnswer: "b"
  },
  {
    question: "Where is Waldo really?",
    answers: {
      a: "Antarctica",
      b: "Exploring the Pacific Ocean",
      c: "Minding his own business, so stop asking"
      
    },
    correctAnswer: "c"
  },
  {
    question: "Why do we play?",
    answers: {
      a: "To get fucked up!",
      b: "To win the game",
      c: "For fun"
    },
    correctAnswer: "a"
  },
  {
    question: "Who killed Dumbledore?",
    answers: {
      a: "Snape",
      b: "GRRM",
      c: "JK Rowling"
      
    },
    correctAnswer: "b"
  }
];

var qI = 0;

var qTime = 0;

var right = 0;
var wrong = 0;

var intervalId;


function newQ(){
  if(qI >= quiz.length){
    endQuiz();
    return;
  }
  qTime = 20;
  clearInterval(intervalId);
  count();
  intervalId = setInterval(count, 1000);

  $("#timer").css({"display": "block"});
  $("#a").css({"display": "block"});
  $("#b").css({"display": "block"});
  $("#c").css({"display": "block"});
	

	$("#quest").html("<h2>" + quiz[qI].question + "</h2>");
  for(i in quiz[qI].answers){
    console.log(quiz[qI].answers[i]);
    $("#" + i).html("<h2>" + i + ") " + quiz[qI].answers[i] + "</h2>");
  
  }
}

function count() { 
  qTime--;

  if(qTime >= 0){
  	dispTime();
  }
  else {
  	dispTimeout();
  }
 }

function dispTime(){
 	$("#timer").html("<h2>" + qTime + " seconds left to answer..</h2>");
 }

function dispWrong(){
  wrong++;
 	$("#quest").html("<h2>You are wrong, be better.</h2>");
  dispHelp();
 }

function dispRight(){
  right++;
 	$("#quest").html("<h2>You are correct!</h2>");
  dispHelp();
}

function dispTimeout(){
  wrong++;
  $("#quest").html("<h2>Time ran out, be better.</h2>");
  dispHelp();
} 

function dispHelp(){
  clearInterval(intervalId);
  $("#timer").css({"display": "none"});
  $("#a").css({"display": "none"});
  $("#b").css({"display": "none"});
  $("#c").css({"display": "none"});
  qI++;
  intervalId = setInterval(newQ, 2500);
}

function endQuiz(){
  $("#timer").html("<h2>You have completed the quiz!</h2>");
  $("#quest").html("<h2># Correct: " + right + "<br><br># Incorrect: " + wrong + "</h2>");
}

function startQuiz() {
  if(qI < Object.keys(quiz).length){
 		newQ();
    count();
  }
}

$( document ).ready(function() {
  startQuiz();
});
 
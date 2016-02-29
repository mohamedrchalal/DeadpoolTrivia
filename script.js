function startGame(){
  // NHO: like how you structured your data here, maybe a simpler implementation might be an array of question objects
  // i.e.: deadpoolTrivia = [
  //   { question: "What character...?", answerA: "a. Superman", answerB: "b. Batman", correctAnswer: "d. deathstroke"}
  //   { question: "What is deadpools...?", answerA: "a. Guy", answerB: "b. Wade", correctAnswer: "d. Wade Wilson"}
  // ]
  // definitely up to personal preference
  deadpoolTrivia = {
    questions: [
      'What DC comics character is Deadpool similar to?',
      'What is deadpools real name?',
      'What is the government program deadpool was recruited into that made him the way he is?',
      'which Marvel character does deadpool desperately want to be best friends with?',
      'what powers does deadpool have?',
      'who is the only member of the avengers to treat deadpool with respect?',
      'where does the name deadpool come from?',
      'what is deadpools sexual preference?',
      'in the deadpool movie, what is AJAXs real name?',
      'which well known wall does deadpool consistently break?',
      'which country is deadpool from?'
    ],
    answersA: ['a. Superman','a. slade wilson','a. Desert Storm',
    'a. Wolverine','a. regenration','a. wolverine',
    'a. childhood nickname','a. heterosexual','a. thomas',
    'a. great wall of china','a. Mexico'],
    answersB: ['b. batman','b. clark kent','b. CIA',
    'b. colossus','b. quick wit','b. thor',
    'b. pet name','b. homosexual','b. muhammad',
    'b. berlin wall','b. USA'],
    answersC:['c. wonder woman','c. peter parker','c. S.H.I.E.L.D.',
    'c. blackwidow','c. fast reflexes','c. hulk',
    'c. a historical massacre','c. bisexual','c. leroy jenkins',
    'c. vaginal wall','c. UK'],
    answersD: ['d. deathstroke','d. wade wilson','d. weapon X',
    'd. spiderman','d. all of the above','d. captain america',
    'd. a bet','d. omnisexual','d. francis',
    'd. fourth wall','d. Canada'],
    correctAnswers: ['d. deathstroke','d. wade wilson','d. weapon X',
    'd. spiderman','d. all of the above','d. captain america',
    'd. a bet','d. omnisexual','d. francis',
    'd. fourth wall','d. Canada'],
  };
  // NHO: Like how your code is organized! Looks like it would be easy to refactor into a global object!
  score = 0;
  totalScore = 0;
  time = 0;
  i = 0;
  var questions = document.getElementById('questions');
  var answerA = document.getElementById('answerA');
  var answerB = document.getElementById('answerB');
  var answerC = document.getElementById('answerC');
  var answerD = document.getElementById('answerD');
  var TimerStart = document.getElementById('startTimer')
  document.getElementById('score').innerHTML = totalScore;
  document.getElementById('time').innerHTML = time;

  function populateQuestionAnswers(){
    questions.innerHTML = deadpoolTrivia.questions[i];
    answerA.innerHTML = deadpoolTrivia.answersA[i];
    answerB.innerHTML = deadpoolTrivia.answersB[i];
    answerC.innerHTML = deadpoolTrivia.answersC[i];
    answerD.innerHTML = deadpoolTrivia.answersD[i];
  }
  populateQuestionAnswers()

  startTimer = setInterval(Timer,1000);

  function Timer(){
    time++;
    document.getElementById('time').innerHTML = time;
  };

  nextQuestion = function(){
    // NHO: This function seems to being doing a lot, recommend breaking into smaller functions that are called in this function
    if (this.innerHTML == deadpoolTrivia.correctAnswers[i]){
      score++;
      console.log(score,i)
    }
    totalScore = Math.floor((score*10000000)/time); // NHO: I like this feature, very creative!
    i=i+1;
    populateQuestionAnswers();
    document.getElementById('score').innerHTML = totalScore;
    saveScore() // NHO: feel like you want to move this function call down into the check below. i.e after the game is over
    if (i>=deadpoolTrivia.questions.length){
      console.log(score,i);
      clearInterval(startTimer)
      alert('your score is'+ (totalScore) +'!')
      startGame();
    }
  }

  function saveScore(){
    var scoreValue = totalScore;
    localStorage.setItem('text', scoreValue)
    // NHO: awesome job looking into localStorage - would love to see you use this to implement a leaderboard feature in the future!
  }

  eventListening = function(){
    // NHO: would recommend moving `document.querySelectorAll('.answers')` into a variable to avoid repeating this long chain
    for (var j = 0; j < document.querySelectorAll('.answers').length; j++){
      document.querySelectorAll('.answers')[j].addEventListener('click',nextQuestion);
    }
  }
}
startGame();
eventListening();

// NHO: overall, good, well organized, clean code!
  // some things to consider in the future:
    // avoid global variables where possible
    // use input and output with functions to avoid accessing variables outside local scope
    // Object Oriented approach
// nice job on this project!

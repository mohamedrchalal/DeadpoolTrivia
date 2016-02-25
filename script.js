function startGame(){
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
    if (this.innerHTML == deadpoolTrivia.correctAnswers[i]){
      score++;
      console.log(score,i)
    }
    totalScore = Math.floor((score*10000000)/time);
    i=i+1;
    populateQuestionAnswers();
    document.getElementById('score').innerHTML = totalScore;
    saveScore()
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
}

  eventListening = function(){
    for (j=0;j<document.querySelectorAll('.answers').length;j++){
      document.querySelectorAll('.answers')[j].addEventListener('click',nextQuestion);
    }
  }
}
startGame();
eventListening();

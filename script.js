function startGame(){
  var deadpoolTrivia = {
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

      var score = 0;
      var totalScore = 0;
      var time = 0;
      var i = 0;
      var questions = $('#questions');
      var answerA = $('#answerA');
      var answerB = $('#answerB');
      var answerC = $('#answerC');
      var answerD = $('#answerD');
      var TimerStart = $('#startTimer')
      function scoreUpdate(){
      $('#score').html(totalScore);
    };
      scoreUpdate();
      function timeUpdate(){
        $('#time').html(time);
      };
      timeUpdate();


  function populateQuestionAnswers(){
    questions.html(deadpoolTrivia.questions[i]);
    answerA.html(deadpoolTrivia.answersA[i]);
    answerB.html(deadpoolTrivia.answersB[i]);
    answerC.html(deadpoolTrivia.answersC[i]);
    answerD.html(deadpoolTrivia.answersD[i]);
  }
  populateQuestionAnswers()

  var startTimer = setInterval(Timer,1000);

  function Timer(){
    time++;
    timeUpdate();
  };

  nextQuestion = function(){
    if (this.innerHTML == deadpoolTrivia.correctAnswers[i]){
      score++;
    }
    totalScore = Math.floor((score*10000000)/time);
    i++;
    populateQuestionAnswers();
    scoreUpdate();
    // saveScore();
    if (i>=deadpoolTrivia.questions.length){
      clearInterval(startTimer)
      alert('your score is'+ (totalScore) +'!')
      startGame();
    }
  }

// function saveScore(){
//   var scoreValue = totalScore;
//   localStorage.setItem('text', scoreValue)
// }

eventListening = function(){
    for (j=0;j<$('.answers').length;j++){
      $('.answers').eq(j).on('click',nextQuestion);
    }
  }
}
startGame();
eventListening();

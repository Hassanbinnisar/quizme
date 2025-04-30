var questions = [
    {
      question: "What does HTML stand for?",
      option1: "Hyperlinks and Text Markup Language",
      option2: "Hypertext Markup Language",
      option3: "Home Tool Markup Language",
      correctOption: "Hypertext Markup Language",
    },
    {
      question: "Who is making the Web standards?",
      option1: "Google",
      option2: "The World Wide Web Consortium",
      option3: "Microsoft",
      correctOption: "The World Wide Web Consortium",
    },
    {
      question: "Choose the correct HTML element for the largest heading:",
      option1: "<heading>",
      option2: "<h6>",
      option3: "<h1>",
      correctOption: "<h1>",
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      option1: "<break>",
      option2: "<br>",
      option3: "<lb>",
      correctOption: "<br>",
    },
    {
      question: "What does CSS stand for?",
      option1: "Creative Style Sheets",
      option2: "Cascading Style Sheets",
      option3: "Computer Style Sheets",
      correctOption: "Cascading Style Sheets",
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      option1: "style",
      option2: "font",
      option3: "class",
      correctOption: "style",
    },
    {
      question: "Which is the correct CSS syntax?",
      option1: "body {color: black;}",
      option2: "{body;color:black;}",
      option3: "body:color=black;",
      correctOption: "body {color: black;}",
    },
    {
      question: "How do you add a comment in CSS?",
      option1: "// this is a comment",
      option2: "<!-- this is a comment -->",
      option3: "/* this is a comment */",
      correctOption: "/* this is a comment */",
    },
    {
      question: "Which property is used to change the background color?",
      option1: "bgcolor",
      option2: "background-color",
      option3: "color",
      correctOption: "background-color",
    },
    {
      question: "How do you select an element with id 'demo'?",
      option1: "#demo",
      option2: ".demo",
      option3: "*demo",
      correctOption: "#demo",
    },
    
  ];
  
  var htmlques = document.getElementById('ques');
  var htmlopt1 = document.getElementById('opt1');
  var htmlopt2 = document.getElementById('opt2');
  var htmlopt3 = document.getElementById('opt3');
  
  var index = 0;
  var score = 0;
  
  var getBtn = document.getElementById('btn');
  
  function nextQuestion() {
    if (index >= questions.length) {
      Swal.fire({
        title: "Quiz Finished!",
        html: `<h3>You scored ${score} out of ${questions.length}</h3>`,
        icon: "success",
        confirmButtonText: "Try Again 🔁",
        confirmButtonColor: "#00ffd5"
      }).then(() => {
        index = 0;
        score = 0;
        nextQuestion();
      });
      return;
    }
  
    var current = questions[index];
    htmlques.innerText = current.question;
    htmlopt1.innerText = current.option1;
    htmlopt2.innerText = current.option2;
    htmlopt3.innerText = current.option3;
  
    document.getElementById('inp1').value = current.option1;
    document.getElementById('inp2').value = current.option2;
    document.getElementById('inp3').value = current.option3;
  
    document.getElementById('inp1').checked = false;
    document.getElementById('inp2').checked = false;
    document.getElementById('inp3').checked = false;
  
    getBtn.disabled = true;
  }
  
  function btnWork() {
    getBtn.disabled = false;
  }
  
  function checkAnswer() {
    var selected = document.querySelector('input[name="answer"]:checked');
  
    if (selected) {
      var userAnswer = selected.value;
      if (userAnswer === questions[index].correctOption) {
        score++;
      }
    }
  
    index++;
    nextQuestion();
  }
  
  nextQuestion();
  
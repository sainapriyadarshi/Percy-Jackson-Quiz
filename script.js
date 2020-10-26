//const quizContainer   = document.getElementById('quiz');
// const submitButton    = document.getElementById('submit');
// const resultContainer = document.getElementById('results');

const questions = [
    {
        question: "What color is the sky?",
        answers: {
            a: "Red",
            b: "Green",
            c: "Blue"
        },
        correct: "c"
    },
    {
        question: "What color is the earth?",
        answers: {
            a: "Red",
            b: "Green",
            c: "Blue"
        },
        correct: "b"
    }
]

function buildQuiz() {
    let quizContainer = document.getElementById('quiz');
    //var store html output
    let output = [];
    
    //loop through each question
    questions.forEach(
        (currentQuestion, questionNumber) => {
            //store all possible answers
            let answers = [];
            //add buttons for each answers
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            //add selected answer to output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
        
    //write things to the document
    quizContainer.innerHTML = output.join();
}

function showResults() {
  let quizContainer = document.getElementById('quiz');

  let answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;
  questions.forEach(
        (currentQuestion, questionNumber) => {
            //check to see if user gets correct answer
            let answerContainer = answerContainers[questionNumber];
            let selector = `input[name=question${questionNumber}]:checked`;
            let userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correct) {
                numCorrect++;
                answerContainer.style.color ='green';
            }
            else {
                answerContainer.style.color = 'red';
            }
        }
    );

  let numIncorrect = answerContainers.length - numCorrect;

  //past this line
  //add results to the html doc
  document.getElementById('results').innerHTML = `${numCorrect} out of ${answerContainers.length}`;

}

buildQuiz();
document.getElementById('submit').addEventListener('click', showResults)
// Function Question constructor
function Question(question, answers, correct) {
    this.question = question,
    this.answers = answers,
    this.correct = correct,
    this.show = function(){
        console.log(this.question);
        for (var answer in this.answers){
            console.log(this.answers[answer]);
        };
    this.prompt = function(){
        var input = prompt('Please input the answer');
        if (input == this.correct) {
            console.log("Hello " + answers[input - 1]);
        } else {
            console.log("The answer is wrong!");
        }
    }    
    }
}

var Q1_question = 'Who r u?';
var Q1_answers = ['1. Jonathan', '2. Nancy', '3. Mike', '4. Eleven', '5. Lucas']
var Q1_correct = 1
var Q1 = new Question(Q1_question, Q1_answers, Q1_correct);

var Q2_question = "What TV shows are you looking?";
var Q2_answers = ['1. Game of Thrones', '2. Stranger Things', '3. Better Call Saul']
var Q2_corret = 2
var Q2 = new Question(Q2_question, Q2_answers, Q2_corret);

var QA = [Q1, Q2];
var random = Math.floor(Math.random() * 2);
var a = QA[random]
a.show();
a.prompt();

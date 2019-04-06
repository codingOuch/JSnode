var John_first_score = 89;
var John_second_score = 120;
var John_third_score = 103;

var Mike_first_score = 116;
var Mike_second_score = 94;
var Mike_third_score = 123;

var Mary_first_score = 97;
var Mary_second_score = 134;
var Mary_third_score = 105;

// var avg_John = (John_first_score + John_second_score + John_third_score) / 3;
// var avg_Mike = (Mike_first_score + Mike_second_score + Mike_third_score) / 3;
// var avg_Mary = (Mary_first_score + Mary_second_score + Mary_third_score) / 3;

var avg_John = 113;
var avg_Mike = 115;
var avg_Mary = 114;

function score() {
    console.log("John's team's average score is %f", avg_John);
    console.log("Mike's team's average score is %f", avg_Mike);
    console.log("Mary's team's average score is %f", avg_Mary);
}

if ((avg_John > avg_Mike) && (avg_John > avg_Mary)) {
    score();
    console.log("The winner is John's team!");
} else if((avg_John == avg_Mike) && (avg_Mike == avg_Mary)){
    score();
    console.log("Draw!")
} else if((avg_Mike > avg_John) && (avg_Mike > avg_Mary)){
    score();
    console.log("The winner is Mike's team!")
} else if((avg_John == avg_Mike) && (avg_John > avg_Mary)){
    score();
    console.log("The winner is John & Mike's team!")
} else if((avg_John == avg_Mary) && (avg_John > avg_Mike)){
    score();
    console.log("The winner is John & Mary's team!")
} else if((avg_Mike == avg_Mary) && (avg_Mike > avg_John)){
    score();
    console.log("The winner is Mike & Mary's team!")
} else{
    console.log("John's team's average score is %f", avg_John);
    console.log("Mike's team's average score is %f", avg_Mike);
    console.log("Mary's team's average score is %f", avg_Mary);
    console.log("The winner is Mary's team!")
}

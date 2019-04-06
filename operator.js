var Mark_height = 1.69;
var Mark_mass = 78;
var John_height = 1.95;
var John_mass = 92;

var BMI_Mark = Mark_mass / (Math.pow(Mark_height, 2));
var BMI_John = John_mass / (Math.pow(John_height, 2));

{
    let comparison;
    if (BMI_Mark > BMI_John) {
        comparison = true
    }
    else{
        comparison = false
    }
    
    console.log("Mark's BMI is %f, John's BMI is %f", BMI_Mark, BMI_John)
    console.log("Is Mark's BMI higher than John's? "+ comparison)
}

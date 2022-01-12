$("#calc").click(function calculategrade() {
    //Define variables, get them using jquery
    let assignment = $("#assignments").val();
    let group = $("#groups").val();
    let quiz = $("#quizzes").val();
    let exam = $("#exams").val();
    let intex = $("#intex").val();
    let assignmentw = assignment * .55;
    let groupw = group * .05;
    let quizw = quiz * .1;
    let examw = exam * .2;
    let intexw = intex * .1;
    let lettergrade = ''

    //Totaling the variables
    let totalp = assignmentw + groupw + quizw + examw + intexw;

    //Determine Letter Grade
    if (totalp >= 94) {
        lettergrade = "A";
    }
    else if (totalp < 94 && totalp >= 90) {
        lettergrade = "A-";
    }
    else if (totalp < 90 && totalp >= 87) {
        lettergrade = "B+";
    }
    else if (totalp < 87 && totalp >= 84) {
        lettergrade = "B";
    }
    else if (totalp < 84 && totalp >= 80) {
        lettergrade = "B-";
    }
    else if (totalp < 80 && totalp >= 77) {
        lettergrade = "C+";
    }
    else if (totalp < 77 && totalp >= 74) {
        lettergrade = "C";
    }
    else if (totalp < 74 && totalp >= 70) {
        lettergrade = "C-";
    }
    else if (totalp < 70 && totalp >= 67) {
        lettergrade = "D+";
    }
    else if (totalp < 67 && totalp >= 64) {
        lettergrade = "D";
    }
    else if (totalp < 64 && totalp >= 60) {
        lettergrade = "D-";
    }
    else {
        lettergrade = "E";
    }

    //Alert calculation
    alert("Total Percentage: " + totalp + "\n" + "Letter Grade: " + lettergrade);

});
$(document).ready(function(){
    $("#submit").click(function(){
        $(".pop-up").toggle();
        let name = $("#name").val();
        let section = $("#section").val();
        let question1 = document.getElementsByName('q1');
        let question2 = document.getElementsByName('q2');
        let question3 = document.getElementsByName('q3');
        let question4 = document.getElementsByName('q4');
        let question5 = document.getElementsByName('q5');
        let question6 = document.getElementsByName('q6');
        let question7 = document.getElementsByName('q7');
        let question8 = document.getElementsByName('q8');
        let question9 = document.getElementsByName('q9');
        let question10 = document.getElementsByName('q10');

        sum = 0;

        for (let radio of question1) {
            if (radio.checked) {
                sum+=parseInt(radio.value);
            }
        }
        for (let radio of question2) {
            if (radio.checked) {
                sum+=parseInt(radio.value);
            }
        }
        for (let radio of question3) {
            if (radio.checked) {
                sum+=parseInt(radio.value);
            }
        }
        for (let radio of question4) {
            if (radio.checked) {
                sum+=parseInt(radio.value);
            }
        }
        for (let radio of question5) {
            if (radio.checked) {
                sum+=parseInt(radio.value);
            }
        }
        for (let radio of question6) {
            if (radio.checked) {
                sum+=parseInt(radio.value);
            }
        }
        for (let radio of question7) {
            if (radio.checked) {
                sum+=parseInt(radio.value);
            }
        }
        for (let radio of question8) {
            if (radio.checked) {
                sum+=parseInt(radio.value);
            }
        }
        for (let radio of question9) {
            if (radio.checked) {
                sum+=parseInt(radio.value);
            }
        }
        for (let radio of question10) {
            if (radio.checked) {
                sum+=parseInt(radio.value);
            }
        }
        console.log(sum);
        let h1 = $("<h1></h1>").text(name);
        let h3 = $("<h3></h3>").text(section);
        let rem = $("#remove");

        rem.after(h3);
        rem.after(h1);
        $("#score-span").html(sum);
    });
    $("#remove").click(function(){
        $(".pop-up").toggle();
    });
});
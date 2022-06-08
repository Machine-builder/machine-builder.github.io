

var letters = 'abcdefghijklmnopqrstuvwxyz';
var real_answer = NaN;
var streak = 0;

function buttonOptionClicked(event) {
    if (event != -1) {
        var target = event.target;
        var option_clicked = parseInt(target.parentNode.id[14])-1;
        console.log(option_clicked);
        
        var guessed_answer = target.innerText.toLowerCase();
        if (letters.includes(guessed_answer)) {
            console.log(guessed_answer);
            if (guessed_answer == real_answer) {
                alert("Correct!");
                streak += 1;
            } else {
                alert("Incorrect.\nCorrect answer was: "+real_answer);
                streak = 0;
            }
        }
    }

    // randomize the next answer
    real_answer = letters[Math.floor(Math.random() * letters.length)];

    var chosen_letters = [];
    for (var i=0; i<4; i++) {
        var button_parent_id = "letter_option_"+String(i+1);
        var button_element = document.getElementById(button_parent_id).childNodes[1];
        while (true) {
            var this_button_choice = letters[Math.floor(Math.random() * letters.length)];
            if (chosen_letters.includes(this_button_choice)) {
                continue;
            }
            if (this_button_choice == real_answer) {
                continue
            }
            break;
        }
        chosen_letters.push(this_button_choice);
        button_element.innerText = this_button_choice.toUpperCase();
    };

    var i = Math.floor(Math.random() * 4);
    var button_parent_id = "letter_option_"+String(i+1);
    var button_element = document.getElementById(button_parent_id).childNodes[1];
    button_element.innerText = real_answer.toUpperCase();

    document.getElementById("guessing_letter").setAttribute("src", "./letters/"+real_answer+".jpg");

    document.getElementById("streak_text").innerText = "Your current streak: "+String(streak);
}

window.onload = function() {
    buttonOptionClicked(-1)
}
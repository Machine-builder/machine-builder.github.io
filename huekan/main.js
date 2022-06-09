var letters = 'abcdefghijklmnopqrstuvwxyz';
var real_answer = NaN;
var real_answer_symbol = NaN;
var streak = 0;
var streak_2 = 0;

function buttonOptionClickedSymbol(event) {
    if (event != -1) {
        var target = event.target;
        var option_clicked = parseInt(target.parentNode.id[14])-1;
        console.log(option_clicked);
        
        var image_src = String(target.src).split(".jpg",1)[0];
        var image_letter = image_src[image_src.length-1];
        var guessed_answer = image_letter.toLowerCase();
        if (letters.includes(guessed_answer)) {
            console.log(guessed_answer);
            if (guessed_answer == real_answer_symbol) {
                alert("Correct!");
                streak_2 += 1;
            } else {
                alert("Incorrect.");
                streak_2 = 0;
            }
        }
    }

    // randomize the next answer
    real_answer_symbol = letters[Math.floor(Math.random() * letters.length)];

    var chosen_letters = [];
    for (var i=0; i<4; i++) {
        var img_parent_id = "symbol_option_"+String(i+1);
        var img_element = document.getElementById(img_parent_id).childNodes[1];
        while (true) {
            var this_img_choice = letters[Math.floor(Math.random() * letters.length)];
            if (chosen_letters.includes(this_img_choice)) {
                continue;
            }
            if (this_img_choice == real_answer_symbol) {
                continue
            }
            break;
        }
        chosen_letters.push(this_img_choice);
        img_element.src = "./letters/"+this_img_choice+".jpg";
    };

    var elem = document.getElementById("guessing_symbol");
    elem.innerText = real_answer_symbol.toUpperCase();

    var i = Math.floor(Math.random() * 4);
    var img_parent_id = "symbol_option_"+String(i+1);
    var img_element = document.getElementById(img_parent_id).childNodes[1];
    img_element.src = "./letters/"+real_answer_symbol+".jpg";

    document.getElementById("streak_text_2").innerText = "Your current streak: "+String(streak_2);



}

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
    buttonOptionClicked(-1);
    buttonOptionClickedSymbol(-1);
}
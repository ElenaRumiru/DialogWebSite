const wrapper = document.querySelector('.wrapper');

const div = document.createElement('div');
div.className = "start_menu";
div.id = 'quiz';



const divQuestion = document.createElement('div');
divQuestion.className = "start_question";
const divAnswer = document.createElement('div');
divAnswer.className = "start_answer";

const text = document.createElement('p');
text.className = "question";

const button1 = document.createElement('button');
button1.className = "answer_btn answer_btn1";
const button2 = document.createElement('button');
button2.className = "answer_btn answer_btn2";
const button3 = document.createElement('button');
button3.className = "answer_btn answer_btn3";
const button4 = document.createElement('button');
button4.className = "answer_btn answer_btn4";

// function createDiv (cl) {
//     const div = document.createElement('div');
//     div.className = cl;

function create1question () {
    wrapper.appendChild(div);
    div.appendChild(divQuestion);
    divQuestion.appendChild(text);
    text.textContent = "Choose language"
    div.appendChild(divAnswer);
    button1.textContent = "English";
    divAnswer.appendChild(button1);
    button2.textContent = "Русский";
    divAnswer.appendChild(button2);
};

function check1question () {
    let btn1 = document.querySelector('.answer_btn1');
    let btn2 = document.querySelector('.answer_btn2');
    btn2.addEventListener("click", function() {
        let quiz = document.getElementById("quiz");
        quiz.remove();
        btn1.remove();
        btn2.remove();
        create2question();
    });
};


function create2question () {
    wrapper.appendChild(div);
    div.appendChild(divQuestion);
    divQuestion.appendChild(text);
    text.textContent = "Выберите пол"
    div.appendChild(divAnswer);
    button3.textContent = "Женский";
    divAnswer.appendChild(button3);
    button4.textContent = "Мужской";
    divAnswer.appendChild(button4);
};

function createPlayer () {
    create1question();
    check1question();
    
};

createPlayer();

// Закончила на чек 2 вопроса


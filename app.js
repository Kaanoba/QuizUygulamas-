
let formSent = document.querySelector('#questionForm');
let result = document.querySelector('.result');
let correctAnswers = ['-6','-60', '30', '-5'];
let button = document.querySelector('#button');
let successMessage = document.querySelector('#successMessage');
let nextQuiz = document.querySelector('#nextQuiz');

formSent.addEventListener('submit', e => {
    e.preventDefault()

    let score = 0;
    let userAnswers = [formSent.q1.value,formSent.q2.value,formSent.q3.value,formSent.q4.value];
    userAnswers.forEach((answer, key) => {
        if (answer === correctAnswers[key]){
            score += 25;
        }

    })

    result.classList.remove('d-none');

    let point = 0;
    const set = setInterval(() => {
        result.querySelector('span').textContent = `${point}%`
        if (point === score){
            clearInterval(set);
        } else {
            point++;
        }
    }, 10)

    if (score === 100){
        successMessage.classList.remove('d-none');
        button.setAttribute('disabled', 'disabled')
        nextQuiz.classList.remove('d-none')
    }



})

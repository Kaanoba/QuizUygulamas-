

let form = document.querySelector('.question-form');
let arr = ['e', 'e', 'e', 'e'];

let result = document.querySelector('.result');

form.addEventListener('submit', event => {

    event.preventDefault();

    let score = 0;
    let userAnswers = [form.q1.value, form.q2.value,form.q3.value,form.q4.value];
    userAnswers.forEach((answer, index) => {
        if (answer === arr[index]){
            score += 25
        }

    })
    /*console.log(score)*/

    result.classList.remove('d-none');

    let point = 0;
    const set = setInterval(() => {
        result.querySelector('span').textContent = `${point}%`
        if (point === score){
            clearInterval(set);
        } else {
            point++;
        }
    }, 5)
} )
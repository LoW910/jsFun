// using selectors inside the element

    const questions = document.querySelectorAll('.question');
    
    // loops through each question finds btn adds event listener
    questions.forEach(function(question) {
        console.log(question, 'question');
        const btn = question.querySelector('.question-btn')
        console.log(btn, 'button');


        btn.addEventListener('click', function(e) {

            // closes other opened questions
            questions.forEach(function(q) {
                if (q !== question) {
                    q.classList.remove('show-text');
                }
            })

            // opens clicked question
            question.classList.toggle('show-text')
        })
    })














// traversing the DOM

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     })
// })
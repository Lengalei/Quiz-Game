const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffleQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex +=1
    setNextQuestion()
})
function startGame() {
    // console.log('started')
    startButton.classList.add('hide')
    shuffleQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}   
function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}
function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState(){
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        question: 'Who was the brother of Jacob?',
        answers: [
            {text:'Lot', correct:false},
            {text:'John', correct:false},
            {text:'Esau', correct:true},
            {text:'Isaac', correct:false}
        ]
    },
    {
        question: 'Abraham died at what age?',
        answers: [
            {text:'900', correct:false},
            {text:'150', correct:false},
            {text:'120', correct:true},
            {text:'90', correct:false}
        ]
    },
    {
        question: 'Who saw the burning bush?',
        answers: [
            {text:'Paul', correct:false},
            {text:'Sarah', correct:false},
            {text:'Moses', correct:true},
            {text:'Jesus', correct:false}
        ]
    },
    {
        question: 'Whose wife turned into a pile of salt',
        answers: [
            {text:'Lot', correct:true},
            {text:'Sarah', correct:false},
            {text:'David', correct:false},
            {text:'Esau', correct:false}
        ]
    },
    {
        question: 'Who is the son of Abraham?',
        answers: [
            {text:'Lot', correct:false},
            {text:'Sarah', correct:false},
            {text:'Isaac', correct:true},
            {text:'Esau', correct:false}
        ]
    },
]
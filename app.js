const test = {
    title: "Random",
    questions: [
        {
            text: "Who is the strongest?",
            order: 1,
            answers: [
                "Superman - right answer",
                "The Terminator",
                "Waluigi, obviously"
            ]
        },
        {
            text: "What is the best site ever created?",
            order: 2,
            answers: [
                "SitePoint - right answer",
                "Simple Steps Code",
                "Trick question; they're both the best"
            ]
        },
        {
            text: "Where is Waldo really?",
            order: 3,
            answers: [
                "Antarctica - right answer",
                "Exploring the Pacific Ocean",
                "Sitting in a tree",
                "Minding his own business, so stop asking"
            ]
        }
    ]
};

new Vue({
    el: '#app',
    data: {
        test: test,
        testIsRunning: false,
        index: 0,
        testSize: 0,
        nextDisabled: false,
        prevDisabled: true,
        responses: null
    },
    methods: {
        startTest: function () {
            this.testIsRunning = true;
            this.testSize = this.test.questions.length;
            this.responses = new Array(this.testSize);
        },
        next: function () {
            this.index++;
            if (this.index >= 0 && this.index < this.testSize - 1 ) { this.prevDisabled = false; }
            else { this.nextDisabled = true; }
        },
        prev: function () {
            this.index--;
            this.prevDisabled = this.index > 0 ? false : true;
            if (!this.prevDisabled) { this.nextDisabled = false; }
        },
        getCurrentQuestion: function() { return this.test.questions[this.index]; },
        getRightAnswerForCurrentQuestion: function() {
            let currentQuestion = this.test.questions[this.index];
            return currentQuestion.answers[0];
        },
        chooseAnswer: function(answer) {
            console.log(answer, " selected");
            let rightAnswer = this.getRightAnswerForCurrentQuestion();
            if (rightAnswer === answer) {
                this.responses[this.index] = true;
                console.log("Right answer selected");
                console.log(this.responses);
            } else {
                this.responses[this.index] = false;
                console.log(this.responses);
            }
        },
        answerSelected: function() {
            return true;
        }
    },
    computed: {
        currentQuestionText: function() { return this.getCurrentQuestion().text; },
        currentQuestionAnswers: function() {
            const answers = Object.assign([], this.getCurrentQuestion().answers);
            const randomizedAnswers = answers.sort(function() { return 0.5 - Math.random() });
            return randomizedAnswers;
        }
    }
});
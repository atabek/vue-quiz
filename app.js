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
        checkDisabled: false,
        prevDisabled: true,
        responses: [],
        selected: null,
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
        getCurrentQuestion: function() { return this.test.questions[this.currentIndex()]; },
        getRightAnswerForCurrentQuestion: function() {
            let currentQuestion = this.test.questions[this.currentIndex()];
            return currentQuestion.answers[0];
        },
        chooseAnswer: function(answer) {
            let rightAnswer = this.getRightAnswerForCurrentQuestion();
            let index = this.currentIndex();
            if (this.responses[index]) {
                console.log(this.responses[index][index])
            }
            let newResponse = {};
            newResponse[index] = answer;
            if (rightAnswer === answer) {
                this.responses[index] = newResponse;
                console.log(this.responses);
            } else {
                this.responses[index] = newResponse;
                console.log(this.responses);
            }
            return answer;
        },
        currentIndex: function() {
            return this.index;
        },
        getUserResponseForCurrentQuestion: function() {
            let index = this.currentIndex();
            return this.responses[index] ? this.responses[index][index] : null;
        }
    },
    computed: {
        currentQuestionText: function() { return this.getCurrentQuestion().text; },
        currentQuestionAnswers: function() {
            const answers = Object.assign([], this.getCurrentQuestion().answers);
            const randomizedAnswers = answers.sort(function() { return 0.5 - Math.random() });
            return randomizedAnswers;
        },
    }
});
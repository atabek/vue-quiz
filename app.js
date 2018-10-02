const test = {
    title: "Random",
    questions: [
        {
            text: "Who is the strongest?",
            answers: [
                "Superman",
                "The Terminator",
                "Waluigi, obviously"
            ]
        },
        {
            text: "What is the best site ever created?",
            answers: [
                "SitePoint",
                "Simple Steps Code",
                "Trick question; they're both the best"
            ]
        },
        {
            text: "Where is Waldo really?",
            answers: [
                "Antarctica",
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
    },
    methods: {
        startTest: function () {
            this.testIsRunning = true;
            this.testSize = this.test.questions.length;
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
        chooseAnswer: function(answer) {
            console.log(answer + " selected");
        }
    },
    computed: {
        currentQuestionText: function() { return this.getCurrentQuestion().text; },
        currentQuestionAnswers: function() {
            return this.getCurrentQuestion().answers.sort(function() { return 0.5 - Math.random() });
        }
    }
});
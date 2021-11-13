


var stary = document.getElementById("start-btn");
var startEl = document.getElementById("start");
var quiz = document.getElementById("quiz");
var panelEl = document.getElementById("panel");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");
var lastQuestion = 19;
var runningQuestion = 0;
var count = 0;
var questionTime = 15;
var gaugeWidth = 150;
var gaugeUnit = gaugeWidth / questionTime;
let TIMER;
var score=0;


var Quesions = [
    {
        id:0,
        q : "JavaScript is what type of language?",
        a:[
            {text: "Object-Oriented", isCorrect: false},
            {text: "Object-Based", isCorrect: true},
            {text: "Assembly-language", isCorrect: false},
            {text: "High-level", isCorrect: false}
        ]

    },
    {
        id:1,
        q: "JS stansd for ___?", 
        a:[
            {text: "Just Saying", isCorrect: false},
            {text: "Java Server", isCorrect: false},
            {text: "Java Script", isCorrect: true},
            {text: "None of the Above", isCorrect: false},
        ]
    },
    {
        id:2,
        q : "Why so JavaScript and Java have similar name?",
        a:[
            {text: "JavaScript's syntax is loosely based on Java's", isCorrect: true},
            {text: "JavaScript is a stripped-down version of Java", isCorrect: false},
            {text: "They both originated on the island of Java", isCorrect: false},
            {text: "None of the above", isCorrect: false}
        ]
    },
    {
        id:3,
        q : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        a:[
            {text: "The Web server", isCorrect: false},
            {text: "A central machine deep within Netscape's corporate offices", isCorrect: false},
            {text: "The Website's", isCorrect: false},
            {text: "The User's machine running a Web browser", isCorrect: true}
        ]
    },
    {
        id:4,
        q : "______ JavaScript is also called client-side JavaScript.",
        a:[
            {text: "LiveWire", isCorrect:false},
            {text: "Native", isCorrect:false},
            {text: "Navigator", isCorrect:true},
            {text: "Microsoft", isCorrect:false}
        ]
    },
    {
        id:5,
        q : "__________ JavaScript is also called server-side JavaScript",
        a:[
            {text: "LiveWire", isCorrect: true},
            {text: "Native", isCorrect: false},
            {text: "Navigator", isCorrect: false},
            {text: "Microsoft", isCorrect: false}
        ]
    },
    {
        id:6,
        q : "What are variables used for in JavaScript Programs?",
        a:[
            {text: "Causing high-school algebra flashbacks", isCorrect: false},
            {text: "Varying randomly", isCorrect: false},
            {text: "Storing numbers, dates, or other values", isCorrect: true},
            {text: "None of the above", isCorrect: false}
        ]
    },
    {
        id:7,
        q : "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation",
        a:[
            {text: "Server-side", isCorrect: false},
            {text: "Local", isCorrect: false},
            {text: "Native", isCorrect: false},
            {text: "Client-side", isCorrect: true}
        ]
    },
    {
        id:8,
        q : "What should appear at the very end of your JavaScript? The <script LANGUAGE='JavaScript'>tag",
        a:[
            {text: "<script>", isCorrect: false},
            {text: "</script>", isCorrect: true},
            {text: "The END statement", isCorrect: false},
            {text: "None of the above", isCorrect: false}
        ]
    },
    {
        id:9,
        q : "Which of the following can't be done with client-side JavaScript?",
        a:[
            {text: "Sending a form's contents by email", isCorrect: false},
            {text: " Validating a form", isCorrect: false},
            {text: "Storing the form's contents to a database file on the server", isCorrect: true},
            {text: "None of the above", isCorrect: false}
        ]
    },
    {
        id:10,
        q : "Which of the following are capabilities of functions in JavaScript?",
        a:[
            {text: "Accept parameters", isCorrect: true},
            {text: "Return a value", isCorrect: false},
            {text: "Accept parameters and Return a value", isCorrect: false},
            {text: "None of the above", isCorrect: false}
        ]
    },
    {
        id:11,
        q : "Which of the following is not a valid JavaScript variable name?",
        a:[
            {text: "FirstAndLast", isCorrect: false},
            {text: "_first_and_last_names", isCorrect: false},
            {text: "2names", isCorrect: true},
            {text: "None of the above", isCorrect: false}
        ]
    },
    {
        id:12,
        q : "How does JavaScript store dates in a date object?",
        a:[
            {text: "The number of seconds since Netscape's public stock offering.", isCorrect: false},
            {text: "The number of milliseconds since January 1st, 1970", isCorrect: true},
            {text: "The number of days since January 1st, 1900", isCorrect: false},
            {text: "None of the Above", isCorrect: false},
        ]
    },
    {
        id:13,
        q : "What is the correct JavaScript syntax to write 'Hello World'?",
        a:[
            {text: "System.out.println('Hello World')", isCorrect: false},
            {text: "println ('Hello World')", isCorrect: false},
            {text: "response.write('Hello World')", isCorrect: false},
            {text: "document.write('Hello World')", isCorrect: true}
        ]
    },
    {
        id:14,
        q : "Which types of image maps can be used with JavaScript?",
        a:[
            {text: "Client-side image maps", isCorrect: true},
            {text: "Server-side image maps", isCorrect: false},
            {text: "Server-side image maps and Client-side image maps", isCorrect: false},
            {text: "None of the above", isCorrect: false}
        ]
    },
    {
        id:15,
        q : "Choose the server-side JavaScript object?",
        a:[
            {text: "FileUpLoad", isCorrect: false},
            {text: "Date", isCorrect: false},
            {text: "Function", isCorrect: false},
            {text: "File", isCorrect: true},
        ]
    },
    {
        id:16,
        q : "Choose the client-side JavaScript object?",
        a:[
            {text: "Cursor", isCorrect: false},
            {text: "Database", isCorrect: false},
            {text: "FileUpLoad", isCorrect: true},
            {text: "Client", isCorrect: false}
        ]
    },
    {
        id:17,
        q : "Choose the server-side JavaScript object?",
        a:[
            {text: "FileUpLoad", isCorrect: false},
            {text: "Date", isCorrect: false},
            {text: "Function", isCorrect: false},
            {text: "File", isCorrect: true}
        ]
    },
    {
        id:18,
        q : "Choose the server-side JavaScript object?",
        a:[
            {text: "FileUpLoad", isCorrect: false},
            {text: "Date", isCorrect: false},
            {text: "Function", isCorrect: false},
            {text: "File", isCorrect: true},
        ]
    },
    {
        id:19,
        q : "Choose the server-side JavaScript object?",
        a:[
            {text: "FileUpLoad", isCorrect: false},
            {text: "Date", isCorrect: false},
            {text: "Function", isCorrect: false},
            {text: "File", isCorrect: true},
        ]

    }
    
]

var letsgo = true;

function iterate(id){
    var result = document.getElementById("result")
    result[0].innerText = "";

    const question = document.getElementById("question")

    question.innerText =  Quesions[id].q

    const op1 = document.getElementById('op1')
    const op2 = document.getElementById('op2')
    const op3 = document.getElementById('op3')
    const op4 = document.getElementById('op4')
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";
    op1.addEventListener("click",() =>{
        op1.style.backgroundColor = "rgb(116, 103, 230)";
        op2.style.backgroundColor = "#313030";
        op3.style.backgroundColor = "#313030";
        op4.style.backgroundColor = "#313030";

        selected = op1.value;
    })
    op2.addEventListener("click",() =>{
        op2.style.backgroundColor = "rgb(116, 103, 230)";
        op1.style.backgroundColor = "#313030";
        op3.style.backgroundColor = "#313030";
        op4.style.backgroundColor = "#313030";
        selected = op2.value;
    })
    op3.addEventListener("click",() =>{
        op3.style.backgroundColor = "rgb(116, 103, 230)";
        op2.style.backgroundColor = "#313030";
        op1.style.backgroundColor = "#313030";
        op4.style.backgroundColor = "#313030";
        selected = op3.value;
    })
    op4.addEventListener("click",() =>{        
        op4.style.backgroundColor = "rgb(116, 103, 230)";
        op2.style.backgroundColor = "#313030";
        op3.style.backgroundColor = "#313030";
        op1.style.backgroundColor = "#313030";
        selected = op4.value;
    })
    const evaluate= document.getElementsByClassName("evaluate");

    evaluate[0].addEventListener("click",() =>{
        if (selected == "true") {
            result[0].innerHTML = "You are Correct";
            result[0].style.color = "#3cb84d";
        }else{
            result[0].innerHTML = "Oops wrong answer";
            result[0].style.color = "#BF3325";
        }
    })
}
if (letsgo) {
    iterate("0");
}
const next = document.getElementsByClassName('next')[0];
var id=0;
next.addEventListener("click", () => {
    start= false;
    if (id< 19){
        id++;
        iterate(id);
        console.log(id);
    }
})

function startQuiz (id){
    startEl.remove ();
    panelEl.classList.toggle("show")
    iterate (id);
    TIMER = setInterval(renderCounter,1000);
}
startEl.addEventListener("click", startQuiz);

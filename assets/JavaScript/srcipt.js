


var letsgo = document.getElementById("start-btn");
var startEl = document.getElementById("start");
var quiz = document.getElementById("quiz");
var panelEl = document.getElementById("panel");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");
var score=0;


var Questions = [
    {
        id:0,
        q : "JavaScript is what type of language?",
        a : [
            {A: "Object-Oriented", isCorrect: false},
            {B: "Object-Based", isCorrect: true},
            {C: "Assembly-language", isCorrect: false},
            {D: "High-level", isCorrect: false}
        ]

    },
    {
        id:1,
        q: "JS stansd for ___?", 
        a : [
            {A: "Just Saying", isCorrect: false},
            {B: "Java Server", isCorrect: false},
            {C: "Java Script", isCorrect: true},
            {D: "None of the Above", isCorrect: false},
        ]
    },
    {
        id:2,
        q : "Why so JavaScript and Java have similar name?",
        a : [
            {A: "JavaScript's syntax is loosely based on Java's", isCorrect: true},
            {B: "JavaScript is a stripped-down version of Java", isCorrect: false},
            {C: "They both originated on the island of Java", isCorrect: false},
            {D: "None of the above", isCorrect: false}
        ]
    },
    {
        id:3,
        q : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        a : [
            {A: "The Web server", isCorrect: false},
            {B: "A central machine deep within Netscape's corporate offices", isCorrect: false},
            {C: "The Website's", isCorrect: false},
            {D: "The User's machine running a Web browser", isCorrect: true}
        ]
    },
    {
        id:4,
        q : "______ JavaScript is also called client-side JavaScript.",
        a : [
            {A: "LiveWire", isCorrect:false},
            {B: "Native", isCorrect:false},
            {C: "Navigator", isCorrect:true},
            {D: "Microsoft", isCorrect:false}
        ]
    },
    {
        id:5,
        q : "__________ JavaScript is also called server-side JavaScript",
        a : [
            {A: "LiveWire", isCorrect: true},
            {B: "Native", isCorrect: false},
            {C: "Navigator", isCorrect: false},
            {D: "Microsoft", isCorrect: false}
        ]
    },
    {
        id:6,
        q : "What are variables used for in JavaScript Programs?",
        a : [
            {A: "Causing high-school algebra flashbacks", isCorrect: false},
            {B: "Varying randomly", isCorrect: false},
            {C: "Storing numbers, dates, or other values", isCorrect: true},
            {D: "None of the above", isCorrect: false}
        ]
    },
    {
        id:7,
        q : "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation",
        a : [
            {A: "Server-side", isCorrect: false},
            {B: "Local", isCorrect: false},
            {C: "Native", isCorrect: false},
            {D: "Client-side", isCorrect: true}
        ]
    },
    {
        id:8,
        q : "What should appear at the very end of your JavaScript? The <script LANGUAGE='JavaScript'>tag",
        a : [
            {A: "<script>", isCorrect: false},
            {B: "</script>", isCorrect: true},
            {C: "The END statement", isCorrect: false},
            {D: "None of the above", isCorrect: false}
        ]
    },
    {
        id:9,
        q : "Which of the following can't be done with client-side JavaScript?",
        a : [
            {A: "Sending a form's contents by email", isCorrect: false},
            {B: " Validating a form", isCorrect: false},
            {C: "Storing the form's contents to a database file on the server", isCorrect: true},
            {D: "None of the above", isCorrect: false}
        ]
    },
    {
        id:10,
        q : "Which of the following are capabilities of functions in JavaScript?",
        a : [
            {A: "Accept parameters", isCorrect: true},
            {B: "Return a value", isCorrect: false},
            {C: "Accept parameters and Return a value", isCorrect: false},
            {D: "None of the above", isCorrect: false}
        ]
    },
    {
        id:11,
        q : "Which of the following is not a valid JavaScript variable name?",
        a : [
            {A: "FirstAndLast", isCorrect: false},
            {B: "_first_and_last_names", isCorrect: false},
            {C: "2names", isCorrect: true},
            {D: "None of the above", isCorrect: false}
        ]
    },
    {
        id:12,
        q : "How does JavaScript store dates in a date object?",
        a : [
            {A: "The number of seconds since Netscape's public stock offering.", isCorrect: false},
            {b: "The number of milliseconds since January 1st, 197A", isCorrect: true},
            {C: "The number of days since January 1st, 19AA", isCorrect: false},
            {D: "None of the Above", isCorrect: false},
        ]
    },
    {
        id:13,
        q : "What is the correct JavaScript syntax to write 'Hello World'?",
        a : [
            {A: "System.out.println('Hello World')", isCorrect: false},
            {B: "println ('Hello World')", isCorrect: false},
            {C: "response.write('Hello World')", isCorrect: false},
            {D: "document.write('Hello World')", isCorrect: true}
        ]
    },
    {
        id:14,
        q : "Which types of image maps can be used with JavaScript?",
        a : [
            {A: "Client-side image maps", isCorrect: true},
            {B: "Server-side image maps", isCorrect: false},
            {C: "Server-side image maps and Client-side image maps", isCorrect: false},
            {D: "None of the above", isCorrect: false}
        ]
    },
    {
        id:15,
        q : "Choose the server-side JavaScript object?",
        a : [
            {A: "FileUpLoad", isCorrect: false},
            {B: "Date", isCorrect: false},
            {C: "Function", isCorrect: false},
            {D: "File", isCorrect: true},
        ]
    },
    {
        id:16,
        q : "Choose the client-side JavaScript object?",
        a : [
            {A: "Cursor", isCorrect: false},
            {B: "Database", isCorrect: false},
            {C: "FileUpLoad", isCorrect: true},
            {D: "Client", isCorrect: false}
        ]
    },
    {
        id:17,
        q : "Choose the server-side JavaScript object?",
        a : [
            {A: "FileUpLoad", isCorrect: false},
            {B: "Date", isCorrect: false},
            {C: "Function", isCorrect: false},
            {D: "File", isCorrect: true}
        ]
    },
    {
        id:18,
        q : "Choose the server-side JavaScript object?",
        a : [
            {A: "FileUpLoad", isCorrect: false},
            {B: "Date", isCorrect: false},
            {C: "Function", isCorrect: false},
            {D: "File", isCorrect: true},
        ]
    },
    {
        id:19,
        q : "Choose the server-side JavaScript object?",
        a : [
            {A: "FileUpLoad", isCorrect: false},
            {B: "Date", isCorrect: false},
            {C: "Function", isCorrect: false},
            {D: "File", isCorrect: true},
        ]

    }
    
]

var start = true;

function iterate(id){
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    const question = document.getElementById("question");

    question.innerText =  Questions[id].q

    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
    op1.innerText = Questions[id].a[0].A;
    op2.innerText = Questions[id].a[1].B;
    op3.innerText = Questions[id].a[2].C;
    op4.innerText = Questions[id].a[3].D;
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
            op4.style.backgroundColor = "rgb(60, 171, 199)";
            op2.style.backgroundColor = "rgb(60, 171, 199)";
            op3.style.backgroundColor = "rgb(60, 171, 199)";
            op1.style.backgroundColor = "rgb(60, 171, 199)";
    
        }else{
            result[0].innerHTML = "Oops wrong answer";
            result[0].style.color = "#BF3325";
            op4.style.backgroundColor = "rgb(60, 171, 199)";
            op2.style.backgroundColor = "rgb(60, 171, 199)";
            op3.style.backgroundColor = "rgb(60, 171, 199)";
            op1.style.backgroundColor = "rgb(60, 171, 199)";
        
        }
        start= false;
        if (id< 19){
            id++;
            iterate(id);
            console.log(id);
        }
    })

    // if (start) {
    //     iterate("0");
    // }
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
    console.log("lets go");
    panelEl.classList.toggle("show");
    iterate (id);
    TIMER = setInterval(renderCounter,1000);
}
startEl.addEventListener("click", startQuiz);

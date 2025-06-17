alert("Welcome To My Portfolio!");

// --------- About Section Tabs ---------
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
  // Remove active states and reset attributes for tabs
  Array.from(tablinks).forEach(link => {
    link.classList.remove("active-link");
    link.setAttribute("aria-selected", "false");
    link.setAttribute("tabindex", "-1");
  });

  // Hide all tab contents
  Array.from(tabcontents).forEach(content => {
    content.classList.remove("active-tab");
    content.setAttribute("hidden", "true");
  });

  // Activate clicked tab
  const clickedTab = event.currentTarget;
  clickedTab.classList.add("active-link");
  clickedTab.setAttribute("aria-selected", "true");
  clickedTab.setAttribute("tabindex", "0");

  // Show corresponding tab content
  const tabContent = document.getElementById(tabname);
  tabContent.classList.add("active-tab");
  tabContent.removeAttribute("hidden");
}

// --------- Project Data for Modal ---------
const projectsData = {
  hotelMenu: {
    title: "Hotel Menu - Python Project",
    code: `# Example Hotel Menu Python code
cafe_name = input("Enter a Cafe Name: ")
print(f"\\nWELCOME TO {cafe_name.upper()}")

menu_category = input("\\nEnter Menu Category (e.g., Main Course): ")
total_price = 0  # Initialize total price

if menu_category == "Main Course":
    cuisine = input("Enter Cuisine Type (Indian Cuisine or Western Cuisine): ")
    
    if cuisine == "Indian Cuisine":
        print("\\n--- Indian Cuisine Menu ---")
        print("1. Paneer Butter Masala - ₹180")
        print("2. Chicken Curry - ₹220")
        print("3. Veg Biryani - ₹150")
        order = input("Enter your choice(s) (e.g., 1 or 1,3): ").split(",")
        
        for choice in order:
            if choice == "1":
                total_price += 180
                print("Paneer Butter Masala added.")
            elif choice == "2":
                total_price += 220
                print("Chicken Curry added.")
            elif choice == "3":
                total_price += 150
                print("Veg Biryani added.")
    
    elif cuisine == "Western Cuisine":
        print("\\n--- Western Cuisine Menu ---")
        print("1. Grilled Chicken - ₹250")
        print("2. Veg Lasagna - ₹200")
        print("3. Spaghetti Bolognese - ₹230")
        order = input("Enter your choice(s) (e.g., 1,2,3 or 2,3): ").split(",")
        
        if "1" in order and "2" in order and "3" in order:
            print("You ordered Grilled Chicken, Veg Lasagna, and Spaghetti Bolognese. Price: ₹680")
            total_price = 680
        else:
            for choice in order:
                if choice == "1":
                    print("Grilled Chicken added.")
                    total_price += 250
                elif choice == "2":
                    print("Veg Lasagna added.")
                    total_price += 200
                elif choice == "3":
                    print("Spaghetti Bolognese added.")
                    total_price += 230
    else:
        print("Sorry, only Indian and Western Cuisine are available.")

    if total_price > 0:
        print(f"\\nTotal Amount: ₹{total_price}")
        print("\\n--- Payment Options ---")
        print("1. UPI")
        print("2. Credit/Debit Card")
        print("3. Cash")
        payment_option = input("Choose your payment method (1/2/3): ")
        
        if payment_option == "1":
            print("You selected UPI. Please scan the QR code to pay.")
        elif payment_option == "2":
            print("You selected Card. Please insert or tap your card.")
        elif payment_option == "3":
            print("You selected Cash. Please pay at the counter.")
        else:
            print("Invalid payment option.")
        
        print("THANK YOU FOR VISITING")
else:
    print("Only 'Main Course' is available at the moment.")
`,
    preview: null // No live preview for Python code
  },

  quiz: {
    title: "Quiz App - JavaScript Project",
    code: `// Quiz app example JavaScript
const questions = [
  {
    question: "What has keys but can't open locks?",
    answer: [
      { text: "Piano", correct: true },
      { text: "Computer", correct: false },
      { text: " Book", correct: false },
      { text: " key", correct: false },
    ],
  },
  {
    question: "I speak without a mouth and hear without ears. What am I?",
    answer: [
      { text: "Wind", correct: false },
      { text: "Echo", correct: true },
      { text: "Music", correct: false },
      { text: "Water", correct: false },
    ],
  },
  // ... more questions ...
];

const timerDisplay = document.getElementById("timer");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

function startQuiz() {
  clearInterval(timer);
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 15;
  timerDisplay.textContent = \`Time left: \${timeLeft}s\`;
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = \`Time left: \${timeLeft}s\`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      handleNextButton();
    }
  }, 1000);
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.textContent = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });

  startTimer();
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  clearInterval(timer);
  resetState();
  questionElement.innerHTML = \`You scored \${score} out of \${questions.length}!\`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex >= questions.length) {
    startQuiz();
  } else {
    handleNextButton();
  }
});

startQuiz();
`,
    preview: null // Preview will be generated dynamically
  },
 ticTacToe: {
    title: "Tic-Tac-Toe - Python Project",
    code: `import tkinter as tk

def toggle_player():
    global current_player
    current_player = "X" if current_player == "O" else "O"
    label.config(text=f"Player {current_player}'s turn")

root = tk.Tk()
root.title("Tic-Tac-Toe")

buttons = [tk.Button(root, text="", font=("normal", 25), width=6, height=2, command=lambda i=i: button_click(i)) for i in range(9)]

for i, button in enumerate(buttons):
    button.grid(row=i // 3, column=i % 3)

current_player = "X"
winner = False
label = tk.Label(root, text=f"Player {current_player}'s turn", font=("normal", 16))
label.grid(row=3, column=0, columnspan=3)

root.mainloop()
`,
    preview: null // No live preview for Python GUI code
  }
  
};


// --------- Modal Elements and Functions ---------
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const codePanel = document.getElementById("codePanel");
const previewPanel = document.getElementById("previewPanel");
const modalTabs = document.querySelectorAll(".modal-tab");
const closeBtn = modal.querySelector(".close-btn");

let currentProject = null;

// Open modal and show code or preview
function openModal(projectKey, showPreview = false) {
  currentProject = projectsData[projectKey];
  if (!currentProject) {
    alert("Project data not found!");
    return;
  }

  modalTitle.textContent = currentProject.title;

  if (showPreview && projectKey === "quiz") {
    switchToPreview();
  } else {
    switchToCode();
  }

  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  modal.focus();
}

// Close modal and reset
function closeModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  codePanel.textContent = "";
  previewPanel.srcdoc = "";
  previewPanel.style.display = "none";
  codePanel.style.display = "block";
}

// Switch modal tabs
function switchModalTab(tab) {
  if (tab === "code") {
    switchToCode();
  } else if (tab === "preview") {
    switchToPreview();
  }
}

function switchToCode() {
  modalTabs.forEach((tabBtn) => {
    const isCodeTab = tabBtn.id === "codeTab";
    tabBtn.classList.toggle("active", isCodeTab);
    tabBtn.setAttribute("aria-selected", isCodeTab ? "true" : "false");
    tabBtn.setAttribute("tabindex", isCodeTab ? "0" : "-1");
  });

  codePanel.style.display = "block";
  previewPanel.style.display = "none";

  codePanel.textContent = currentProject.code || "Code not available.";
}

function switchToPreview() {
  if (!currentProject) return;

  modalTabs.forEach((tabBtn) => {
    const isPreviewTab = tabBtn.id === "previewTab";
    tabBtn.classList.toggle("active", isPreviewTab);
    tabBtn.setAttribute("aria-selected", isPreviewTab ? "true" : "false");
    tabBtn.setAttribute("tabindex", isPreviewTab ? "0" : "-1");
  });

  if (currentProject.preview) {
    previewPanel.src = currentProject.preview;
    previewPanel.style.display = "block";
    codePanel.style.display = "none";
  } else if (currentProject === projectsData.quiz) {
    // Generate quiz preview dynamically
    const htmlContent = generateQuizPreviewHTML(currentProject.code);
    previewPanel.srcdoc = htmlContent;
    previewPanel.style.display = "block";
    codePanel.style.display = "none";
  } else {
    alert("Live preview not available for this project.");
    switchToCode();
  }
}

// Generate full HTML with embedded JS code for quiz live preview
function generateQuizPreviewHTML(jsCode) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Quiz Preview</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
        background: #f185dd;
        margin: 0;
      }
      .app {
        max-width: 600px;
        margin: 0 auto;
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
      }
      h1 {
        text-align: center;
        margin-bottom: 20px;
      }
      #timer {
        font-size: 24px;
        color: red;
        font-weight: bold;
        margin-bottom: 15px;
        text-align: center;
      }
      #question {
        font-weight: bold;
        margin-bottom: 12px;
        font-size: 20px;
      }
      #answer-buttons {
        margin-bottom: 20px;
      }
      .btn {
        background: #fff;
        color: #222;
        font-weight: 500;
        width: 100%;
        border: 1px solid #222;
        padding: 10px;
        margin: 10px 0;
        text-align: left;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s;
      }
      .btn:hover:not([disabled]) {
        background: #222;
        color: #fff;
      }
      .btn:disabled {
        cursor: no-drop;
      }
      #next-btn {
        background: #001e4d;
        color: #fff;
        font-weight: 500;
        width: 150px;
        border: 0;
        padding: 10px;
        margin: 20px auto 0;
        border-radius: 4px;
        cursor: pointer;
        display: none;
        block-size: fit-content;
        display: block;
      }
      .correct {
        background: #9aeabc;
      }
      .incorrect {
        background:rgb(49, 64, 201);
      }
    </style>
  </head>
  <body>
    <div class="app">
      <h1>Simple Quiz</h1>
      <div class="quiz">
        <div id="timer">Time left: 10s</div>
        <h2 id="question">Question goes here</h2>
        <div id="answer-buttons"></div>
        <button id="next-btn">Next</button>
      </div>
    </div>

    <script>
      ${jsCode}
    </script>
  </body>
  </html>
  `;
}


// Close modal when clicking outside modal-content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal on close button click
closeBtn.addEventListener("click", closeModal);

// Modal tab buttons click event
modalTabs.forEach((tabBtn) => {
  tabBtn.addEventListener("click", (e) => {
    const tab = e.target.id === "codeTab" ? "code" : "preview";
    switchModalTab(tab);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  emailjs.init("qOciE1AxazbTwss7m"); // 🔁 Replace with your Public Key

  const form = document.getElementById("contactForm");
  const responseMsg = document.getElementById("formResponse");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_dpe4c6u", "template_y6lxl5m", this)
      .then(() => {
        responseMsg.innerText = "✅ Message sent successfully!";
        form.reset();
      }, (error) => {
        responseMsg.innerText = "❌ Failed to send. Try again.";
        console.error("EmailJS error:", error);
      });
  });
});


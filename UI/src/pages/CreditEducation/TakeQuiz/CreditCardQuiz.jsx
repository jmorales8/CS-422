import { useState } from "react";
import { handleNavigate } from "../../../components/Navigate";
import "./creditCardQuiz.css"; // (optional) if you want custom styling

const questions = [
  {
    question: "What does APR stand for?",
    options: ["Annual Percentage Rate", "Applied Payment Rate", "Accumulated Payment Ratio"],
    answer: "Annual Percentage Rate",
  },
  {
    question: "What happens if you only make the minimum payment on your credit card?",
    options: ["You pay no interest", "You avoid late fees", "You accrue more interest over time"],
    answer: "You accrue more interest over time",
  },
  {
    question: "What is a good credit score range?",
    options: ["300-500", "600-750", "800-1000"],
    answer: "600-750",
  },
  {
    question: "Which factor has the biggest impact on your credit score?",
    options: ["Payment history", "Credit inquiries", "Length of credit history"],
    answer: "Payment history",
  },
  {
    question: "What is credit utilization?",
    options: ["The number of loans you have", "The ratio of your credit card balances to limits", "The interest charged"],
    answer: "The ratio of your credit card balances to limits",
  },
  {
    question: "Which action can hurt your credit score the most?",
    options: ["Paying bills late", "Opening a new savings account", "Checking your own credit report"],
    answer: "Paying bills late",
  },
  {
    question: "How often should you check your credit report?",
    options: ["Every 5 years", "Once a year", "Only when you apply for a loan"],
    answer: "Once a year",
  },
  {
    question: "What is a secured credit card?",
    options: ["A card backed by a cash deposit", "A card with no spending limit", "A card only for businesses"],
    answer: "A card backed by a cash deposit",
  },
  {
    question: "Which one helps build your credit history?",
    options: ["Using debit cards", "Using a credit card responsibly", "Paying cash only"],
    answer: "Using a credit card responsibly",
  },
  {
    question: "If you close an old credit card account, it could...",
    options: ["Improve your score", "Have no impact", "Lower your credit score"],
    answer: "Lower your credit score",
  },
];

export function CreditCardQuiz() {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(""));
  const [score, setScore] = useState(null);

  const handleOptionChange = (questionIndex, selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let correctCount = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].answer) {
        correctCount++;
      }
    }
    setScore(correctCount);
  };

  return (
<div className="standard_page">
  <div className="return_button_container">
    <button
      onClick={() => handleNavigate("/home")}
      className="return_button"
    >
      Back
    </button>
  </div>

  {/* Make scroll happen on this div */}
  <div className="standard_page_scrollable">
    <div className="quiz_page">
      <h1>Credit Card Quiz</h1>

      {questions.map((q, idx) => (
        <div key={idx} className="quiz_question">
          <h3>{idx + 1}. {q.question}</h3>
          <div className="quiz_options">
            {q.options.map((option, oidx) => (
              <label key={oidx} className="quiz_option_label">
                <input
                  type="radio"
                  name={`question-${idx}`}
                  value={option}
                  checked={userAnswers[idx] === option}
                  onChange={() => handleOptionChange(idx, option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}

      {score === null && (
        <button className="small_button" onClick={handleSubmit}>
          Done
        </button>
      )}

      {score !== null && (
        <div className="quiz_results">
          <h2>You got {score} out of {questions.length} correct!</h2>

          <button
            className="small_button"
            onClick={() => handleNavigate("/home")}
            style={{ marginTop: "20px" }}
          >
            Return Home
          </button>
        </div>
      )}
    </div>
  </div>
</div>

  );
}
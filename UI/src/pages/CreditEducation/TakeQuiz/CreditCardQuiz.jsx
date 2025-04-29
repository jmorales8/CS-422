import { useState } from "react";
import { handleNavigate } from "../../../components/Navigate";
import "./creditCardQuiz.css"; // your styling

const questions = [
  {
    question: "What does APR stand for?",
    options: ["Annual Percentage Rate", "Applied Payment Rate", "Accumulated Payment Ratio"],
    answer: "Annual Percentage Rate",
    hint: "APR is the Annual Percentage Rate, showing yearly interest cost.",
  },
  {
    question: "What happens if you only make the minimum payment on your credit card?",
    options: ["You pay no interest", "You avoid late fees", "You accrue more interest over time"],
    answer: "You accrue more interest over time",
    hint: "Making minimum payments grows your interest balance over time.",
  },
  {
    question: "What is a good credit score range?",
    options: ["300-500", "600-750", "800-1000"],
    answer: "600-750",
    hint: "600-750 is considered a healthy credit range by lenders.",
  },
  {
    question: "Which factor has the biggest impact on your credit score?",
    options: ["Payment history", "Credit inquiries", "Length of credit history"],
    answer: "Payment history",
    hint: "Your payment history is the single biggest factor in your score.",
  },
  {
    question: "What is credit utilization?",
    options: ["The number of loans you have", "The ratio of your credit card balances to limits", "The interest charged"],
    answer: "The ratio of your credit card balances to limits",
    hint: "Utilization is how much of your available credit you are using.",
  },
  {
    question: "Which action can hurt your credit score the most?",
    options: ["Paying bills late", "Opening a new savings account", "Checking your own credit report"],
    answer: "Paying bills late",
    hint: "Late payments damage your score more than anything else.",
  },
  {
    question: "How often should you check your credit report?",
    options: ["Every 5 years", "Once a year", "Only when you apply for a loan"],
    answer: "Once a year",
    hint: "You should check at least once a year for errors or fraud.",
  },
  {
    question: "What is a secured credit card?",
    options: ["A card backed by a cash deposit", "A card with no spending limit", "A card only for businesses"],
    answer: "A card backed by a cash deposit",
    hint: "Secured cards require a deposit as collateral for the credit line.",
  },
  {
    question: "Which one helps build your credit history?",
    options: ["Using debit cards", "Using a credit card responsibly", "Paying cash only"],
    answer: "Using a credit card responsibly",
    hint: "Responsible credit card use builds your history; debit does not.",
  },
  {
    question: "If you close an old credit card account, it could...",
    options: ["Improve your score", "Have no impact", "Lower your credit score"],
    answer: "Lower your credit score",
    hint: "Closing old cards shortens your credit history, lowering your score.",
  },
];

export function CreditCardQuiz() {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(""));
  const [score, setScore] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showHints, setShowHints] = useState(false);

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
    setShowModal(true);
  };

  const handleRetake = () => {
    setShowHints(true);
    setShowModal(false);
  };

  const handleReturnHome = () => {
    handleNavigate("/home");
  };

  return (
    <div className="standard_page">
      <div className="return_button_container">
        <button onClick={handleReturnHome} className="return_button">
          Back
        </button>
      </div>

      <div className="standard_page_scrollable">
        <div className="quiz_page">
          <h1>Credit Card Quiz</h1>

          {questions.map((q, idx) => (
            <div key={idx} className="quiz_question">
              <h2>{idx + 1}. {q.question}</h2>
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

              {/* If hints should be shown and answer was wrong */}
              {showHints && userAnswers[idx] !== questions[idx].answer && (
                <div className="quiz_hint">
                  Hint: {q.hint}
                </div>
              )}
            </div>
          ))}

          {score === null && (
            <button className="small_button" onClick={handleSubmit}>
              Done
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal_overlay">
          <div className="modal_content">
            <h2>Quiz Completed!</h2>
            <p>You scored {score} out of {questions.length}.</p>

            <div className="modal_buttons">
              <button className="small_button" onClick={handleRetake}>
                Retake Quiz
              </button>
              <button className="small_button" onClick={handleReturnHome}>
                Return Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

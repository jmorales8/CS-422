import { useState } from "react";
import { mockText } from "../../../components/mockText";
import { handleNavigate } from "../../../components/Navigate";
import "./startLesson.css";

// Navigation buttons
const navButtons = [
  { label: "Back", path: "/education-hub" },
  { label: "Main", path: "/home" },
  { label: "Take Quiz", path: "/credit-card-quiz"},
  { label: "Next Topic", path: "next-topic" }, // handled differently!
];

// Lesson topics (array)
const lessonTopics = [
  {
    title: "Understanding Interest Rates",
    video: "What_is_APR_on_a_Credit_Card____Discover___Card_Smarts.mp4",
    text: "Is APR the Annuel Rate charged for borrowing money inlcuding transactions fees and/or anymore additional fees?",
  },
  {
    title: "Understanding Minimum Payments",
    video:
      "What_is_Credit_Utilization__How_Does_It_Affect_Credit_Score____Capital_One.mp4",
    text: "Minimum payments are the lowest amount you must pay each month. Paying only the minimum increases interest costs.",
  },
  {
    title: "Understanding Minimum Payments",
    video:
      "What_is_an_Annual_Fee_on_a_Credit_Card____Discover___Card_Smarts.mp4",
    text: "Do credit card companies still charge you for the card regardless of when you use it or not?",
  },
];

export function StartLesson() {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      alert("Correct!");
    } else {
      alert("Incorrect, try again!");
    }
  };

  const handleNavClick = (path) => {
    if (path === "next-topic") {
      // Move to the next topic (if any)
      setCurrentTopicIndex((prev) =>
        Math.min(prev + 1, lessonTopics.length - 1)
      );
    } else {
      handleNavigate(path); // Real navigation
    }
  };

  const currentTopic = lessonTopics[currentTopicIndex];

  return (
    <div className="standard_page">
      <div className="navbar_buttons">
        {navButtons.map((button) => (
          <button
            key={button.label}
            onClick={() => handleNavClick(button.path)}
            className="return_button"
          >
            {button.label}
          </button>
        ))}
      </div>

      <div className="header_text">
        <h1>Credit Education</h1>
        <h2>{currentTopic.title}</h2>
      </div>

      <div className="SL_page">
        <div className="SL_video_container">
          {currentTopic.video ? (
            <video key={currentTopic.video} className="SL_video" controls>
              <source src={currentTopic.video} type="video/mp4" />
            </video>
          ) : (
            <img
              src={currentTopic.image}
              alt={currentTopic.title}
              className="SL_video"
            />
          )}
          <b className="SL_video_text">{currentTopic.text}</b>
        </div>

        <div className="SL_answers">
          <button
            className="small_button"
            onClick={() => handleAnswerClick(true)}
          >
            TRUE
          </button>
          <button
            className="small_button"
            onClick={() => handleAnswerClick(false)}
          >
            FALSE
          </button>
        </div>
      </div>
    </div>
  );
}

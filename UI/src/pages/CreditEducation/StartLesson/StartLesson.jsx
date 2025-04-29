import { useState, useEffect } from "react";
import { handleNavigate } from "../../../components/Navigate";
import "./startLesson.css";

// Lesson topics (array)
const lessonTopics = [
  {
    id: "apr",
    title: "Understanding APR",
    video: "What_is_APR_on_a_Credit_Card____Discover___Card_Smarts.mp4",
    text: "Is APR the Annual Rate charged for borrowing money including transaction fees and/or any additional fees?",
  },
  {
    id: "utilization",
    title: "Understanding Utilization",
    video: "What_is_Credit_Utilization__How_Does_It_Affect_Credit_Score____Capital_One.mp4",
    text: "Minimum payments are the lowest amount you must pay each month. Paying only the minimum increases interest costs.",
  },
  {
    id: "interest-rates",
    title: "Understanding Interest Rates",
    video: "Interest_Rates___by_Wall_Street_Survivor.mp4",
    text: "Interest rates are the cost of borrowing money, expressed as a percentage. Lower rates are better!",
  },
  {
    id: "annual-fees",
    title: "Understanding Annual Fees",
    video: "What_is_an_Annual_Fee_on_a_Credit_Card____Discover___Card_Smarts.mp4",
    text: "Do credit card companies still charge you for the card regardless of when you use it or not?",
  },
];

export function StartLesson() {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const topicId = params.get("topic");

    if (topicId) {
      const foundIndex = lessonTopics.findIndex((topic) => topic.id === topicId);
      if (foundIndex !== -1) {
        setCurrentTopicIndex(foundIndex);
      }
    }
  }, []);

  const handleAnswerClick = (isCorrect) => {
    alert(isCorrect ? "Correct!" : "Incorrect, try again!");
  };

  const handleNavClick = (path) => {
    if (path === "next-topic") {
      setCurrentTopicIndex((prev) => Math.min(prev + 1, lessonTopics.length - 1));
    } else {
      handleNavigate(path);
    }
  };

  const currentTopic = lessonTopics[currentTopicIndex];

  return (
<div className="standard_page">
  <div className="navbar_buttons">
    <button className="return_button" onClick={() => handleNavigate("/education-hub")}>
      Back
    </button>
    <button className="return_button" onClick={() => handleNavigate("/home")}>
      Main
    </button>
    <button className="return_button" onClick={() => handleNavigate("/credit-card-quiz")}>
      Take Quiz
    </button>
    {currentTopicIndex < lessonTopics.length - 1 && (
      <button className="return_button" onClick={() => handleNavClick("next-topic")}>
        Next Topic
      </button>
    )}
  </div>
{/* This part scrolls */}
<div className="standard_page_scrollable">
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
          <img src={currentTopic.image} alt={currentTopic.title} className="SL_video" />
        )}

        <div className="SL_quiz_section">
          <button className="small_button" onClick={() => handleAnswerClick(true)}>
            TRUE
          </button>
          <b className="SL_video_text">{currentTopic.text}</b>
          <button className="small_button" onClick={() => handleAnswerClick(false)}>
            FALSE
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

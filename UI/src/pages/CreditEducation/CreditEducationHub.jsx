import { handleNavigate } from "../../components/Navigate";
import "./creditEducationHub.css";

export function CreditEducationHub() {
  return (
    <div className="standard_page">
      <div className="return_button_container">
        <button
          onClick={() => {
            handleNavigate("/home");
          }}
          className="return_button"
        >
          Back
        </button>
      </div>
      <div className="header_text">
        <h1>Credit Education</h1>
        <h2>Select a Topic to Learn About</h2>
      </div>
      <div className="FAC_options_container">
        <span className="CEH_option_buttons_container">
          <button
            className="navigation_buttons CEH_option_buttons"
            onClick={() => handleNavigate("/apr-education")}
          >
            APR
          </button>
          <button
            className="navigation_buttons CEH_option_buttons"
            onClick={() => handleNavigate("/utilization-education")}
          >
            {" "}
            Utilization
          </button>
        </span>
        <span className="CEH_option_buttons_container">
          <button
            className="navigation_buttons CEH_option_buttons"
            onClick={() => handleNavigate("/interest-rates-education")}
          >
            Interest Rates
          </button>
          <button
            className="navigation_buttons CEH_option_buttons"
            onClick={() => handleNavigate("/annual-fees-education")}
          >
            Annual Fees
          </button>
        </span>
        <div className="CEH_option_button_container">
          <button
            onClick={() => {
              handleNavigate("/credit-card-quiz"); // Back to the original page
            }}
            className="navigation_buttons CEH_quiz_button"
          >
            Take Quiz
          </button>
        </div>
        <div className="CEH_option_button_container">
          <button
            className="navigation_buttons CEH_lesson_button"
            onClick={() => handleNavigate("start-lesson")}
          >
            Start Lesson
          </button>
        </div>
      </div>
    </div>
  );
}

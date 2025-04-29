import { handleNavigate } from "../../components/Navigate";
import "./creditEducationHub.css";
import { useUser } from "../../contexts/UserContext";
export function CreditEducationHub() {
  const { user } = useUser();
  return (
    <div className="standard_page">
      <div className="return_button_container">
        <button
          onClick={() => handleNavigate("/home")}
          className="return_button"
        >
          Back
        </button>{" "}
        <span className="username">
         <b>{user?.name}</b>
        </span>
      </div>

      <div className="header_text">
        <h1>Credit Education</h1>
        <h2>Select a Topic to Learn About</h2>
      </div>

      <div className="FAC_options_container">
        <span className="CEH_option_buttons_container">
          <button
            className="navigation_buttons CEH_option_buttons"
            onClick={() => handleNavigate("/start-lesson?topic=apr")}
          >
            APR
          </button>
          <button
            className="navigation_buttons CEH_option_buttons"
            onClick={() => handleNavigate("/start-lesson?topic=utilization")}
          >
            Utilization
          </button>
        </span>

        <span className="CEH_option_buttons_container">
          <button
            className="navigation_buttons CEH_option_buttons"
            onClick={() => handleNavigate("/start-lesson?topic=interest-rates")}
          >
            Interest Rates
          </button>
          <button
            className="navigation_buttons CEH_option_buttons"
            onClick={() => handleNavigate("/start-lesson?topic=annual-fees")}
          >
            Annual Fees
          </button>
        </span>

        <div className="CEH_option_button_container">
          <button
            onClick={() => handleNavigate("/credit-card-quiz")}
            className="navigation_buttons CEH_quiz_button"
          >
            Take Quiz
          </button>
        </div>

        <div className="CEH_option_button_container">
          <button
            className="navigation_buttons CEH_lesson_button"
            onClick={() => handleNavigate("/start-lesson")}
          >
            Start Lesson
          </button>
        </div>
      </div>
    </div>
  );
}

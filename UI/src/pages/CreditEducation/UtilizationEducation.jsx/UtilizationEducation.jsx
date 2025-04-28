import { handleNavigate } from "../../../components/Navigate";
import "../education.css"; // same CSS
export function UtilizationEducation() {
  return (
    <div className="standard_page">
      <div className="return_button_container">
        <button
          onClick={() => handleNavigate("/education-hub")}
          className="return_button"
        >
          Back
        </button>
      </div>

      <div className="education_content">
        <h1>Understanding Credit Utilization</h1>

        <div className="education_video_container">
          <video className="education_video" controls>
            <source src="What_is_Credit_Utilization__How_Does_It_Affect_Credit_Score____Capital_One.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="education_text">
          <p>
            Credit utilization refers to the percentage of your available credit
            that you're using at any given time. It plays a major role in your credit score.
          </p>
          <p>
            Experts recommend keeping your utilization below 30% to maintain a strong credit score.
            High utilization can make lenders view you as a risky borrower.
          </p>
        </div>
      </div>
    </div>
  );
}

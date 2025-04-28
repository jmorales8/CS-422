import { handleNavigate } from "../../../components/Navigate";
import "../education.css"; // same CSS

export function InterestRatesEducation() {
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
        <h1>Understanding Interest Rates</h1>

        <div className="education_video_container">
          <video className="education_video" controls>
            <source src="Interest_Rates___by_Wall_Street_Survivor.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="education_text">
          <p>
            Interest rates are the cost of borrowing money, expressed as a percentage.
            For credit cards, interest is typically charged when you carry a balance month to month.
          </p>
          <p>
            Lower interest rates mean borrowing is cheaper, while higher rates can lead to larger
            debts if balances aren't paid off promptly.
          </p>
        </div>
      </div>
    </div>
  );
}

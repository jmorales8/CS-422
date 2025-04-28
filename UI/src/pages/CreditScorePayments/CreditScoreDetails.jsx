import { handleNavigate } from "../../components/Navigate";
import "./creditScoreDetails.css";

export function CreditScoreDetails() {
  return (
    <div className="standard_page_scrollable"> {/* changed */}
      <div className="return_button_container">
        <button
          onClick={() => {
            handleNavigate("/score-and-payments");
          }}
          className="return_button"
        >
          Back
        </button>
      </div>

      <div className="CSD_page">
        <h1>This is what a credit score is</h1>

        <div className="CSD_video_container">
          <video className="CSD_video" controls>
            <source src="What_is_Credit_Utilization__How_Does_It_Affect_Credit_Score____Capital_One.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="CSD_summary">
          <h2>Summary</h2>
          <b>
            A credit score is a three-digit number that reflects your creditworthiness based on your credit history.
          </b>
          <p>
            Having a good credit score (typically 700 or above) is important because it helps you qualify for better interest rates,
            higher credit limits, and more financial opportunities like mortgages, car loans, and credit cards.
          </p>
          <b>
            Maintaining a strong credit score involves paying bills on time, keeping balances low, and managing different types of credit responsibly.
          </b>
        </div>
      </div>
    </div>
  );
}

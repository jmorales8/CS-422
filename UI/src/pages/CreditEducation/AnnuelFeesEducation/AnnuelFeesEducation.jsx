import { handleNavigate } from "../../../components/Navigate";
import "../education.css"; // same CSS

export function AnnualFeesEducation() {
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
        <h1>Understanding Annual Fees</h1>

        <div className="education_video_container">
          <video className="education_video" controls>
            <source src="What_is_an_Annual_Fee_on_a_Credit_Card____Discover___Card_Smarts.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="education_text">
          <p>
            An annual fee is a yearly charge by some credit cards for the privilege of using the card.
            Cards with annual fees often come with premium rewards, benefits, or perks.
          </p>
          <p>
            Always weigh the value of the rewards and benefits against the fee to decide if the card
            is worth keeping.
          </p>
        </div>
      </div>
    </div>
  );
}

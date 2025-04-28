import { handleNavigate } from "../../../components/Navigate";
import "../education.css"; // same CSS

export function AprEducation() {
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
        <h1>Understanding APR</h1>

        <div className="education_video_container">
          <video className="education_video" controls>
            <source src="What_is_APR_on_a_Credit_Card____Discover___Card_Smarts.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="education_text">
          <p>
            APR, or Annual Percentage Rate, is the yearly cost of borrowing money,
            including fees and interest. It's important to understand your APR because
            it determines how much you’ll actually pay when carrying a balance on your
            credit card. A lower APR means lower borrowing costs, while a higher APR
            can quickly increase your debt if you don’t pay off balances on time.
          </p>
          <p>
            Always review your credit card’s APR before applying, and try to pay your
            full balance monthly to avoid interest charges!
          </p>
        </div>
      </div>
    </div>
  );
}

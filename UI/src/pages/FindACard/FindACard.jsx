import { handleNavigate } from "../../components/Navigate";
import "./findACard.css";

export function FindACard() {
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
      <div className="FAC_header_text">
        <h1>Find a Credit Card</h1>
        <h2>Question: What is your priority?</h2>
      </div>
      <div className="FAC_options_container">
        <span className="FAC_option_buttons_container">
          <button className="navigation_buttons FAC_option_buttons">Cashback</button>
          <button className="navigation_buttons FAC_option_buttons">Travel Rewards</button >
        </span>
        <span className="FAC_option_buttons_container">
          <button className="navigation_buttons FAC_option_buttons">Low Fees</button>
          <button className="navigation_buttons FAC_option_buttons">Student Card</button>
        </span>
        <div className="FAC_option_button_container">
          <button className="navigation_buttons FAC_option_button" onClick={() => handleNavigate("recommended-cards")}>See Recommend Cards</button>
        </div>
      </div>
    </div>
  );
}

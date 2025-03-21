import { handleNavigate } from "../../components/Navigate";
import { mockText } from "../../components/mockText";
import "./recommendedCards.css";

const buttons = [
  { label: "Back", path: "/find-a-card" },
  { label: "Main", path: "/home" },
];
const placeholderCardInfo = [{}, {}, {}, {}];
export function RecommendedCards() {
  return (
    <div className="standard_page rec-cards_page">
      <span className="back-buttons">
        {buttons.map((button) => (
          <div className="return_button_container">
            <button
              onClick={() => {
                handleNavigate(button.path);
              }}
              className="return_button"
            >
              {button.label}
            </button>
          </div>
        ))}
      </span>
      <div className="rec-cards_content">
        {placeholderCardInfo.map((card, index) => (
          <div key={index} className="rec-cards_info">
            <div className="rec-cards_image-and-button">
              <img src="CreditCard.png" className="rec-cards_card" alt="card" />
              <button className="apply_button">↑ Apply ↑</button>
            </div>
            <div className="rec-cards_text">{mockText()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

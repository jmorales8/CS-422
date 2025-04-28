import { handleNavigate } from "../../../components/Navigate";
import "./recommendedCards.css";

const buttons = [
  { label: "Back", path: "/find-a-card" },
  { label: "Main", path: "/home" },
];

// Dummy info for 4 cards, now each with a "link" property
const placeholderCardInfo = [
  {
    title: "Student Rewards Card",
    description:
      "Earn 1% cashback on all purchases with no annual fee. Great for building your credit history while studying.",
    link: "https://www.chase.com/personal/credit-cards/student",
  },
  {
    title: "Cashback Everyday Card",
    description:
      "Get 2% cashback on groceries and gas, 1% everywhere else. No hidden fees and flexible reward redemption options.",
    link: "https://www.chase.com/personal/credit-cards/cash-back",
  },
  {
    title: "Travel Explorer Card",
    description:
      "Earn 3x points on travel and dining. Includes travel insurance, airport lounge access, and no foreign transaction fees.",
    link: "https://www.chase.com/personal/credit-cards/travel",
  },
  {
    title: "Secure Credit Builder Card",
    description:
      "Perfect for first-time credit users. Deposit-based secured card with monthly reporting to all major credit bureaus.",
    link: "https://www.chase.com/personal/credit-cards/credit-builder",
  },
];

export function RecommendedCards() {
  return (
    <div className="standard_page rec-cards_page">
      <span className="back-buttons">
        {buttons.map((button) => (
          <div key={button.label} className="return_button_container">
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
              <button
                className="small_button"
                onClick={() => window.open(card.link, "_blank")}
              >
                ↑ Apply ↑
              </button>
            </div>
            <div className="rec-cards_text">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import "./home.css";
import { handleNavigate } from "../../components/Navigate";
const buttons = [
  { label: "Find a Credit Card", path: "find-a-card" },
  { label: "Credit Score / Payments", path: "score-and-payments" },
  { label: "Spending Simulator", path: "spending-simulator" },
  { label: "Credit Education Hub", path: "education-hub" },
];

export function Home() {
  return (
    <div className="standard_page">
      <div className="return_button_container">
        <button
          onClick={() => {
            handleNavigate("/login");
          }}
          className="return_button"
        >
          Sign out
        </button>
      </div>
      <h1 className="home_header">Credit Path</h1>
      <div className="home_content">
        {buttons.map((button) => (
          <div className="home_option_buttons_container">
            <button
              className="navigation_buttons home_option_buttons"
              onClick={() => handleNavigate(button.path)}
            >
              {button.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

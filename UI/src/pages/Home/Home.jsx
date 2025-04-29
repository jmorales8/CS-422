import "./home.css";
import { handleNavigate } from "../../components/Navigate";
import { useUser } from "../../contexts/UserContext";
const buttons = [
  { label: "Find a Credit Card", path: "find-a-card" },
  { label: "Credit Score / Payments", path: "score-and-payments" },
  { label: "Spending Simulator", path: "spending-simulator" },
  { label: "Credit Education Hub", path: "education-hub" },
];

export function Home() {
  const { user } = useUser();
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
        <span className="username">
          Welcome <b>{user?.name}</b>!
        </span>
      </div>
      <div className="home_creditPathLogo_container">
        <img
          className="home_creditPathLogo"
          src="CreditPathLogo.png"
          alt="CreditPathLogo"
        />
      </div>
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

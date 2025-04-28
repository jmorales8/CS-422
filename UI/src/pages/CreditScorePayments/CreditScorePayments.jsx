import "./creditScorePayments.css";
import { handleNavigate } from "../../components/Navigate";
export function CreditScorePayments() {
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
      <div className="CSP_page">
        <h1>Credit Score / Payments</h1>
        <div className="CSP_page_rows">
          <div className="CSP_page_row">
            <span className="CSP_creditScore">
              Current Credit Score:
              <span style={{ color: "green" }}> 720</span>
            </span>
            <button
              className="CSP_button"
              onClick={() => handleNavigate("/credit-score-details")}
            >
              More details
            </button>
          </div>
          <div className="CSP_page_row">
            <span className="CSP_upcomingPayment">
              Upcoming payment: Chase -
              <span style={{ color: "#f73838" }}> Due 3 Days </span>
            </span>
          </div>
          <div className="CSP_page_row">
            <button className="CSP_button">
              Make a payment / Set auto-pay
            </button>
          </div>
          <div className="CSP_page_row">
            <button className="CSP_button">View Spending Insights</button>
          </div>
        </div>
      </div>
    </div>
  );
}

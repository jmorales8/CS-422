import "./spendingSimulator.css";
import { handleNavigate } from "../../components/Navigate";
import { useState } from "react";
export function SpendingSimulator() {
  const [calculated, setCalucated] = useState(false);
  const handleIsCalculated = () => {
    setCalucated(true);
  };
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
      <div className="SS_page">
        <h1>Spending Simulator</h1>
        {calculated ? (
          <>
            <div className="SS_page_rows">
              <div className="CSP_page_row">
                <span className="SS_earnings">Monthly Spending: <b>$2,800</b></span>
              </div>
              <div className="CSP_page_row">
                <span className="SS_earnings">Estimated Cashback Earned: <b>$30</b></span>
              </div>
              <div className="CSP_page_row">
                <span className="SS_earnings">Estimated Interest Paid: <b>$10</b></span>
              </div>
              <div className="CSP_page_row">
                <span className="SS_earnings">Best Recommended Card: <b>Some Card</b></span>
              </div>
            </div>
            <div>
              <button className="SS_button" onClick={handleIsCalculated}>
                Apply Now
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="SS_page_rows">
              <div className="CSP_page_row">
                <span className="CSP_creditScore">Enter Monthly Spending:</span>
                <span className="SS_input_symbol">$</span>
                <input className="SS_input" />
              </div>
              <div className="CSP_page_row">
                <button className="SS_button">
                  Forecast Rewards & Savings
                </button>
              </div>
              <div className="CSP_page_row">
                <button className="SS_button">
                  Compare Current vs New Card
                </button>
              </div>
            </div>
            <div>
              <button className="SS_button" onClick={handleIsCalculated}>
                Calculate
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

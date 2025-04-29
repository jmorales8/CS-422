import "./spendingSimulator.css";
import { handleNavigate } from "../../components/Navigate";
import { useState } from "react";

export function SpendingSimulator() {
  const [calculated, setCalculated] = useState(false);
  const [spending, setSpending] = useState(""); // New: track input
  const [finalSpending, setFinalSpending] = useState(0); // New: finalized value

  const handleCalculate = () => {
    const value = parseFloat(spending);
    if (!isNaN(value) && value > 0) {
      setFinalSpending(value);
      setCalculated(true);
    } else {
      alert("Please enter a valid spending amount.");
    }
  };

  return (
    <div className="standard_page" style={{background: "linear-gradient(to bottom right, #e2e6eb, #4c4d67); !important"}}>
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

      <div className="SS_page" style={{background: "linear-gradient(to bottom right, #e2e6eb, #4c4d67); !important"}}>
        <h1>Spending Simulator</h1>

        {calculated ? (
          <>
            <div className="SS_page_rows">
              <div className="CSP_page_row">
                <span className="SS_earnings">
                  Monthly Spending: <b>${finalSpending.toFixed(2)}</b>
                </span>
              </div>
              <div className="CSP_page_row">
                <span className="SS_earnings">
                  Estimated Cashback Earned: <b>${(finalSpending * 0.01).toFixed(2)}</b>
                </span>
              </div>
              <div className="CSP_page_row">
                <span className="SS_earnings">
                  Estimated Interest Paid: <b>${(finalSpending * 0.003).toFixed(2)}</b>
                </span>
              </div>
              <div className="CSP_page_row">
                <span className="SS_earnings">
                  Best Recommended Card: <b>Some Card</b>
                </span>
              </div>
            </div>

            <div>
              <button className="SS_button">
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
                <input
                  className="SS_input"
                  type="number"
                  min="0"
                  value={spending}
                  onChange={(e) => setSpending(e.target.value)}
                />
              </div>

            </div>

            <div>
              <button
                className="SS_button"
                onClick={handleCalculate}
                disabled={!spending || parseFloat(spending) <= 0}
              >
                Calculate
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

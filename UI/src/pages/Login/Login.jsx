import React, { useState } from "react";
import { handleNavigate } from "../../components/Navigate";
import { useUser } from "../../contexts/UserContext";
import "./login.css";

export const Login = () => {
  const { setUser } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [selectedKnowledge, setSelectedKnowledge] = useState(null);
  const [isLoginMode, setIsLoginMode] = useState(false); // are we logging in or creating?
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.password) {
      alert("Please fill in both username and password.");
      return;
    }

    setUser({ name: formData.name });

    if (isLoginMode) {
      // If they are logging in, go directly to Home
      handleNavigate("/home");
    } else {
      // If they are creating account, show questionnaire
      setShowQuestionnaire(true);
    }
  };

  const handleFinishQuestionnaire = () => {
    setShowQuestionnaire(false);
    handleNavigate("/home");
  };

  const toggleLoginMode = () => {
    setIsLoginMode((prev) => !prev);
  };

  return (
    <div className="login_container">
      <h2>CreditPath</h2>

      <div>
        <span className="login_text_username">Username:</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <span className="login_text_password">Password:</span>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button className="small_button" onClick={handleSubmit}>
        {isLoginMode ? "Login" : "Create Account"}
      </button>

      <div className="login_toggle">
        <button onClick={toggleLoginMode}>
          {isLoginMode ? "Create New Account" : "Login Instead"}
        </button>
      </div>

      {/* Questionnaire pop-up */}
      {showQuestionnaire && (
        <div className="modal_overlay">
          <div className="modal_content">
            <h2 className="header_text">Quick Questionnaire</h2>
            <p style={{ color: "black" }}>
              How familiar are you with credit cards?
            </p>

            <div className="modal_buttons">
              <button
                className={`small_button ${
                  selectedKnowledge === "never" ? "selected_button" : ""
                }`}
                onClick={() => setSelectedKnowledge("never")}
              >
                Never used one
              </button>

              <button
                className={`small_button ${
                  selectedKnowledge === "some" ? "selected_button" : ""
                }`}
                onClick={() => setSelectedKnowledge("some")}
              >
                Some experience
              </button>

              <button
                className={`small_button ${
                  selectedKnowledge === "very" ? "selected_button" : ""
                }`}
                onClick={() => setSelectedKnowledge("very")}
              >
                Very familiar
              </button>
            </div>

            <p style={{ marginTop: "20px" }}>
              Based on your responses, your credit card knowledge is considered{" "}
              <b>Basic</b>.
            </p>

            <button
              className="small_button"
              onClick={handleFinishQuestionnaire}
              style={{ marginTop: "20px" }}
              disabled={!selectedKnowledge} // Disable if no choice
            >
              Continue to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

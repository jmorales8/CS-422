import { mockText } from "../../../components/mockText";
import { handleNavigate } from "../../../components/Navigate";
import "./startLesson.css";
const navButtons = [
  { label: "Back", path: "/education-hub" },
  { label: "Main", path: "/home" },
  { label: "Take Quiz", path: "/quiz" },
  { label: "Next Topic", path: "/bruh" },
];
export function StartLesson() {
  return (
    <div className="standard_page">
      <div className="navbar_buttons">
        {navButtons.map((button) => (
          <button
            onClick={() => {
              handleNavigate(button.path);
            }}
            className="return_button"
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="header_text">
        <h1>Credit Education</h1>
        <h2>Understanding APR</h2>
      </div>
      <div className="SL_page">
        <div className="SL_video_container">
          <video className="SL_video" controls>
            <source src="apr-video.mp4" type="video/mp4" />
          </video>
          <div className="SL_video_text">{mockText()}</div>
        </div>
        <div className="SL_answers">
          <button className="SL_answers_button">Answer 1</button>
          <button className="SL_answers_button">Answer 2</button>
        </div>
      </div>
    </div>
  );
}

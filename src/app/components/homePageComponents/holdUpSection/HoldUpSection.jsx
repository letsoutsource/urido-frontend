import Link from "next/link";
import "./holdUpSection.css";
const HoldUpSection = () => {
  return (
    <div className="holdUpSection-container">
      <h1 className="holdUpSection-heading">
        Hold up! Here is the most important part
      </h1>
      <p className="holdUpSection-para">
        Thank you for visiting our website! We would be beyond delighted to see
        your name on our booking list anytime soon. But it’s worth the wait.
      </p>
      <Link href="/help" className="holdUpSection-button">Help Line</Link>
    </div>
  );
};

export default HoldUpSection;

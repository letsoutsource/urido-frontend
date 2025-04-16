import Link from "next/link";
import "./holdUpSection.css";

const HoldUpSection = () => {
  return (
    <div className="holdUpSection-container">
      <h1 className="holdUpSection-heading">
        Hold up! Here is the most important part
      </h1>
      <p className="holdUpSection-para">
        Thank you for visiting our website! We’d be delighted to see your name
        on our taxi booking list for a premium ride or airport transfer. It’s
        worth the wait.
      </p>
      <Link
        href="https://urido.webbooker.icabbi.com/"
        target="_self"
        className="holdUpSection-button"
      >
        Book Cab
      </Link>
    </div>
  );
};

export default HoldUpSection;

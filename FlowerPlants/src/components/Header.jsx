import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <nav>
        <div className="header-container">
          <ol>
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="/myplants" className="link">
              <li>My Plants</li>
            </Link>
            <Link to="/create" className="link">
              <li>Add Plant</li>
            </Link>
            <Link to="/about" className="link">
              <li>About</li>
            </Link>
          </ol>
          <img
            src="flowerplant.svg"
            alt="FlowerPlant Logo"
            className="header-logo"
          />
        </div>
      </nav>
    </div>
  );
}

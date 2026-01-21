import { FaSpinner } from "react-icons/fa";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <FaSpinner className="loader-icon" />
      <p className="loader-text">Connecting to server...</p>
    </div>
  );
};

export default Loader;

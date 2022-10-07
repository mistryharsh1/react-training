import "../App.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="login_container">
      <div className="img_box">
        <h3>Welcome </h3>
        <p>
          Hello there, you are welcomed to login page to continue shopping or
          explore more products, if you are vendor then you would be able to
          add, edit, remove products and edit your profile
        </p>
      </div>
      <div className="content_box">
        <div className="login">
          <h3>Sign up</h3>

          <input type="email" placeholder="enter email" />

          <input type="password" placeholder="enter password" />

          <input type="password" placeholder="verify password" />

          <button
            onClick={() => {
              alert("button clicked!");
            }}
          >
            Login
          </button>
          <p>
            Already have an account?{" "}
            <span className="highlight">
              <Link to="/login"> Login </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

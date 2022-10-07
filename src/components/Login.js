import "../App.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_container">
      <div className="img_box">
        <h3>Welcome Back!</h3>
        <p>
          Hello there, you are welcomed to login page to continue shopping or
          explore more products, if you are vendor then you would be able to
          add, edit, remove products and edit your profile
        </p>
      </div>
      <div className="content_box">
        <div className="login">
          <h3>Login</h3>

          <input type="email" placeholder="enter email" />

          <input type="password" placeholder="password" />

          <button
            onClick={() => {
              alert("button clicked!");
            }}
          >
            Login
          </button>
          <p>
            didn't have account?{" "}
            <span className="highlight">
              <Link to="/signup">sign up </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

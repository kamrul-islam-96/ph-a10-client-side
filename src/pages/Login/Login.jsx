import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { FaEye, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import { FiEyeOff } from "react-icons/fi";

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        toast.success("Log in successfull");
        event.target.reset();
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("invalid credential");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Log in successfull");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error("Log in failed");
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogIn}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input rounded-full focus:border-0 focus:outline-gray-200 pr-12"
                placeholder="Password"
              />
              {showPassword ? (
                <FiEyeOff onClick={()=> setShowPassword(false)} className="absolute right-8 top-4 cursor-pointer z-10 text-gray-500 hover:text-gray-700" />
              ) : (
                <FaEye onClick={()=> setShowPassword(true)} className="absolute right-8 top-4 cursor-pointer z-10 text-gray-500 hover:text-gray-700" />
              )}
            </div>

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn text-white mt-4 rounded-full bg-linear-to-r from-pink-500 to-red-600">
              Login
            </button>
          </fieldset>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white rounded-full text-black border-[#e5e5e5]"
        >
          <FaGoogle />
          Login with Google
        </button>
        <p className="text-center">
          New to our website? Please{" "}
          <Link className="text-blue-500 hover:text-blue-800" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

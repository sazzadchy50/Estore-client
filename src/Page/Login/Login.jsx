import { useContext } from "react";
import {  FaGoogle } from "react-icons/fa";



import { Link, useLocation, useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../FirebaseAuth/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    
    
      signIn(email, password)
        .then((result) => {
          console.log(result.user);
          toast.success('user login successful');
          setTimeout(() =>navigate(location?.state ? location.state : "/"), 2000);
          
          
        })
        .catch((error) => {
          console.log(error.message);
          toast.error("Invalid email or password")
        });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  // const handleGithubLogin =()=>{
  //   signInWithGithub()
  // }

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-purple-500 text-white ">
                Login
              </button>
            </div>
          </form>
          <div className="divider">OR</div>
          <div>
            <button onClick={handleGoogleLogin} className="btn w-full">
              <FaGoogle />
              Log in with Google
            </button>
           
          </div>
          <p className="text-center mb-5">
            Do not have a account{" "}
            <Link to="/register" className="text-purple-500">
              {" "}
              Register
            </Link>
          </p>
        </div>
        <div>
          <Toaster></Toaster>
       
        </div>
      </div>
    </div>
  );
};

export default Login;

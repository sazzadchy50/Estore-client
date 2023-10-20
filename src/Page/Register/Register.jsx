import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link,  useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../FirebaseAuth/AuthProvider";

const Register = () => {
  const { signUp, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo =e.target.photo.value
    console.log(email, password);

    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/.test(password)){
      toast.error('password must be at least 6 characters with upper case with special characters')      
    } else{
    signUp(email, password)
      .then((result) => {
        console.log(result.user);
         toast.success('user registration successful');
         updateProfile(result.user, {
          displayName: name,
          photoURL: photo
         })
         
         setTimeout(()=> navigate('/') ,2000)
      
      })
      .catch((error) => {
        console.log(error.code);
        toast.error("Email already in use")

      });
    }
  };
  const handleGoogleLogin = () => {
    signInWithGoogle();
   
  };
 
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Picture</span>
              </label>
              <input
                type="photo"
                name="photo"
                placeholder="photo"
                className="input input-bordered"
                
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            <div className="form-control">
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
                Register
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
            Already have a account{" "}
            <Link to="/login" className="text-purple-500">
              Login
            </Link>
          </p>
        </div>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default Register;

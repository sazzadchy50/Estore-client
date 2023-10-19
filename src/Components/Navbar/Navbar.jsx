// import { useContext } from "react";
// import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// // import { AuthContext } from "../../FirebaseAuth/AuthProvider";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   console.log(user);
//   const location = useLocation();
//   const navigate = useNavigate()
//   const activeNavStyle = "bg-purple-500 text-white ";

//   const userDemoImg = 
//     <img className="rounded-full " src="https://i.ibb.co/D4qj0Xt/user.png" />

    
//   const userImg =  <img className="rounded-full " src={user?.photoURL} />
// console.log(user);
//   console.log(user?.photoURL);
//   console.log(user?.displayName);
//   const handleLogOut = () => {
//     logOut();
//     navigate('/login')
//   };
//   const navLink = (
//     <>
//       <ul>
//         <li
//           className={`mr-1 rounded-xl lg:my-2
//         ${location.pathname === "/" ? activeNavStyle : ""}`}
//         >
//           <NavLink to="/" style={{ background: "bg-sky-500" }}>
//             Home
//           </NavLink>
//         </li>
//         <li
//           className={`mr-1 rounded-xl lg:my-2
//         ${location.pathname === "/contact" ? activeNavStyle : ""}`}
//         >
//           <NavLink to="/contact" style={{ background: "bg-sky-500" }}>
//             Contact
//           </NavLink>
//         </li>
//         <li
//           className={`mr-1 rounded-xl lg:my-2
//         ${location.pathname === "/faq" ? activeNavStyle : ""}`}
//         >
//           <NavLink to="/faq" style={{ background: "bg-sky-500" }}>
//             FAQ
//           </NavLink>
//         </li>
//       </ul>
//     </>
//   );
//   return (
//     <>
//       {/* Desktop navbar */}
//         <div className="hidden lg:block bg-gray-800 min-h-screen text-white text-center   top-0 sticky  ">
//       <div >
//            <div className="p-5 shadow-xl	">
//              <h1 className="text-2xl font-bold ">
//                <span className="mr-5">
//                  <span className="text-3xl italic text-purple-500 ">C</span>
//                  orporate
//                </span>
//                <br />
//                <span className="ml-5 text-3xl italic text-purple-500">E</span>
//                manager
//              </h1>
//            </div>
//            <div className="  ">
//            <div className=" ">
//              {user && (
//                <div>
//                  <div className="w-10 rounded-full mx-auto my-3">
                   
//                    {
                    
//                      user?.photoURL ? userImg : userDemoImg
                    
          
//                    }
//                  </div>
                 
//                  <h2 className="text-center">{user?.displayName}</h2>
//                  <h2 className="text-center">{user?.email}</h2>
//                  <div className="divider" />
//                </div>
//              )}
          
//              {!user ? (
//                <Link to="/login" className="">
//                  <button className="btn w-full btn-sm">Login</button>
//                </Link>
//              ) : (
//                <button onClick={handleLogOut} className="btn w-full btn-sm">
//                  LogOut
//                </button>
//              )}
          
             
//            </div>
        
              
//            <div className=" mt-12">
//            {navLink}
//            </div>
//            {/* <div className="">
          
//            <p className=" mt-96 p-5">Copyright © 2023 - All right reserved by Corporate Emanager</p>
//            </div> */}
//          </div>
//         </div>
//       </div>
// {/* tablet and mobile navbar */}
//       <div className=" lg:hidden navbar  bg-base-100">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               {/* user info */}
//               {user && (
//                 <div>
//                   <div className="w-10 rounded-full mx-auto mb-2">
                    
//                   {
                    
//                     user?.photoURL ? userImg : userDemoImg
                   
         
//                   }
//                   </div>
//                   <h2 className="text-center">{user?.displayName}</h2>
//                   <h2 className="text-center">{user?.email}</h2>
//                   <div className="divider" />
//                 </div>
//               )}

//               {/* menu items  */}
//               {navLink}

//               <div className="divider" />

//               {!user ? (
//                 <Link to="/login" className="">
//                   <button className="btn w-full btn-sm">Login</button>
//                 </Link>
//               ) : (
//                 <button onClick={handleLogOut} className="btn w-full btn-sm">
//                   LogOut
//                 </button>
//               )}
//             </ul>
//           </div>
//         </div>

//         <div className="navbar-end">
//           <h1 className="text-2xl font-bold">
//             <span>
//               <span className="text-3xl italic text-purple-500 ">C</span>
//               orporate
//             </span>
//             <span className="ml-4 text-3xl italic text-purple-500">E</span>
//             manager
//           </h1>
//         </div>
//       </div>
//     </>
//   );
// };


const Navbar = () => {
    return (
        <div className="border text-5xl">
            navbar
        </div>
    );
};

export default Navbar;


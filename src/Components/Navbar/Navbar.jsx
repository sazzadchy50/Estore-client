import { useContext } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../FirebaseAuth/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut();

    Navigate('/login')
  };
    const navLink =(
        <>
            <ul>
                <li className="mt-5"><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/addProduct">Add Product</NavLink></li>

                <div className="divider"/>
                <h2 className="ml-4 text-xl">{user?.displayName}</h2>

                <li><NavLink to="/login">
                {!user ? (
               <Link to="/login" className="">
                 <button className=" w-full btn-sm text-center">Login</button>
               </Link>
             ) : (
               <button onClick={handleLogOut} className="btn w-full btn-sm text-center">
                 LogOut
               </button>
             )}

                  
                  </NavLink></li>
                  
            </ul>
      </>
    )

    const userDemoImg = 
    <img className="rounded-full " src="https://i.ibb.co/D4qj0Xt/user.png" />
    const userImg =  <img className="rounded-full " src={user?.photoURL} />
 

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/">
            <h1 className="text-2xl font-bold ">
              <span className="mr-5">
                <span className="text-3xl italic text-purple-500 ">E</span>
                store
              </span>
            </h1>
          </Link>
        </div>
        <div className="flex-none">
         <Link to="/cart">
           <div className="dropdown dropdown-end">
             <label tabIndex={0} className="btn btn-ghost btn-circle">
               <div className="indicator">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="h-5 w-5"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                   />
                 </svg>
                 {/* <span className="badge badge-sm indicator-item">8</span> */}
               </div>
             </label>
             {/* <div
               tabIndex={0}
               className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
             >
               <div className="card-body">
                 <span className="font-bold text-lg">8 Items</span>
                 <span className="text-info">Subtotal: $999</span>
                 <div className="card-actions">
                   <button className="btn btn-primary btn-block">
                     View cart
                   </button>
                 </div>
               </div>
             </div> */}
           </div>
         </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                {
                    
                    user?.photoURL ? userImg : userDemoImg                   
         
                  }
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              

            {navLink}
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

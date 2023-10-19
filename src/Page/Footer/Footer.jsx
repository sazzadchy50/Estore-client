
import { Link } from "react-router-dom";

const Footer = () => {
  const navlink =(
    <>
        <ul>
            
            <li><Link to="/">Home</Link></li>
            <li><Link to="addProduct">Add product</Link></li>
            <li><Link to="">Home</Link></li>
        </ul>
    </>
)
  return (
    <footer className="mt-32 footer footer-center p-10 text-base-content  lg:bg-gray-800 lg:text-white shadow-2xl">
      <nav className="grid grid-flow-col gap-4">
        
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
        <Link to="/faq" className="link link-hover">FAQ</Link>
      
        
      </nav>
     
      <aside>
        <p>Copyright © 2023 - All right reserved by Estore</p>
      </aside>
    </footer>
  );
};

export default Footer;

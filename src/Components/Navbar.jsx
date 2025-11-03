import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {

  return (
    <nav className=" bg-amber-200 p-4 text-gray-600 font-bold w-full h-auto sticky top-0">
        <div className="flex justify-between items-center">
            <h2 className="text-blue-600"><FaReact /></h2>
            <ul className="flex space-x-2">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'About'}>About</Link></li>
                <li><Link to={'Service'}>Service</Link></li>
                <li><Link to={'Contract'}>Contract</Link></li>
            </ul>
            <button className="bg-blue-600 text-white text-center p-2 rounded-b-sm"><Link to={'Login'}>Login</Link></button>
        </div>
    </nav>
  )
}

export default Navbar
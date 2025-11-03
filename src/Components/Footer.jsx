import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
const Footer = () => {

  return (

    <footer className= "bg-gray-800 p-4 sticky">
        <div className="flex justify-between items-center gap-8">
            <div>
                <h2 className="text-lg font-bold mb-4 text-white">About Us</h2>
                <p className="text-gray-300">
                    we are a team dedicated to providing the best products and services to our customers
                </p>
            </div>
            <div>
                <h2 className="text-lg font-bold mb-4 text-white">Quick Links</h2>
                <ul className="space-x-4">
                    <li className="text-gray-300">Home</li>
                    <li className="text-gray-300">About</li>
                    <li className="text-gray-300">Services</li>
                    <li className="text-gray-300">Contract</li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg font-bold mb-4 text-white text-center">Follow Us</h2>
                <ul className="flex space-x-4">
                    <li className="text-blue-700"><FaFacebook /></li>
                    <li className="text-green-700"><IoLogoWhatsapp /></li>
                    <li className="text-sky-600"><FaXTwitter /></li>
                    <li className="text-red-600"><GrInstagram /></li>
                </ul>
            </div>
        </div>
        <div className="Border border-t p-2 text-center text-gray-300">
            <p>2024 Code With Yourself. All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer
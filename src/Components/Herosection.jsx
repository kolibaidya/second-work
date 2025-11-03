import { Link } from "react-router-dom"

const Herosection = () => {

  return (

    <div className="flex flex-col px-4 text-white text-center items-center justify-center w-full h-[600px]" style={{
        backgroundImage: "url('/src/assets/herobg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "Cover",
        backgroundPosition: "Center"
    }}>
        <h2 className="text-4xl font-bold mb-2">Welcome to My Website</h2>
        <p className="text-lg mb-4">Your Journey Start Here.</p>
        <button className="bg-white text-indigo-600 font-bold px-6 py-2 rounded-md"><Link to={'Click Here'}>Click Here</Link></button>
    </div>
  )
}

export default Herosection
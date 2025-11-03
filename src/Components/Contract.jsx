
const Contract = () => {

  return (
    
    <div className="w-[430px] p-8 items-center">
      
        <h2 className="text-3xl font-semibold text-center py-4 bg-amber-100">Form In Contract</h2>

        <form className="space-y-4 flex flex-col mb-6 ">

            <label>First Name :</label>
            <input type="text" placeholder="Enter First Name" className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400 bg-amber-100" />

            <label>Last Name :</label>
            <input type="text" placeholder="Enter Last Name" className=" w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400 bg-amber-100"/>

            <label>Email :</label>
            <input type="text" placeholder="Enter Email" className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400 bg-amber-100"/>

            <label>Password :</label>
            <input type="text" placeholder="Enter Password" className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400 bg-amber-100" />

            <label>Contract :</label>
            <input type="text" placeholder="Enter phone" className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400 bg-amber-100"/>

            <button className=" bg-blue-600 w-full p-3 text-white rounded-full text-lg font-medium">Reset</button>

            <button className=" bg-blue-600 w-full p-3 text-white rounded-full text-lg font-medium">Submit</button>
        </form>
    </div>
  )
}

export default Contract

const Login = () => {

    return (

        <div className="w-full h-auto bg-gray-100 p-8 rounded-2xl shadow-ig">
            <div className="flex justify-center mb-4">
                <h2 className="text-3xl font-semibold text-center">Login</h2>
            </div>
            <div className="relative flex h-12 mb-6 border border-gray-300  rounded-full">
                <button className=" bg-blue-600 w-full p-3 text-white rounded-full text-lg font-medium" >Login</button>
            </div>
            <form className="space-y-4">

                <input type="Name" placeholder="Name" required className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400" />
                
                <input type="Email" placeholder="Email Address" required className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"/>
                
                <input type="Password" placeholder="Password" required className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"/>

                <div className="text-right">
                    <p className="text-blue-600 hover:underline">Forget Password</p>
                </div>
                <button className=" bg-blue-600 w-full p-3 text-white rounded-full text-lg font-medium">
                    Login
                </button>
                <p className="text-center text-gray-600">Don't have an account</p>

            </form>

        </div>
    )
}

export default Login

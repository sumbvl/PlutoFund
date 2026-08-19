import { Link } from "react-router-dom";

function Register() {
  return (
    <>
    <div className="relative min-h-screen overflow-hidden">
     <div className="">
    <img src="src/assets/robot6.png" className="absolute left-0 z-0 w-180 h-180 opacity-80" />
    <img src="src/assets/robot3.png" className="absolute right-0 z-0 w-150 h-150 opacity-80"/>
     </div>
      <div className="relative z-10 max-w-lg max-h-screen px-6 mb-5 mx-auto mt-15 bg-cyan-950 rounded-[20px] font-montserrat text-white border border-cyan-400/40 shadow-2xl shadow-cyan-500/25">
        <h1 className="text-center py-6 mt-3 text-[30px] font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-cyan-300">Register</h1>
        <form className="flex flex-col gap-4 text-base px-8">
          <div className="flex flex-col">
            <label className="text-sm mb-1 pl-3">Full Name</label>
            <input
              type="text"
              className="focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/40 shadow-md shadow-cyan-500/10 transition rounded-[30px] py-2 px-4 bg-slate-900/80 border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1 pl-3">Email Account</label>
            <input
              type="email"
              className="focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/40 shadow-md shadow-cyan-500/10 transition rounded-[30px] py-2 px-4 bg-slate-900/80 border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1 pl-3">Password</label>
            <input
              type="password"
              className="focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/40 shadow-md shadow-cyan-500/10 transition rounded-[30px] py-2 px-4 bg-slate-900/80 border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1 pl-3">Confirm Password</label>
            <input
              type="password"
              className="focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/40 shadow-md shadow-cyan-500/10 transition rounded-[30px] py-2 px-4 bg-slate-900/80 border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
          </div>
          <div className="flex justify-center pt-2 text-cyan-950 mt-2">
            <Link className="text-cyan-900 px-20 rounded-[30px] py-2.5 bg-gradient-to-r from-sky-200 to-cyan-300 font-semibold hover:opacity-90 transition">
              Create Account
            </Link>
          </div>
          <p className="text-xs pb-6 text-cyan-200/70 flex items-center justify-center">
              Already have an account? <Link to="/login" className="pl-2 text-cyan-300 hover:underline">Log in</Link>
            </p>
        </form>
      </div>
    </div>
    </>
  );
}

export default Register;

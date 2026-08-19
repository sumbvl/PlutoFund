import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const users = [
    {email: "sushi@gmail.com", password: "2512"}, {email: "nurpur@gmail.com", password: "1505"},
    {email: "hahim@gmail.com", password: "2509"}
];

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleLogin (e) {
        e.preventDefault();
        const match = (
            (s) => {
                s.email === email;
                s.password === password;
            }
        )
        if(match) {
            navigate("/account");
        } else {
            setError("Incorrect credentials entered.");
        }
    }

  return (
    <>
    <div className="relative min-h-screen overflow-hidden">
     <div>
    <img src="src/assets/robot6.png" className="absolute left-0 z-0 w-180 h-180 opacity-80" />
    <img src="src/assets/robot3.png" className="absolute right-0 z-0 w-150 h-150 opacity-80"/>
     </div>
      <div className="relative z-10 max-w-lg mx-auto mt-20 px-6 py-6 bg-cyan-950 rounded-[20px] font-montserrat text-white border border-cyan-400/40 shadow-2xl shadow-cyan-500/25">
        <h1 className="text-center py-6 text-[30px] font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-cyan-300">Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4 text-base px-8">
          <div className="flex flex-col">
            <label className="text-sm mb-1 pl-3">Username/Email</label>
            <input
              type="text"
              className="focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/40 shadow-md shadow-cyan-500/10 transition rounded-[30px] py-2 px-4 bg-slate-900/80 border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1 pl-3">Password</label>
            <input
              type="password"
              className="focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/40 shadow-md shadow-cyan-500/10 transition rounded-[30px] py-2 px-4 bg-slate-900/80 border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
          </div>
          <div className="flex justify-center pt-4 text-cyan-950 my-4">
            <button type="submit" className="text-cyan-900 px-20 rounded-[30px] py-2.5 bg-gradient-to-r from-sky-200 to-cyan-300 font-semibold hover:opacity-90 transition">
              Login
            </button>
          </div>
          <p className="text-xs text-cyan-200/70 mt-1 flex items-center justify-center">
              Don't have an account? <Link to="/register" className="pl-2 text-cyan-300 hover:underline">Register Now</Link>
            </p>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;

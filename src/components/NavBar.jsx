import { Link } from 'react-router-dom'

function NavBar () {
    return (
    <div className="bg-transparent flex flex-row justify-between text-white font-montserrat ">
        <Link to="/" className="py-6 px-10 hover:scale-102">
          <div className="flex flex-row justify-between items-center">
            <img src="src/assets/logo.png" className="w-8 h-8 mr-3" />
            <span className="tracking-[5px] font-semibold text-lg">
              PLUTO<span className='bg-clip-text text-transparent bg-linear-to-r from-cyan-100 to-sky-300'>FUNDS</span>
            </span>
            </div>
            </Link>
        <div className="flex flex-row justify-between gap-10 tracking-widest font-semibold text-md py-6 px-11">
            <div className='group'>
            <Link to="/" className='group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-sky-100 group-hover:to-cyan-300 inline-block group-hover:-translate-y-0.5'>Home</Link>
            </div>
            <div className='group'>
            <Link to="/features" className='group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-sky-100 group-hover:to-cyan-300 inline-block group-hover:-translate-y-0.5'>Features</Link>
            </div>
            <div className='group'>
            <Link to="/products" className='group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-sky-100 group-hover:to-cyan-300 inline-block group-hover:-translate-y-0.5'>Projects</Link>
            </div>
            <div className='group'>
            <Link to="/login" className='group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-sky-100 group-hover:to-cyan-300 inline-block group-hover:-translate-y-0.5'>Login</Link>
            </div>
        </div>
    </div>
    );
}

export default NavBar;

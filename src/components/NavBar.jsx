import { Link } from 'react-router-dom'

function NavBar () {
    return (
    <div className="bg-transparent flex flex-row justify-between text-white font-montserrat ">
        <Link className="py-6 px-10">
          <div className="flex flex-row justify-between items-center">
            <img src="src/assets/logo.png" className="w-7 h-7 mr-4 rounded-full" />
            <span className="tracking-[5px] font-semibold text-lg">
              PLUTO<span className='bg-clip-text text-transparent bg-linear-to-r from-cyan-100 to-sky-300'>FUNDS</span>
            </span>
            </div>
            </Link>
        <div className="flex flex-row justify-between gap-10 tracking-widest font-semibold text-md py-6 px-11">
            <Link to="/" >Home</Link>
            <Link to="/features" >Features</Link>
            <Link to="/products" >Projects</Link>
            <Link to="/clients" >Clients</Link>
        </div>
    </div>
    );
}

export default NavBar;
